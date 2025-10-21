// Script to test the server startup
import { spawn } from 'child_process';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

console.log('Starting server on port 12783...');
const server = spawn('npx', ['tsx', 'server/index.ts'], {
  cwd: __dirname,
  env: { ...process.env, PORT: '12783' },
  stdio: ['pipe', 'pipe', 'pipe']
});

let output = '';
server.stdout.on('data', (data) => {
  output += data.toString();
  console.log(`[STDOUT] ${data}`);
});

server.stderr.on('data', (data) => {
  output += data.toString();
  console.error(`[STDERR] ${data}`);
});

server.on('close', (code) => {
  console.log(`Server process exited with code ${code}`);
  console.log('Full output:');
  console.log(output);
});