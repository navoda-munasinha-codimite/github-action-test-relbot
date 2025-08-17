---
applyTo: '**'
---

## Visual Design System
This project follows a clean, minimal, and modern design philosophy with a light theme and strategic use of Oxford blue accents.

## Color Palette
- **Primary**: Oxford Blue (`#14213d`) - for headings, primary buttons, and key UI elements
- **Secondary**: Light Blue (`#3b82f6`) - for secondary actions, links, and hover states  
- **Accent**: Powder Blue (`#93c5fd`) - for subtle highlights and backgrounds
- **Neutral**: Light grays (`#f8fafc`, `#e2e8f0`, `#64748b`) - for backgrounds and text
- **Background**: Pure white (`#ffffff`) and off-white (`#fafbfc`)

- use these colors in inline classes with -[] brackets

## Typography & Layout
- Use clean, readable fonts (system fonts or similar)
- Generous whitespace and proper spacing using Tailwind's spacing scale
- Clear hierarchy with consistent text sizes (text-sm, text-base, text-lg, text-xl, text-2xl)
- Responsive design with mobile-first approach

## Component Styling Guidelines
- **Buttons**: Use bordered buttons without fill for secondary actions, filled buttons for primary actions
  - Primary: `bg-oxford-blue text-white border-oxford-blue`
  - Secondary: `border-oxford-blue text-oxford-blue bg-transparent hover:bg-oxford-blue hover:text-white`
- **Cards**: Subtle shadows and rounded corners (`rounded-lg shadow-sm`)
- **Inputs**: Clean borders with focus states using the blue accent colors
- **Navigation**: Minimal with clear visual hierarchy

## Icon Strategy
- Use emojis as icons throughout the interface (no image files)
- Examples: 📝 for notes, 🚀 for releases, 📋 for lists, ⚙️ for settings, 📤 for sharing
- Maintain consistency in emoji usage across similar functionality

## Responsive Design
- Mobile-first approach using Tailwind's responsive prefixes (sm:, md:, lg:, xl:)
- Ensure all components work seamlessly across device sizes
- Use Tailwind's grid and flexbox utilities for layout

## UX Principles
- Minimal and clean interface with purposeful whitespace
- Clear visual feedback for interactive elements
- Consistent spacing and alignment using Tailwind's spacing system
- Subtle animations and transitions for enhanced user experience