import type { APIRoute } from 'astro';
import fs from 'node:fs/promises';
import path from 'node:path';

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();
    const image = formData.get('image') as File;
    const directory = formData.get('directory') as string || ''; // Optional subdirectory
    
    if (!image) {
      return new Response(JSON.stringify({ error: 'No image provided' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Validate file type
    const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
    if (!allowedTypes.includes(image.type)) {
      return new Response(JSON.stringify({ error: 'Invalid image type. Only JPG and PNG are allowed.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Create the images directory if it doesn't exist
    const publicDir = path.join(process.cwd(), 'public');
    const imagesDir = path.join(publicDir, 'images');
    await fs.mkdir(imagesDir, { recursive: true });

    // Create subdirectory if specified (e.g., 'facts')
    const targetDir = directory ? path.join(imagesDir, directory) : imagesDir;
    await fs.mkdir(targetDir, { recursive: true });

    // Write the file
    const buffer = Buffer.from(await image.arrayBuffer());
    const filePath = path.join(targetDir, image.name);
    await fs.writeFile(filePath, buffer);

    const relativePath = directory ? `/images/${directory}/${image.name}` : `/images/${image.name}`;

    return new Response(JSON.stringify({ 
      success: true,
      filename: image.name,
      path: relativePath
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Error uploading image:', error);
    return new Response(JSON.stringify({ error: 'Failed to upload image' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}; 