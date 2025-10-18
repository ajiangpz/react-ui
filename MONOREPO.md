# Monorepo Best Practices

This document outlines the best practices and conventions used in the TendaUI monorepo.

## 📁 Directory Structure

```
├── packages/                    # All packages
│   ├── components/             # Core UI components
│   │   ├── src/               # Source code
│   │   ├── dist/              # Built files
│   │   ├── package.json       # Package configuration
│   │   └── tsconfig.json      # TypeScript configuration
│   ├── icons/                 # Icon components
│   ├── react/                 # Main React package
│   ├── utils/                 # Utility functions
│   └── tendaui-docs/          # Documentation
├── scripts/                   # Build and utility scripts
├── config/                    # Shared configuration files
├── .changeset/               # Changeset configuration
├── pnpm-workspace.yaml       # Workspace configuration
├── .npmrc                    # pnpm configuration
└── package.json              # Root package configuration
```

## 🏷️ Package Naming Convention

All packages follow the `@tendaui/` scope:

- `@tendaui/components` - Core UI components
- `@tendaui/icons` - Icon components
- `@tendaui/react` - Main React package
- `@tendaui/utils` - Utility functions

## 📦 Package.json Structure

Each package should have:

```json
{
  "name": "@tendaui/package-name",
  "version": "1.0.0",
  "description": "Package description",
  "main": "dist/index.js",
  "module": "dist/index.esm.js",
  "types": "dist/index.d.ts",
  "files": ["dist", "src"],
  "scripts": {
    "build": "rollup -c ../../config/rollup.config.es.mjs",
    "dev": "rollup -c ../../config/rollup.config.es.mjs -w",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "peerDependencies": {
    "react": ">=16.13.1",
    "react-dom": ">=16.13.1"
  }
}
```

## 🔗 Internal Dependencies

Use workspace protocol for internal dependencies:

```json
{
  "dependencies": {
    "@tendaui/utils": "workspace:*",
    "@tendaui/icons": "workspace:*"
  }
}
```

## 🚀 Development Workflow

1. **Start development**: `pnpm dev`
2. **Make changes** to components
3. **Test with Storybook**: `pnpm dev:storybook`
4. **Build packages**: `pnpm build`
5. **Create changeset**: `pnpm changeset`
6. **Version packages**: `pnpm version-packages`
7. **Publish**: `pnpm release`

## 📝 Changeset Workflow

1. Make your changes
2. Run `pnpm changeset` to create a changeset
3. Commit your changes and changeset
4. Run `pnpm version-packages` to update versions
5. Run `pnpm release` to publish packages

## 🔧 Build Configuration

- **Rollup** for bundling
- **TypeScript** for type checking
- **SCSS** for styling
- **Babel** for transpilation

## 📋 Scripts Reference

### Root Level Scripts
- `pnpm build` - Build all packages
- `pnpm dev` - Start development mode
- `pnpm clean` - Clean build artifacts
- `pnpm changeset` - Create changeset
- `pnpm release` - Build and publish

### Package Level Scripts
- `pnpm build:components` - Build components only
- `pnpm build:icons` - Build icons only
- `pnpm build:react` - Build react package only
- `pnpm build:utils` - Build utils only

## 🎯 Best Practices

1. **Keep packages focused** - Each package should have a single responsibility
2. **Use workspace protocol** - For internal dependencies
3. **Shared configuration** - Use shared configs in `/config` directory
4. **Consistent naming** - Follow `@tendaui/` scope convention
5. **Version management** - Use changesets for versioning
6. **Clean builds** - Always clean before building
7. **Type safety** - Use TypeScript for all packages
8. **Documentation** - Keep README files updated

