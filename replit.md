# Overview

This is a Vietnamese quadratic equation solver web application built with React and Express. The application allows users to input coefficients (a, b, c) for quadratic equations in the form ax² + bx + c = 0 and provides comprehensive solutions including real and complex roots, discriminant analysis, and step-by-step solving procedures. The interface is designed with Vietnamese language support and includes educational content about quadratic equations.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: React Hook Form for form state with Zod validation schemas
- **Data Fetching**: TanStack Query for server state management and caching
- **Styling**: Tailwind CSS with CSS variables for theming and responsive design
- **UI Components**: Radix UI primitives with custom styling (shadcn/ui pattern)

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Architecture Pattern**: RESTful API with modular route registration
- **Build System**: Vite for frontend bundling and esbuild for backend compilation
- **Development**: Hot module replacement and error overlay for development experience

## Data Storage Solutions
- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured via Neon Database serverless)
- **Migrations**: Drizzle Kit for schema migrations and database management
- **In-Memory Fallback**: Memory-based storage implementation for development/testing
- **Schema**: User management with username/password authentication structure

## Mathematical Engine
- **Quadratic Solver**: Custom TypeScript implementation handling real and complex solutions
- **Discriminant Analysis**: Comprehensive analysis of equation types (two real, one real, complex)
- **Step-by-Step Solutions**: Educational breakdown of solving process
- **Input Validation**: Zod schemas ensuring mathematical constraints (a ≠ 0)

## Build and Development
- **Frontend Build**: Vite with React plugin and TypeScript support
- **Backend Build**: esbuild for Node.js ESM bundling
- **Development Mode**: Concurrent frontend and backend development with HMR
- **Type Safety**: Shared TypeScript types between frontend and backend
- **Path Aliases**: Configured for clean imports (@/, @shared/, @assets/)

# External Dependencies

## Database and ORM
- **Neon Database**: Serverless PostgreSQL hosting (@neondatabase/serverless)
- **Drizzle ORM**: Type-safe database operations (drizzle-orm, drizzle-kit)
- **Database Validation**: Drizzle-Zod integration for schema validation

## UI and Styling
- **Radix UI**: Accessible component primitives (@radix-ui/react-*)
- **Tailwind CSS**: Utility-first CSS framework with PostCSS processing
- **Lucide React**: Icon library for consistent iconography
- **Class Variance Authority**: Type-safe component variant management

## Form and Validation
- **React Hook Form**: Performant form library with minimal re-renders
- **Zod**: Runtime type validation and schema definition
- **Hookform Resolvers**: Integration between React Hook Form and Zod

## Development Tools
- **Replit Integration**: Development environment plugins and error overlays
- **TypeScript**: Static type checking and enhanced developer experience
- **ESLint/Prettier**: Code quality and formatting (implied by project structure)

## Session Management
- **Connect PG Simple**: PostgreSQL session store for Express sessions
- **Express Session**: Server-side session management middleware

## Build Tools
- **Vite**: Fast build tool with HMR and plugin ecosystem
- **esbuild**: Fast JavaScript bundler for production builds
- **PostCSS**: CSS processing with Autoprefixer for browser compatibility