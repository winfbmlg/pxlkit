const { execSync } = require('child_process');
try {
  execSync('npx vite build', { stdio: 'pipe' });
} catch (e) {
  console.log("STDOUT\n", e.stdout.toString());
  console.log("STDERR\n", e.stderr.toString());
}
