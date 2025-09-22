# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Development Commands

### Core Development Workflow
```bash
# Install dependencies
npm install

# Start development server (runs on port 8080)
npm run dev

# Build for production
npm run build

# Build for development mode
npm run build:dev

# Preview production build locally  
npm run preview

# Run linting
npm run lint
```

### Package Manager
This project uses npm with a lock file. Always use `npm install` rather than other package managers to maintain consistency.

## Architecture Overview

### Project Type
This is a **React + TypeScript SPA** built with Vite, specifically a landing page for "Alfi" - an AI-powered bill payment automation service. It's designed as a waitlist capture page with email integration.

### Tech Stack
- **Build Tool**: Vite with React SWC plugin
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: shadcn/ui component library (Radix UI primitives)
- **Routing**: React Router DOM v6
- **State Management**: React Query (TanStack Query) for server state
- **Forms**: React Hook Form with Zod validation
- **Development**: ESLint with TypeScript rules

### Key Architecture Patterns

#### Component Structure
- **UI Components**: Located in `src/components/ui/` - these are shadcn/ui components with custom styling
- **Page Components**: Located in `src/pages/` - currently has Index (landing page) and NotFound
- **Custom Hooks**: Located in `src/hooks/` - includes toast notifications and mobile detection
- **Utilities**: Located in `src/lib/` - contains the `cn()` utility for conditional class names

#### Styling System
- Uses a comprehensive custom design system built on Tailwind CSS
- CSS custom properties for theming in `src/index.css`
- Custom gradient utilities and animations defined in `tailwind.config.ts`
- Dark mode support via class-based toggle

#### State Management Approach
- Local component state with React useState
- Server state managed by React Query
- Toast notifications via custom useToast hook (not using external toast library)
- No global state management (Redux/Zustand) - appropriate for a landing page

### Directory Structure Significance
```
src/
├── components/ui/     # shadcn/ui component library components
├── hooks/            # Custom React hooks
├── lib/              # Utility functions (mainly cn() for styling)
├── pages/            # Route-level page components
└── assets/           # Static assets (images, icons)
```

### Component Import Patterns
- Uses path aliases: `@/` maps to `src/`
- Consistent import organization: external libraries, then internal components/hooks
- Lucide React for all icons

### API Integration
- Single external API integration: Make.com webhook for waitlist signup
- Uses fetch with no-cors mode for cross-origin requests
- Error handling with user feedback via toast notifications

### Development Configuration
- **Vite Config**: Custom port 8080, path aliases, development-only component tagging
- **TypeScript**: Strict configuration with separate configs for app and build tools
- **ESLint**: Uses new flat config format with TypeScript and React rules
- **Tailwind**: Extensive custom theme with design tokens

### Special Considerations
- This is a **Lovable.dev project** - changes can be made via their platform
- The project includes `lovable-tagger` for development component identification
- Uses both Bun lockfile and npm lockfile (prefer npm for consistency)
- Email integration is hardcoded to Make.com webhook URL

## Project-Specific Context

### Business Domain
Alfi is an "AI Bill Butler" service that automates irregular bill payments. The landing page focuses on:
- Problem: Manual bill processing, late fees, clunky payment portals
- Solution: AI-powered email bill processing and automatic payments
- Target: Users frustrated with irregular bills that can't use autopay

### Key Features to Understand
- Waitlist capture form with email validation
- Make.com webhook integration for lead capture
- Responsive design with mobile-first approach
- Custom gradient backgrounds and animations
- Email contact integration (hello@alfi.ai)

### Testing Strategy
- No formal test suite currently implemented
- Manual testing via dev server and preview builds
- ESLint for code quality checks

### Deployment
- Designed for Lovable.dev's deployment system
- Can also be deployed as standard Vite SPA to any static hosting