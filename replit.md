# Overview

CNSOLANA ($CNC) is a Solana-based memecoin website built as a single-page React application. The project promotes creativity and collaboration within the Solana ecosystem through community-driven initiatives, micro-grants, and on-chain rewards. The website serves as the primary hub for the $CNC token community, featuring comprehensive information about tokenomics, roadmap, community plans, and social engagement tools.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

The application uses a modern React-based single-page architecture with the following key components:

- **React 18** with TypeScript for type safety and modern development practices
- **Vite** as the build tool and development server for fast hot module replacement
- **Wouter** for lightweight client-side routing instead of React Router
- **TanStack Query** for server state management and data fetching
- **Tailwind CSS** with shadcn/ui components for consistent, responsive design
- **Custom CSS variables** for theming with a Solana neon color scheme

The frontend is structured as a single-page application with smooth scrolling navigation between sections (Hero, About, Tokenomics, Roadmap, Community, Schedule, Submit Ideas, How to Buy, Socials).

## Backend Architecture

The backend follows a traditional Express.js REST API pattern:

- **Express.js** server with TypeScript for API endpoints
- **RESTful API design** with dedicated routes for form submissions
- **Zod validation** for request data validation and type safety
- **Memory storage implementation** as the primary data layer (with interface for future database integration)
- **Development/production environment handling** with Vite integration in development

## Data Storage Solutions

The application uses a flexible storage architecture:

- **Storage Interface Pattern** (`IStorage`) allowing for easy swapping between storage implementations
- **Current Implementation**: In-memory storage (`MemStorage`) for development and testing
- **Database Ready**: Drizzle ORM configuration with PostgreSQL schema prepared for production deployment
- **Schema Management**: Shared TypeScript schemas between client and server using Drizzle and Zod

Database schema includes:
- Users table for future authentication features
- Community submissions for community idea collection
- Idea submissions for the "Submit Your $CNC Idea" feature

## Authentication and Authorization

Currently, the application operates without authentication, focusing on public content and anonymous form submissions. The database schema includes a users table prepared for future authentication implementation.

## Design System

The application uses a comprehensive design system built on:

- **shadcn/ui components** providing accessible, customizable UI primitives
- **Radix UI primitives** as the foundation for complex components
- **Custom CSS animations** for engaging user interactions (spinning logos, hover effects)
- **Responsive design** with mobile-first approach
- **Dark theme** with vibrant neon accents matching Solana branding

# External Dependencies

## Third-Party Services

- **Neon Database**: PostgreSQL database service (configured via `@neondatabase/serverless`)
- **Pump.fun**: Token launching platform where $CNC was deployed
- **DexScreener**: Price tracking integration for token analytics
- **Twitter/X**: Social media integration for community engagement

## Key Libraries and Frameworks

- **UI Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Validation**: Zod for runtime type validation
- **State Management**: TanStack Query for server state
- **Build Tool**: Vite with React plugin
- **Development Tools**: ESBuild for server bundling, Replit-specific plugins for development environment

## Token Integration

- **Solana Blockchain**: Native integration with Solana ecosystem
- **Token Contract**: BBk1eEdB6vz53g25H8eguRcpBbHN1w8VeFrRMKKepump (mint address)
- **Trading Platforms**: Integration links to Pump.fun and DexScreener for token trading and analytics

## Social Media Integration

- **Twitter API**: Prepared for timeline embedding and community features
- **Community Platforms**: Integration with Twitter Spaces and community features