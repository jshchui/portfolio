# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build locally
- `npm run deploy` - Deploy to GitHub Pages

## Architecture Overview

This is a React portfolio website built with Vite, featuring:

### Core Structure
- **React 19** with modern hooks and patterns
- **Vite** for build tooling and dev server
- **React Router** for client-side routing 
- **SCSS/Sass** for styling with component-scoped styles
- **GSAP** for animations and transitions

### Key Components
- **App.jsx** - Main application component managing routing, project state, and page transitions
- **Project/projects.jsx** - Dynamic project renderer that switches between different project components
- **MouseTransition** - Custom page transition component using GSAP
- **TopBanner/Footer** - Site navigation and footer components

### Project System
Projects are defined in `projectData` array in App.jsx and rendered via individual project components:
- Each project has a corresponding component (e.g., `project_packager.jsx`)
- Project assets are organized in `src/assets/` with dedicated folders
- Project-specific styles are in `src/assets/assetcss/` 

### State Management
- Uses React hooks for state management
- `transitionState` manages page transitions with click coordinates
- `projectShowing` controls project overlay visibility
- `currentProject` determines which project component to render

### Routing
- Hash-based routing with `BrowserRouter`
- Projects accessible via `/${hostName}${projectKey}` pattern
- GitHub Pages deployment configured with base path `/portfolio/`

### Styling
- Global styles in `src/styles/main.scss`
- Component-specific SCSS files alongside components
- Custom fonts in `public/font/` directory
- Theme system with CSS custom properties

## Development Notes

- The app handles both local development and GitHub Pages deployment paths
- Project components are lazy-loaded via dynamic imports
- All project logos are React components in `src/assets/`
- Resume PDF is served from `src/assets/resume.pdf`