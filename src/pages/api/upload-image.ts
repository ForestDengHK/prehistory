import type { APIRoute } from 'astro';
import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

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
    const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg', 'image/webp'];
    if (!allowedTypes.includes(image.type)) {
      return new Response(JSON.stringify({ error: 'Invalid image type. Only JPG, PNG and WebP are allowed.' }), {
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

    // Get the file buffer
    const buffer = Buffer.from(await image.arrayBuffer());

    // Generate optimized filename
    const originalName = image.name.replace(/\.[^/.]+$/, ''); // Remove extension
    const webpFilename = `${originalName}.webp`;
    const filePath = path.join(targetDir, webpFilename);

    // Optimize image using Sharp
    await sharp(buffer)
      .webp({ quality: 80 }) // Convert to WebP with 80% quality
      .resize({ 
        width: 1200, // Max width
        height: 800, // Max height
        fit: 'inside',
        withoutEnlargement: true
      })
      .toFile(filePath);

    // Also create a thumbnail version for previews
    const thumbPath = path.join(targetDir, `${originalName}-thumb.webp`);
    await sharp(buffer)
      .webp({ quality: 70 })
      .resize({
        width: 300,
        height: 200,
        fit: 'cover'
      })
      .toFile(thumbPath);

    const relativePath = directory ? `/images/${directory}/${webpFilename}` : `/images/${webpFilename}`;
    const thumbRelativePath = directory ? `/images/${directory}/${originalName}-thumb.webp` : `/images/${originalName}-thumb.webp`;

    return new Response(JSON.stringify({ 
      success: true,
      filename: webpFilename,
      path: relativePath,
      thumbnailPath: thumbRelativePath,
      originalName: image.name
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