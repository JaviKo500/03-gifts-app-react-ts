# Gifs App (React + TypeScript + Vite)

A small GIF search application built with React, TypeScript and Vite. Use it to search GIPHY for GIFs, view results, and revisit previous searches.

## Features

- Search for GIFs using the GIPHY API
- Shows a list of GIFs with title and dimensions
- Keeps a list of previous search terms for quick reuse
- Built with TypeScript and Vite for fast development

## Tech stack

- React
- TypeScript
- Vite
- Axios (for HTTP requests)

## Quick Start

Prerequisites: Node.js (16+) and a GIPHY API key.

1. Install dependencies

```bash
npm install
```

2. Create a `.env` file in the project root (or set env vars) and add your GIPHY API key:

```
VITE_GIPHY_API_KEY=your_giphy_api_key_here
```

3. Run the dev server

```bash
npm run dev
```

Open http://localhost:5173 (Vite default) to view the app.

## Available Scripts
- `npm run dev` — Start the Vite development server
- `npm run build` — Build the production bundle. Note: this project runs the test runner before building (`npm run test:only && tsc -b && vite build`).
- `npm run preview` — Preview the production build locally
- `npm run lint` — Run ESLint

Additional test-related scripts:

- `npm run test` — Run Vitest in watch mode (developer-friendly)
- `npm run test:ui` — Run Vitest with the interactive UI
- `npm run test:only` — Run Vitest once (CI-style)
- `npm run coverage` — Run Vitest and collect coverage reports

## Environment

This project reads the GIPHY API key from `import.meta.env.VITE_GIPHY_API_KEY`. Set `VITE_GIPHY_API_KEY` before running the app (see Quick Start).

## Project Structure (important files)

- `src/GifsApp.tsx` — App root wiring together header, search bar and GIF list
- `src/gifs/hooks/useGifs.tsx` — Custom hook that handles searches and previous terms
- `src/gifs/api/giphy.api.ts` — Axios instance configured for the GIPHY API
- `src/gifs/components/GifList.tsx` — Renders the list of GIFs
- `src/shared/components/SearchBar.tsx` — Search input component
- `src/shared/components/PreviousSearches.tsx` — Renders previous search terms

## Notes

- The app expects the GIPHY API key in `VITE_GIPHY_API_KEY`.
- The API client sets `lang: 'es'` by default in `src/gifs/api/giphy.api.ts` — change if you want another language.

## Tests

- This project uses `vitest` for unit tests and `@testing-library/react` for component testing.
- To run all tests (watch): `npm run test`
- To run tests once (suitable for CI or pre-build): `npm run test:only` (this is executed by `npm run build`).
- To view coverage reports: `npm run coverage` (coverage results are generated under `coverage/`).

- Recent test additions include unit tests for the `PreviousSearches` component (see `src/gifs/components/PreviousSearches.test.tsx`).

## License

This repo does not include a license file. Add one if you plan to publish or share the project.
