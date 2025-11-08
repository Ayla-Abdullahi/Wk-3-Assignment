# React.js and Tailwind CSS Assignment

This assignment focuses on building a responsive React application using JSX and Tailwind CSS, implementing component architecture, state management, hooks, and API integration.

## Assignment Overview

You will:
1. Set up a React project with Vite and Tailwind CSS
2. Create reusable UI components
3. Implement state management using React hooks
4. Integrate with external APIs
5. Style your application using Tailwind CSS

## Getting Started

1. Accept the GitHub Classroom assignment invitation
2. Clone your personal repository that was created by GitHub Classroom
3. Install dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm run dev
   ```

## Files Included

- `Week3-Assignment.md`: Detailed assignment instructions
- Starter files for your React application:
````markdown
# PLP Task Manager — Week 3: React, JSX & Tailwind CSS

This repository contains the Week 3 assignment implementation: a responsive React application built with Vite and styled using Tailwind CSS. The app demonstrates component architecture, state management using hooks, theme management with context, and API integration (JSONPlaceholder).

---

## Demo

- Live deploy URL: (https://aylataskmanager.vercel.app/)

Screenshots (placed images in `/screenshots`):
---

## Features implemented

- Project scaffolded with Vite and Tailwind CSS.
- Reusable UI components: `Button`, `Card`, `Navbar`, `Footer`.
- Layout with `Navbar` and `Footer` wrapping pages.
- `TaskManager` component with:
   - Add new tasks
   - Mark tasks as completed
   - Delete tasks
   - Filter tasks (All, Active, Completed)
   - Local persistence using a `useLocalStorage` hook
- Theme switcher (light/dark) powered by React Context and Tailwind dark mode.
- API integration:
   - Fetch posts from JSONPlaceholder with loading and error states
   - Search posts (client-side)
   - Simple pagination (Prev/Next)
- Responsive design using Tailwind utilities and a small transition helper.

---

## Tech stack

- React 18
- Vite (dev server + build)
- Tailwind CSS
- React Router (v6)
- Browser localStorage for simple persistence

---

## Project structure

```
Wk-3-Assignment/
├─ index.html
├─ package.json
├─ vite.config.js
├─ tailwind.config.cjs
├─ postcss.config.cjs
├─ src/
│  ├─ main.jsx                # App bootstrap
│  ├─ index.css               # Tailwind entry
│  ├─ App.jsx                 # Root App + routes
│  ├─ api/
│  │  └─ jsonPlaceholder.js   # small API wrapper
│  ├─ components/
│  │  ├─ Button.jsx
│  │  ├─ Card.jsx
│  │  ├─ Navbar.jsx
│  │  ├─ Footer.jsx
│  │  └─ TaskManager.jsx
│  ├─ context/
│  │  └─ ThemeContext.jsx    # theme (light/dark) provider
│  ├─ hooks/
│  │  └─ useLocalStorage.js
│  └─ pages/
│     └─ Home.jsx             # Home page: TaskManager + API list
└─ README.md
```

---

## Installation (local)

Prerequisites: Node.js (v18+ recommended) and npm.

1. Install dependencies

```bash
npm install
```

2. Start development server

```bash
npm run dev
```

3. Open the displayed URL (usually http://localhost:5173)

4. Build for production

```bash
npm run build
```

5. Preview production build locally

```bash
npm run preview
```

---
