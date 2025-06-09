import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// 读取发布用的 package.json
const packageJson = fs.readFileSync(
  path.resolve(__dirname, '../package.dist.json'),
  'utf-8'
);

// 写入到 dist 目录
fs.writeFileSync(
  path.resolve(__dirname, '../dist/package.json'),
  packageJson
);

console.log('✅ package.json has been copied to dist folder'); 