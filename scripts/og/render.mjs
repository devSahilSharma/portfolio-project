// Renders public/og.png from scripts/og/og.html with headless Chrome, using the name and job
// title in src/content/profile.json. Run after changing either: npm run og
// Set CHROME_PATH if Chrome isn't at the default Windows location.
import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, '../..');
const chrome = process.env.CHROME_PATH ?? 'C:/Program Files/Google/Chrome/Application/chrome.exe';

const profile = JSON.parse(readFileSync(join(root, 'src/content/profile.json'), 'utf8'));
const escape = (text) => text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

let html = readFileSync(join(here, 'og.html'), 'utf8');
for (const field of ['name', 'jobTitle']) {
  html = html.replace(
    new RegExp(`(data-field="${field}">)[^<]*(<)`),
    (_, open, close) => `${open}${escape(profile[field])}${close}`,
  );
}

// Written next to og.html so the relative font path still resolves.
const page = join(here, '.og.render.html');
writeFileSync(page, html);
try {
  execFileSync(chrome, [
    '--headless=new',
    '--disable-gpu',
    '--hide-scrollbars',
    '--allow-file-access-from-files',
    '--force-device-scale-factor=1',
    '--virtual-time-budget=3000',
    '--window-size=1200,630',
    `--screenshot=${join(root, 'public/og.png')}`,
    pathToFileURL(page).href,
  ]);
} finally {
  rmSync(page, { force: true });
}
// Record where the image came from inside the PNG itself, when the impeccable tool is installed.
const origin =
  'Rendered from scripts/og/og.html with headless Chrome (npm run og, scripts/og/render.mjs), filling the name and job title from src/content/profile.json; regenerate after content changes.';
const tool = join(root, '.claude/skills/impeccable/scripts', process.platform === 'win32' ? 'impeccable.cmd' : 'impeccable');
if (existsSync(tool)) {
  const originFile = join(here, '.og.origin.txt');
  writeFileSync(originFile, `${origin}
`);
  try {
    execFileSync(`"${tool}"`, ['embed-prompt', 'public/og.png', '--prompt-file', `"${originFile}"`], {
      cwd: root,
      shell: true,
      stdio: 'inherit',
    });
  } finally {
    rmSync(originFile, { force: true });
  }
}

console.log('Wrote public/og.png. Re-run this whenever the name or job title changes.');
