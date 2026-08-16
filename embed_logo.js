const fs = require('fs');

const logoPath = 'c:/Users/ND Fashion/.gemini/antigravity/scratch/prochina/assets/images/logo.png';
const buf = fs.readFileSync(logoPath);
const base64Data = 'data:image/png;base64,' + buf.toString('base64');

console.log('Base64 logo string length:', base64Data.length);

const templates = [
  'c:/Users/ND Fashion/.gemini/antigravity/scratch/prochina/acknowledgment_template.html',
  'c:/Users/ND Fashion/.gemini/antigravity/scratch/prochina/email_template.html'
];

templates.forEach(filePath => {
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(/src=["']\{\{LOGO_URL\}\}["']/g, `src="${base64Data}"`);
  content = content.replace(/src=["']assets\/images\/logo\.png["']/g, `src="${base64Data}"`);
  fs.writeFileSync(filePath, content);
  console.log('Updated:', filePath);
});
