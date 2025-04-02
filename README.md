# Nuxt 3 SPA Template

Template for creating Single Page Applications with Nuxt 3.

## Features

- Configured as SPA (Single Page Application)
- TypeScript
- Tailwind CSS
- ESLint + Prettier
- Organized directory structure
- Default layout
- SPA navigation
- Auto-formatting on save
- TypeScript support
- Tailwind CSS integration

## Prerequisites

- Node.js 16.x or later
- npm 7.x or later

## Usage

To create a new project using this template:

```bash
npx nuxi init my-project --template github:angel-jadan/nuxt3-template#master
```

## Project Structure

```
src/
├── app.vue              # Root component
├── components/          # Reusable components
├── pages/              # Application pages
├── layouts/            # Application layouts
├── assets/            # Static resources
├── composables/       # Vue composables
└── utils/            # Utilities
```

## Configuration Files

```
├── nuxt.config.ts      # Nuxt configuration
├── tsconfig.json       # TypeScript configuration
├── .eslintrc          # ESLint configuration
├── .prettierrc        # Prettier configuration
├── .prettierignore    # Prettier ignore rules
├── tailwind.config.ts # Tailwind CSS configuration
├── .vscode/           # VS Code settings
│   └── settings.json  # Editor configuration
└── package.json       # Project dependencies and scripts
```

## VS Code Settings

The template includes `.vscode/settings.json` with the following configurations:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },
  "[vue]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

## Installation

```bash
cd my-project
npm install
```

## Development

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Preview

```bash
npm run preview
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Check for linting errors
- `npm run lint:fix` - Fix linting errors
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## VS Code Integration

This template includes VS Code settings for:

- Auto-formatting on save
- ESLint integration
- Prettier integration
- TypeScript support

## License

MIT
