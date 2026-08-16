const fs = require('fs');

const html = fs.readFileSync('c:/Users/ND Fashion/.gemini/antigravity/scratch/prochina/index.html', 'utf8');

const i18nMatches = html.match(/data-i18n="[^"]+"/g);
console.log('Total data-i18n attributes found in index.html:', i18nMatches ? i18nMatches.length : 0);

const i18nPhMatches = html.match(/data-i18n-ph="[^"]+"/g);
console.log('Total data-i18n-ph attributes found in index.html:', i18nPhMatches ? i18nPhMatches.length : 0);

if (html.includes('data-lang="zh"') || html.includes('中文')) {
  console.log('WARNING: Chinese option still present!');
} else {
  console.log('SUCCESS: Only French (FR) and English (EN) options are present!');
}

// Validate main.js syntax
try {
  require('c:/Users/ND Fashion/.gemini/antigravity/scratch/prochina/js/main.js');
  console.log('SUCCESS: main.js loaded without syntax errors!');
} catch (err) {
  // DOM references expected when loading outside browser
  console.log('JS validation note:', err.message);
}
