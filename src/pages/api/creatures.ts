import type { APIRoute } from 'astro';
import type { Creature } from '../../data/creatures';
import { creatures } from '../../data/creatures';
import fs from 'node:fs/promises';
import path from 'node:path';

function validateCreature(data: any): data is Creature {
  const requiredFields = [
    'name',
    'scientificName',
    'period',
    'location',
    'length',
    'weight',
    'diet',
    'image',
    'description',
    'category',
    'subcategory'
  ];

  return requiredFields.every(field => typeof data[field] === 'string' && data[field].trim() !== '');
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    
    // Validate the creature data
    if (!validateCreature(data)) {
      return new Response(JSON.stringify({ error: 'Invalid creature data' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Generate ID from name
    const id = data.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const newCreature: Creature = { ...data, id };

    // Read the current creatures file
    const creaturesFilePath = path.join(process.cwd(), 'src', 'data', 'creatures.ts');
    const fileContent = await fs.readFile(creaturesFilePath, 'utf-8');

    // Extract the creatures array content
    const startMarker = 'export const creatures: Creature[] = [';
    const endMarker = '];';
    const startIndex = fileContent.indexOf(startMarker) + startMarker.length;
    const endIndex = fileContent.lastIndexOf(endMarker);
    const creaturesContent = fileContent.substring(startIndex, endIndex);

    // Create the new creature entry
    const newCreatureEntry = `  {
    id: '${newCreature.id}',
    name: '${newCreature.name}',
    scientificName: '${newCreature.scientificName}',
    period: '${newCreature.period}',
    location: '${newCreature.location}',
    length: '${newCreature.length}',
    weight: '${newCreature.weight}',
    diet: '${newCreature.diet}',
    image: '${newCreature.image}',
    description: '${newCreature.description}',
    category: '${newCreature.category}',
    subcategory: '${newCreature.subcategory}'
  }`;

    // Combine the content
    const updatedContent = creaturesContent 
      ? `${creaturesContent},\n${newCreatureEntry}`
      : newCreatureEntry;

    // Create the new file content
    const newFileContent = `${fileContent.substring(0, startIndex)}${updatedContent}${fileContent.substring(endIndex)}`;

    // Write the updated content back to the file
    await fs.writeFile(creaturesFilePath, newFileContent, 'utf-8');

    return new Response(JSON.stringify({ success: true, creature: newCreature }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Error adding creature:', error);
    return new Response(JSON.stringify({ error: 'Failed to add creature' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}; 