# TendaUI React Component Library

A modern, high-quality React component library built with TypeScript and styled with SCSS.

## 📦 Monorepo Structure

This project uses a monorepo architecture managed by pnpm workspaces:

```
packages/
├── components/          # Core UI components
├── icons/              # Icon components (@tendaui/icons)
├── react/              # Main React package (@tendaui/react)
├── utils/              # Utility functions (@tendaui/utils)
└── tendaui-docs/       # Documentation
```

## 🚀 Quick Start

### Prerequisites

- Node.js >= 18.0.0
- pnpm >= 8.0.0

### Installation

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm build

# Start development mode
pnpm dev
```

## 📋 Available Scripts

### Development
```bash
pnpm dev                 # Start all packages in watch mode
pnpm dev:storybook      # Start Storybook development server
```

### Building
```bash
pnpm build              # Build all packages
pnpm build:components  # Build components package only
pnpm build:icons       # Build icons package only
pnpm build:react       # Build react package only
pnpm build:utils       # Build utils package only
```

### Maintenance
```bash
pnpm clean              # Clean all build artifacts
pnpm lint               # Lint all packages
pnpm test               # Run tests for all packages
pnpm type-check         # Type check all packages
```

### Package Management
```bash
pnpm changeset          # Create a changeset
pnpm version-packages   # Version packages based on changesets
pnpm release            # Build and publish packages
pnpm update:deps        # Update dependencies across all packages
```

## 🏗️ Package Details

### @tendaui/components
Core UI components including:
- Button, Input, Select, Checkbox
- Dialog, Notification, Alert
- Form, Tag, Switch, Loading
- And many more...

### @tendaui/icons
Icon components built from SVG files with TypeScript support.

### @tendaui/utils
Shared utility functions used across components.

### @tendaui/react
Main package that exports all components and utilities.

## 🔧 Development Workflow

1. **Make changes** to components in `packages/components/`
2. **Run development mode** with `pnpm dev`
3. **Test changes** using Storybook with `pnpm dev:storybook`
4. **Build packages** with `pnpm build`
5. **Create changeset** with `pnpm changeset` for versioning

## 📝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Create a changeset
6. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details.

## 👥 Authors

- **ajiangz** - *Initial work*

## 🔗 Links

- [Storybook Documentation](http://localhost:6006) (when running `pnpm dev:storybook`)
- [NPM Package](https://www.npmjs.com/package/@tendaui/react)