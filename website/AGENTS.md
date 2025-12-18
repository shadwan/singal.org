# Agent Guidelines for singal.org Website

## Build Commands
- `npm run dev` - Start development server (http://localhost:3000)
- `npm run build` - Production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- **No test suite configured yet**

## Code Style
- **TypeScript**: Strict mode enabled, no `any` types. Use proper type definitions.
- **Imports**: Use `@/*` alias for all imports (e.g., `@/components/ui/button`, `@/lib/utils`)
- **Components**: Functional components with TypeScript. Server components by default, add `'use client'` when needed.
- **Styling**: Tailwind CSS v4 with shadcn/ui. Use `cn()` utility from `@/lib/utils` for conditional classes.
- **Naming**: PascalCase for components/types, camelCase for functions/variables, kebab-case for files.
- **shadcn/ui**: Install components via `npx shadcn@latest add <component>`. Style: New York, Base color: neutral.
- **Icons**: Use Lucide icon library.

## Architecture
- App Router structure: `/app` for routes, `/components` for reusables, `/lib` for utilities
- Server Components by default - only use `'use client'` when hooks/browser APIs needed
- Use lucide-react for icons
- Component path aliases: `@/components`, `@/lib`, `@/hooks`, `@/components/ui`
