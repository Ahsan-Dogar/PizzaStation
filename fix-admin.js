const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/components/admin/AdminPanel.jsx');
let content = fs.readFileSync(filePath, 'utf8');

// Remove all malformed } { patterns and replace with }) {
content = content.replace(/\}\s*\{/g, '}) {');

// Fix the button return statement that might have malformed JSX
content = content.replace(/className={`\$\{baseStyle\} \$\{variants\[variant\]\} \$\{className\}`}\"\)\s+\{/g, 
  'className={`${baseStyle} ${variants[variant]} ${className}`} ');

// Ensure proper function parameter closure
content = content.replace(/(\.\.\.\w+)\s+\)/g, '$1)');

fs.writeFileSync(filePath, content);
console.log('✓ Fixed AdminPanel.jsx');
