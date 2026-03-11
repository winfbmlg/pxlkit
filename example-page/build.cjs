const { execSync } = require('child_process');
const fs = require('fs');

try {
  const result = execSync('npx vite build --debug', { stdio: 'pipe' });
  fs.writeFileSync('build-out.txt', result);
} catch (e) {
  fs.writeFileSync('build-out.txt', "STDOUT:\n" + (e.stdout ? e.stdout.toString() : '') + "\nSTDERR:\n" + (e.stderr ? e.stderr.toString() : ''));
}
