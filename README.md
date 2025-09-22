# E-Comm UI (React + Vite + Tailwind)

This is a small test UI project for internship. It showcases a simple e‑commerce product listing page with filters, sorting, pagination, and responsive design built with React and Tailwind.

Short notes for running and understanding this project.

## Setup
- Install: `npm install`
- Start dev server: `npm run dev` (open http://localhost:5173)
- Build: `npm run build`
- Preview build: `npm run preview`

## What’s inside
- Pages: Home (product grid + filters), Product Details
- Components: Navbar, Sidebar, Banner, ProductCard, Pagination, Footer
- Styles: Tailwind (see `src/styles/index.css`)
- Data: mock products at `src/data/products.js`

## How to use
- Filters (left):
  - Color swatches, Category list (with view more), Price range
- Sorting + page size (top of grid):
  - Sort by Name/Price/Popularity
  - Show 12/24/36 items per page
- Pagination at the bottom switches pages without reload
- Sidebar turns into a drawer on small screens (use the menu button)

## Edit tips
- Change banner text/image in `src/components/Banner.jsx`
- Tweak colors/spacings in `tailwind.config.js`
- Adjust global styles in `src/styles/index.css`

## Folder layout
```
src/
  components/   // UI parts (Navbar, Sidebar, Banner, etc.)
  data/         // products.js
  pages/        // Home.jsx, ProductDetails.jsx
  styles/       // index.css (Tailwind)
  App.jsx
  main.jsx
```
