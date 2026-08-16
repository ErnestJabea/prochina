const fs = require('fs');

const realPngPath = 'C:/Users/ND Fashion/.gemini/antigravity-ide/brain/cc981eca-0eb8-499d-8e8c-65de3084feab/.user_uploaded/media_1786888742443.png';
const pngBuf = fs.readFileSync(realPngPath);

console.log('Real PNG size:', pngBuf.length, 'Magic header:', pngBuf.subarray(0, 8));

// Replace files in project
const dest1 = 'c:/Users/ND Fashion/.gemini/antigravity/scratch/prochina/assets/images/logo.png';
const dest2 = 'c:/Users/ND Fashion/.gemini/antigravity/scratch/prochina/images/logo.png';
const dest3 = 'c:/Users/ND Fashion/.gemini/antigravity/scratch/prochina/assets/images/pro_china_link_logo.png';

fs.writeFileSync(dest1, pngBuf);
fs.writeFileSync(dest2, pngBuf);
fs.writeFileSync(dest3, pngBuf);

const base64Png = 'data:image/png;base64,' + pngBuf.toString('base64');
console.log('Generated Base64 PNG length:', base64Png.length, 'Prefix:', base64Png.substring(0, 30));

// Embed in templates
const t1 = 'c:/Users/ND Fashion/.gemini/antigravity/scratch/prochina/acknowledgment_template.html';
const t2 = 'c:/Users/ND Fashion/.gemini/antigravity/scratch/prochina/email_template.html';

[t1, t2].forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/src="data:image\/[^"]+"/g, `src="${base64Png}"`);
  content = content.replace(/src="\{\{LOGO_URL\}\}"/g, `src="${base64Png}"`);
  content = content.replace(/src="assets\/images\/logo\.png"/g, `src="${base64Png}"`);
  fs.writeFileSync(file, content);
  console.log('Successfully updated template with true PNG:', file);
});
