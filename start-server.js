// Simple server to start the built application
import app from './dist/index.js';
import { createServer } from 'http';

// Create HTTP server
const server = createServer(app);

// Get port from environment variable or default to 12783
const port = parseInt(process.env.PORT || '12783', 10);

// Listen on the specified port
server.listen(port, '0.0.0.0', () => {
  console.log(`Server running on http://0.0.0.0:${port}`);
  console.log(`Press Ctrl+C to stop the server`);
});

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\\nShutting down server...');
  server.close(() => {
    console.log('Server closed.');
    process.exit(0);
  });
});