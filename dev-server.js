// Development server to serve both API and client files with Vite integration
import express from 'express';
import { setupVite } from './server/vite.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { createServer } from 'http';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Create express app
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Create HTTP server
const server = createServer(app);

// Setup Vite in development mode
await setupVite(app, server);

// Get port from environment variable or default to 12783
const port = parseInt(process.env.PORT || '12783', 10);

// Start server
server.listen(port, '0.0.0.0', () => {
  console.log(`Development server running on http://0.0.0.0:${port}`);
  console.log(`Press Ctrl+C to stop the server`);
});