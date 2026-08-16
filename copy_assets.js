const fs = require('fs');
const path = require('path');

const srcDir = `C:\\Users\\ND Fashion\\.gemini\\antigravity-ide\\brain\\48f3fedf-41b4-46ce-9f22-0260460c7c43`;
const destDir = path.join(__dirname, 'assets', 'images');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const files = fs.readdirSync(srcDir);
files.forEach(file => {
  if (file.includes('hero_container_port')) {
    fs.copyFileSync(path.join(srcDir, file), path.join(destDir, 'hero.png'));
    console.log('Copied hero image!');
  }
  if (file.includes('pro_china_link_logo')) {
    fs.copyFileSync(path.join(srcDir, file), path.join(destDir, 'logo.png'));
    console.log('Copied logo image!');
  }
});
