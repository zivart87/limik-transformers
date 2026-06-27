/**
 * LIMIK Nav Sync
 * Вставляет nav.html во все страницы сайта (заменяет маркер <!-- NAV -->)
 * Запуск: node build.js
 */
const fs   = require('fs');
const path = require('path');

const NAV_MARKER  = '<!-- NAV -->';
const SKIP_DIRS   = new Set(['.git', 'node_modules', 'assets', '.claude', '.vercel']);

const navHtml = fs.readFileSync(path.join(__dirname, 'nav.html'), 'utf8').trim();
let updated = 0;
let skipped = 0;

function processDir(dir) {
  for (const entry of fs.readdirSync(dir)) {
    if (SKIP_DIRS.has(entry)) continue;
    const full = path.join(dir, entry);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      processDir(full);
    } else if (entry === 'index.html') {
      const content = fs.readFileSync(full, 'utf8');
      if (!content.includes(NAV_MARKER)) { skipped++; continue; }
      const result = content.replace(NAV_MARKER, navHtml);
      fs.writeFileSync(full, result, 'utf8');
      console.log('✓ ' + path.relative(__dirname, full));
      updated++;
    }
  }
}

processDir(__dirname);
console.log('\nГотово: обновлено ' + updated + ' страниц, пропущено ' + skipped + ' (без маркера).');
