import type { APIRoute } from 'astro';
import type { PrehistoricFact } from '../../data/facts';
import { prehistoricFacts } from '../../data/facts';
import fs from 'node:fs/promises';
import path from 'node:path';

export const GET = async () => {
  return new Response(JSON.stringify(prehistoricFacts), {
    headers: { 'Content-Type': 'application/json' }
  });
};

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    
    // Validate the fact data
    const requiredFields = ['title', 'fact', 'image', 'category'] as const;
    const isValid = requiredFields.every(field => 
      typeof data[field] === 'string' && data[field].trim() !== ''
    );

    if (!isValid) {
      return new Response(JSON.stringify({ error: 'Invalid fact data' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Generate ID from title
    const id = `fact-${prehistoricFacts.length + 1}`;
    const newFact: PrehistoricFact = {
      ...data,
      id,
      image: data.image.startsWith('/images/facts/') ? data.image : `/images/facts/${data.image}`
    };

    // Read the current facts file
    const factsFilePath = path.join(process.cwd(), 'src', 'data', 'facts.ts');
    let fileContent = await fs.readFile(factsFilePath, 'utf-8');

    // Find the end of the facts array
    const arrayStartMarker = 'export const prehistoricFacts: PrehistoricFact[] = [';
    const arrayEndMarker = '];';
    const arrayStartIndex = fileContent.indexOf(arrayStartMarker) + arrayStartMarker.length;
    const arrayEndIndex = fileContent.indexOf(arrayEndMarker, arrayStartIndex);

    // Create the new fact entry
    const newFactEntry = `  {
    id: '${newFact.id}',
    title: '${newFact.title}',
    fact: '${newFact.fact.replace(/'/g, "\\'").replace(/"/g, '\\"').replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/\t/g, '\\t')}',
    image: '${newFact.image}',
    category: '${newFact.category}'${newFact.source ? `,\n    source: '${newFact.source}'` : ''}
  }`;

    // Insert the new fact at the end of the array
    const hasExistingFacts = fileContent.slice(arrayStartIndex, arrayEndIndex).trim().length > 0;
    const insertContent = hasExistingFacts ? `,\n${newFactEntry}` : newFactEntry;
    
    const newFileContent = 
      fileContent.slice(0, arrayEndIndex) + 
      (hasExistingFacts ? insertContent : insertContent + '\n') + 
      fileContent.slice(arrayEndIndex);

    // Write the updated content back to the file
    await fs.writeFile(factsFilePath, newFileContent, 'utf-8');

    return new Response(JSON.stringify({ success: true, fact: newFact }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Error adding fact:', error);
    return new Response(JSON.stringify({ error: 'Failed to add fact' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}; 