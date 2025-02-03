import type { APIRoute } from 'astro';
import type { Creature } from '../../../data/creatures';
import { creatures } from '../../../data/creatures';
import fs from 'node:fs/promises';
import path from 'node:path';

export const PUT: APIRoute = async ({ params, request }) => {
  try {
    const creatureId = params.id;
    const data = await request.json();
    
    // Validate the creature data
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
      'subcategory',
      'family'
    ];

    const isValid = requiredFields.every(field => 
      typeof data[field] === 'string' && data[field].trim() !== ''
    );

    if (!isValid) {
      return new Response(JSON.stringify({ error: 'Invalid creature data' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Find the creature to update
    const creatureIndex = creatures.findIndex(c => c.id === creatureId);
    if (creatureIndex === -1) {
      return new Response(JSON.stringify({ error: 'Creature not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Create the updated creature
    const updatedCreature: Creature = {
      ...data,
      id: creatureId, // Keep the original ID
      family: data.family || '', // Use blank if family is not provided
      lastUpdated: data.lastUpdated ? parseInt(data.lastUpdated) : undefined // Convert lastUpdated to number
    };

    // Read the current creatures file
    const creaturesFilePath = path.join(process.cwd(), 'src', 'data', 'creatures.ts');
    let fileContent = await fs.readFile(creaturesFilePath, 'utf-8');

    // Find the start and end of the creatures array
    const arrayStartMarker = 'export const creatures: Creature[] = [';
    const arrayEndMarker = '];';
    const arrayStart = fileContent.indexOf(arrayStartMarker);
    const arrayEnd = fileContent.indexOf(arrayEndMarker, arrayStart) + arrayEndMarker.length;

    // Find the specific creature entry to update
    const creatureStartRegex = new RegExp(`\\{\\s*id:\\s*['"]${creatureId}['"]`);
    const creatureStart = fileContent.slice(arrayStart).search(creatureStartRegex) + arrayStart;
    if (creatureStart < arrayStart) {
      throw new Error('Could not find creature entry in file');
    }

    // Find the end of the creature entry
    let bracketCount = 0;
    let creatureEnd = creatureStart;
    for (let i = creatureStart; i < fileContent.length; i++) {
      if (fileContent[i] === '{') bracketCount++;
      if (fileContent[i] === '}') {
        bracketCount--;
        if (bracketCount === 0) {
          creatureEnd = i + 1;
          break;
        }
      }
    }

    // Create the new creature entry with proper indentation
    const newCreatureEntry = `  {
    id: '${updatedCreature.id}',
    name: '${updatedCreature.name}',
    scientificName: '${updatedCreature.scientificName}',
    period: '${updatedCreature.period}',
    location: '${updatedCreature.location}',
    length: '${updatedCreature.length}',
    weight: '${updatedCreature.weight}',
    diet: '${updatedCreature.diet}',
    image: '${updatedCreature.image}',
    description: '${updatedCreature.description.replace(/'/g, "\\'").replace(/"/g, '\\"').replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/\t/g, '\\t')}',
    category: '${updatedCreature.category}',
    subcategory: '${updatedCreature.subcategory}',
    family: '${updatedCreature.family}'${updatedCreature.modelId ? `,\n    modelId: '${updatedCreature.modelId}'` : ''}${updatedCreature.lastUpdated ? `,\n    lastUpdated: ${updatedCreature.lastUpdated}` : ''}
  }`;

    // Replace only the specific creature entry
    const newFileContent = 
      fileContent.slice(0, creatureStart) + 
      newCreatureEntry +
      fileContent.slice(creatureEnd);

    // Write the updated content back to the file
    await fs.writeFile(creaturesFilePath, newFileContent, 'utf-8');

    return new Response(JSON.stringify({ 
      success: true, 
      creature: updatedCreature 
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Error updating creature:', error);
    return new Response(JSON.stringify({ error: 'Failed to update creature' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}; 