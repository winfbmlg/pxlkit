const fs = require('fs');
const path = require('path');

const srcDir = 'c:/pxlkit/apps/web/src/components/ui-kit';
const destDir = 'c:/pxlkit/example-page/src/components/ui-kit';

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

// Copy elements.tsx to index.tsx for easier importing
fs.copyFileSync(
  path.join(srcDir, 'elements.tsx'),
  path.join(destDir, 'index.tsx')
);

console.log('UI Kit copied successfully to', destDir);
