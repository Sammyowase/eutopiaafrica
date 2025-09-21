---
description: Repository Information Overview
alwaysApply: true
---

# Midnight in PJs Information

## Summary
A Next.js web application for "Midnight in PJs" - a Christmas event for Nigerian university students featuring pajamas, BBQ, movies, and more. The project uses React with TypeScript and is styled with Tailwind CSS.

## Structure
- **app/**: Next.js app directory containing page components and routing
- **components/**: React components including UI elements and page sections
- **hooks/**: Custom React hooks
- **lib/**: Utility functions and shared code
- **public/**: Static assets including images
- **styles/**: Global CSS styles

## Language & Runtime
**Language**: TypeScript/JavaScript
**Version**: TypeScript 5.x
**Framework**: Next.js 14.2.16
**Build System**: Next.js build system
**Package Manager**: pnpm

## Dependencies
**Main Dependencies**:
- React 18.x and React DOM 18.x
- Next.js 14.2.16
- Radix UI components (various UI primitives)
- Tailwind CSS 4.1.9
- next-themes for theme management
- lucide-react for icons
- react-hook-form for form handling
- zod for schema validation
- recharts for data visualization
- Geist font

**Development Dependencies**:
- TypeScript 5.x
- Various type definitions (@types/node, @types/react)
- Tailwind CSS tooling
- PostCSS 8.5.x

## Build & Installation
```bash
# Install dependencies
pnpm install

# Development server
pnpm dev

# Production build
pnpm build

# Start production server
pnpm start

# Lint code
pnpm lint
```

## Application Structure
**Entry Point**: app/layout.tsx (Root layout)
**Main Pages**:
- app/page.tsx (Home page)
- app/schools/page.tsx (Schools page)
- app/sponsors/page.tsx (Sponsors page)

**Component Organization**:
- UI components in components/ui/
- Page sections in components/ (hero-section, highlights-section, etc.)
- Theme provider in components/theme-provider.tsx

## Configuration
**Next.js Config**: next.config.mjs
- ESLint and TypeScript errors ignored during builds
- Images unoptimized

**TypeScript Config**: tsconfig.json
- Target: ES6
- Module: ESNext
- Path aliases configured (@/* for root imports)

**UI Components**: components.json
- Uses shadcn/ui component system
- Style: "new-york"
- Icon library: lucide
- Path aliases defined for components, utils, etc.