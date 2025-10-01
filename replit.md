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
- **Layout System**: Mixed-column design with specific layouts per section (Hero: 60/40 split, About: 3 tiles, Workshop: detailed event layout with hero image and schedule grid)
- **Color Palette**: Pure black (#000000) background, white (#FFFFFF) text, vivid orange (#FF4D00) accents with HSL color system
- **Image Treatment**: Grayscale images with orange overlay accents for visual consistency
- **Typography**: Poppins font family with bold geometric styling - H1: 88px, H2: 56px, H3: 32px, Body: 20px with 1.65 line-height
- **Spacing Standards**: Gallery/About sections at py-24, Workshop at py-10, element gaps, grid gutters, 16px image corner radius
- **Interactions**: 
  - Button transitions (0.25s ease), orange focus states
  - Hero section: Mouse-controlled parallax with 6 absolutely-positioned grayscale images in a fixed, non-scrollable viewport that move opposite to vertical mouse movement with heavy momentum-based animation (lerp factor 0.04, 800px movement range, speeds 3.6-13.5× for dramatic parallax depth effect)
  - Gallery carousel: Grayscale images transition to full color on hover
- **Responsive Design**: Mobile-first approach with Tailwind's responsive utilities
- **Accessibility**: Radix UI primitives ensure keyboard navigation and screen reader support

### Form Handling & User Experience
- **Workshop Signup**: Multi-step vision alignment form with pictured multiple-choice questions to filter clients aligned with Amanda's educational philosophy
  - Step 1: Learning approach selection (4 pictured options: craft-based, mentorship, community, creative expression)
  - Step 2: Participation reason selection (4 pictured options: alternative education, connection, skills, joy)
  - Step 3: Child information collection (name and age)
  - Step 4: Parent information and vision message (name, email, detailed vision description)
- **Progressive Disclosure**: Step-by-step form with progress indicators and navigation (back/next buttons)
- **Visual Filtering**: Pictured multiple-choice questions help parents self-select based on alignment with vision
- **Validation**: Multi-level validation with toast notifications for missing fields and errors
- **Vision Alignment**: Required vision message textarea encourages thoughtful responses about learning philosophy
- **Feedback**: Toast notifications for success/error states with automatic form reset after successful submission

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