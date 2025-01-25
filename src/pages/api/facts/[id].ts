import type { APIRoute } from 'astro';
import type { PrehistoricFact } from '../../../data/facts';
import { prehistoricFacts } from '../../../data/facts';
import fs from 'node:fs/promises';
import path from 'node:path';

export const PUT: APIRoute = async ({ params, request }) => {
  try {
    const factId = params.id;
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

    // Find the fact to update
    const factIndex = prehistoricFacts.findIndex(f => f.id === factId);
    if (factIndex === -1) {
      return new Response(JSON.stringify({ error: 'Fact not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Create the updated fact
    const updatedFact: PrehistoricFact = {
      ...data,
      id: factId, // Keep the original ID
      image: data.image.startsWith('/images/facts/') ? data.image : `/images/facts/${data.image}`
    };

    // Read the current facts file
    const factsFilePath = path.join(process.cwd(), 'src', 'data', 'facts.ts');
    let fileContent = await fs.readFile(factsFilePath, 'utf-8');

    // Find the start and end of the facts array
    const arrayStartMarker = 'export const prehistoricFacts: PrehistoricFact[] = [';
    const arrayEndMarker = '];';
    const arrayStart = fileContent.indexOf(arrayStartMarker);
    const arrayEnd = fileContent.indexOf(arrayEndMarker, arrayStart) + arrayEndMarker.length;

    // Find the specific fact entry to update
    const factStartRegex = new RegExp(`\\{\\s*id:\\s*['"]${factId}['"]`);
    const factStart = fileContent.slice(arrayStart).search(factStartRegex) + arrayStart;
    if (factStart < arrayStart) {
      throw new Error('Could not find fact entry in file');
    }

    // Find the end of the fact entry
    let bracketCount = 0;
    let factEnd = factStart;
    for (let i = factStart; i < fileContent.length; i++) {
      if (fileContent[i] === '{') bracketCount++;
      if (fileContent[i] === '}') {
        bracketCount--;
        if (bracketCount === 0) {
          factEnd = i + 1;
          break;
        }
      }
    }

    // Create the new fact entry with proper indentation
    const newFactEntry = `  {
    id: '${updatedFact.id}',
    title: '${updatedFact.title}',
    fact: '${updatedFact.fact.replace(/'/g, "\\'").replace(/"/g, '\\"').replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/\t/g, '\\t')}',
    image: '${updatedFact.image}',
    category: '${updatedFact.category}'${updatedFact.source ? `,\n    source: '${updatedFact.source}'` : ''}
  }`;

    // Replace only the specific fact entry
    const newFileContent = 
      fileContent.slice(0, factStart) + 
      newFactEntry +
      fileContent.slice(factEnd);

    // Write the updated content back to the file
    await fs.writeFile(factsFilePath, newFileContent, 'utf-8');

    return new Response(JSON.stringify({ 
      success: true, 
      fact: updatedFact 
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Error updating fact:', error);
    return new Response(JSON.stringify({ error: 'Failed to update fact' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}; 