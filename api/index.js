import { createReadStream } from 'fs';
import { join } from 'path';
import { stat } from 'fs/promises';

// This API route handles all non-API requests to serve the React frontend
export default async function handler(req, res) {
  // If it's an API request, this shouldn't be reached due to Vercel's routing,
  // but we'll be safe and return 404 if somehow it is
  if (req.url.startsWith('/api/')) {
    return res.status(404).json({ error: 'Not found' });
  }

  // Determine the file path to serve
  let path = req.url.split('?')[0]; // Remove query string
  if (path === '/') {
    path = '/index.html';
  }
  
  const filePath = join(process.cwd(), 'dist/public', path);
  
  try {
    // Check if file exists
    await stat(filePath);
    
    // Serve the file
    const fileStream = createReadStream(filePath);
    const ext = filePath.split('.').pop();
    
    // Set appropriate content type
    const contentTypes = {
      'html': 'text/html',
      'js': 'application/javascript',
      'css': 'text/css',
      'json': 'application/json',
      'png': 'image/png',
      'jpg': 'image/jpeg',
      'jpeg': 'image/jpeg',
      'gif': 'image/gif',
      'svg': 'image/svg+xml',
      'ico': 'image/x-icon',
      'txt': 'text/plain'
    };
    
    res.setHeader('Content-Type', contentTypes[ext] || 'text/html');
    fileStream.pipe(res);
  } catch (err) {
    // If file doesn't exist, serve index.html for client-side routing
    const indexPath = join(process.cwd(), 'dist/public', 'index.html');
    try {
      await stat(indexPath);
      res.setHeader('Content-Type', 'text/html');
      const indexStream = createReadStream(indexPath);
      indexStream.pipe(res);
    } catch (indexErr) {
      res.status(404).send('Page not found');
    }
  }
}