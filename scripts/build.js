#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');

const packages = [
  '@tendaui/utils',
  '@tendaui/icons', 
  '@tendaui/components'
];

function buildPackage(packageName) {
  console.log(`Building ${packageName}...`);
  try {
    execSync(`pnpm --filter ${packageName} build`, { 
      stdio: 'inherit',
      cwd: process.cwd()
    });
    console.log(`✅ ${packageName} built successfully`);
  } catch (error) {
    console.error(`❌ Failed to build ${packageName}:`, error.message);
    process.exit(1);
  }
}

function buildAll() {
  console.log('🚀 Starting build process...');
  
  for (const pkg of packages) {
    buildPackage(pkg);
  }
  
  console.log('🎉 All packages built successfully!');
}

if (require.main === module) {
  buildAll();
}

module.exports = { buildAll, buildPackage };

