import type { APIRoute } from 'astro';
import fs from 'node:fs/promises';
import path from 'node:path';

export const POST: APIRoute = async ({ request }) => {
  try {
    const { oldPath, newPath } = await request.json();
    
    if (!oldPath || !newPath) {
      return new Response(JSON.stringify({ error: 'Missing oldPath or newPath' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Update references in creatures.ts
    const creaturesPath = path.join(process.cwd(), 'src', 'data', 'creatures.ts');
    let creaturesContent = await fs.readFile(creaturesPath, 'utf-8');
    creaturesContent = creaturesContent.replace(
      new RegExp(`image: ['"]${oldPath}['"]`, 'g'),
      `image: '${newPath}'`
    );
    await fs.writeFile(creaturesPath, creaturesContent, 'utf-8');

    // Update references in facts.ts
    const factsPath = path.join(process.cwd(), 'src', 'data', 'facts.ts');
    let factsContent = await fs.readFile(factsPath, 'utf-8');
    factsContent = factsContent.replace(
      new RegExp(`image: ['"]${oldPath}['"]`, 'g'),
      `image: '${newPath}'`
    );
    await fs.writeFile(factsPath, factsContent, 'utf-8');

    return new Response(JSON.stringify({ 
      success: true,
      message: 'Image references updated successfully'
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Error updating image references:', error);
    return new Response(JSON.stringify({ error: 'Failed to update image references' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}; 