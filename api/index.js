// api/index.js - Catch-all route for the frontend
import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  // This handles all routes that aren't API routes
  
  // For API calls, this shouldn't be reached due to routing, but just in case:
  if (req.url && req.url.startsWith('/api/')) {
    res.status(404).json({ error: 'API endpoint not found' });
    return;
  }
  
  // For all frontend requests, serve the built index.html file
  try {
    // With the updated build process, files should be in www directory
    const indexPath = path.join(process.cwd(), 'www', 'index.html');
    
    if (fs.existsSync(indexPath)) {
      const html = fs.readFileSync(indexPath, 'utf8');
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      res.status(200).send(html);
    } else {
      console.error('Index.html not found at expected location:', indexPath);
      res.status(404).send(`
        <!DOCTYPE html>
        <html>
        <head><title>Not Found</title></head>
        <body>
          <h1>Frontend Build Not Found</h1>
          <p>The frontend build files were not found at: ${indexPath}</p>
        </body>
        </html>
      `);
    }
  } catch (error) {
    console.error('Error in API index handler:', error);
    res.status(500).send(`
      <!DOCTYPE html>
      <html>
      <head><title>Server Error</title></head>
      <body>
        <h1>Internal Server Error</h1>
        <p>${error.message}</p>
      </body>
      </html>
    `);
  }
}