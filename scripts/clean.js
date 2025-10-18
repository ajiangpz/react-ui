#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

function cleanPackage(packagePath) {
  const distDirs = ['dist', 'lib', 'es', 'build'];
  
  for (const dir of distDirs) {
    const fullPath = path.join(packagePath, dir);
    if (fs.existsSync(fullPath)) {
      console.log(`Cleaning ${fullPath}...`);
      execSync(`rimraf "${fullPath}"`, { stdio: 'inherit' });
    }
  }
}

function cleanAll() {
  console.log('🧹 Cleaning all packages...');
  
  const packagesDir = path.join(__dirname, '..', 'packages');
  const packages = fs.readdirSync(packagesDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => path.join(packagesDir, dirent.name));
  
  // Clean root
  cleanPackage(path.join(__dirname, '..'));
  
  // Clean each package
  packages.forEach(cleanPackage);
  
  console.log('✅ Cleanup completed!');
}

if (require.main === module) {
  cleanAll();
}

module.exports = { cleanAll, cleanPackage };

