---
applyTo: '**'
---

## Project Context
This is a Vite + JavaScript + React + TailwindCSS project for a GitHub Action called "release-note-bot". The action generates development release notes from Google Doc templates, uploads them to Google Drive, and shares with PR commenters.

## Architecture Guidelines
- Use separation of concerns with modular components
- Keep file structure clean and organized
- Focus on core functionality only - no test files, README, or documentation files
- Use functional components with React hooks

## Code Style
- Use array methods (map, filter, reduce, forEach) over traditional loops
- Implement proper interfaces/PropTypes for type safety
- Use async/await for asynchronous operations
- Follow modern ES6+ syntax
- Use destructuring for props and objects

## Component Structure
- Create reusable UI components in `/src/components/`
- Separate business logic into custom hooks in `/src/hooks/`
- Use utility functions in `/src/utils/`
- Keep API calls in dedicated service files in `/src/services/`

## GitHub Action Integration
- Handle PR comment triggers (`/note` command)
- Process release branch PRs
- Integrate with Google Docs API for template processing
- Implement Google Drive upload functionality
- Manage email sharing with commenters

## TailwindCSS Usage
- Use utility-first approach
- Prefer Tailwind classes over custom CSS
- Keep responsive design in mind
- Use Tailwind's color palette and spacing system

Generate clean, production-ready code focused on the core release note automation functionality.