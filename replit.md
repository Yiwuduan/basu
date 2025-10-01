# Amanda Basu Roy Event Landing Page

## Overview

This is a modern, responsive landing page for Amanda Basu Roy's educational workshops and events, specifically featuring the "Style Beyond the Material" embodied craft studio for girls aged 10-15. The application showcases an alternative approach to education that emphasizes mentorship, creative expression, and joyful learning beyond traditional school systems.

The site serves as both a brand presentation platform and a workshop signup system, designed to attract parents seeking alternative educational experiences for their children. It features a bold, modern design aesthetic with a pure black background, white text, and vivid orange accents.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with a custom design system featuring pure black background (#000000), white text (#FFFFFF), and vivid orange accent (#FF4D00)
- **UI Components**: Radix UI primitives with shadcn/ui component library for accessibility and consistency
- **Typography**: Google Fonts integration (Inter for body text, Playfair Display for headers)
- **State Management**: TanStack Query for server state management
- **Build System**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript for full-stack type safety
- **API Design**: RESTful API with `/api/signup` endpoint for workshop registrations
- **Error Handling**: Centralized error middleware with proper HTTP status codes
- **Validation**: Zod schemas for runtime type validation and API request validation

### Data Storage Solutions
- **Database**: PostgreSQL configured through Drizzle ORM
- **Schema Management**: Drizzle Kit for database migrations and schema management
- **Current Storage**: In-memory storage implementation for development (MemStorage class)
- **Data Models**: Users table for potential authentication, Signups table for workshop registrations
- **Connection**: Neon Database serverless PostgreSQL for production deployment

### Design System
- **Component Strategy**: Modular section-based components (HeroSection, AboutSection, GallerySection, WorkshopSection, SignupSection, Footer)
- **Layout System**: Mixed-column design with specific layouts per section (Hero: 60/40 split, About: 3 tiles, Workshop: 2-column grid)
- **Color Palette**: Pure black (#000000) background, white (#FFFFFF) text, vivid orange (#FF4D00) accents with HSL color system
- **Image Treatment**: Grayscale images with orange overlay accents for visual consistency
- **Typography**: Bold geometric sans-serif styling with large font sizes for impact
- **Responsive Design**: Mobile-first approach with Tailwind's responsive utilities
- **Accessibility**: Radix UI primitives ensure keyboard navigation and screen reader support

### Form Handling & User Experience
- **Workshop Signup**: Comprehensive form with parent/child information and optional newsletter subscription
- **Validation**: Client-side and server-side validation with user-friendly error messages
- **Feedback**: Toast notifications for success/error states
- **Privacy**: Built-in privacy agreement checkbox for parent comfort

### Asset Management
- **Images**: Local asset storage in `attached_assets` directory
- **Fonts**: Google Fonts CDN integration
- **Icons**: Lucide React icon library for consistent iconography

### Development Tools
- **Hot Reload**: Vite development server with HMR
- **Type Checking**: TypeScript strict mode enabled
- **Linting**: Configured for consistent code quality
- **Path Aliases**: Configured for clean imports (@/, @shared/, @assets/)

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Query for state management
- **Routing**: Wouter for lightweight client-side routing
- **Build Tools**: Vite with TypeScript support and React plugin integration

### UI & Design Libraries
- **Component Library**: Radix UI primitives for accessible components
- **Styling**: Tailwind CSS with PostCSS and Autoprefixer
- **Icons**: Lucide React for consistent iconography
- **Fonts**: Google Fonts (Inter and Playfair Display)
- **Animations**: Tailwind's built-in animation utilities

### Database & Backend
- **Database**: Neon Database (serverless PostgreSQL)
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Validation**: Zod for schema validation and type inference
- **Session Management**: connect-pg-simple for PostgreSQL session storage

### Development & Build Tools
- **TypeScript**: Full-stack type safety with strict mode
- **ESBuild**: Fast bundling for production builds
- **TSX**: TypeScript execution for development server
- **Development Plugins**: Replit-specific plugins for enhanced development experience

### Form & User Interaction
- **Form Handling**: React Hook Form with Hookform Resolvers
- **UI Interactions**: Class Variance Authority for component variants
- **Utilities**: clsx and tailwind-merge for conditional styling
- **Date Handling**: date-fns for date manipulation and formatting

### Email & Communication
- **Future Integration**: Architecture prepared for email service integration for workshop confirmations and newsletters
- **Contact Forms**: Built-in contact and signup form handling

### Hosting & Deployment
- **Platform**: Designed for Replit deployment with specific development tools
- **Environment**: Node.js runtime with ES modules support
- **Static Assets**: Vite-optimized asset bundling and serving