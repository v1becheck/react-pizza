# React + Vite

This project is a pizza ordering system built with React, Vite, Tailwind CSS, React Router, React Hook Form, Redux Toolkit, and Redux Thunks.

Prod: https://react-pizza-one-sage.vercel.app/

Tech Stack:

- React
- Vite
- Tailwind CSS
- React Router (Remote State Management - Render as you fetch)
- React Hook Form (Form Handling)
- React Router Hooks:
  - useNavigate
  - useParams
  - useLocation
  - useMatch
  - useOutlet
  - useResolvedPath
  - useSearchParams
  - useTransition
  - useDeferredValue
  - useId
  - useFetcher
- Redux Toolkit (UI State Management)
- Redux Thunks (Async Actions)
- Geocoding API (for getting the user's address)
  - https://www.bigdatacloud.com/geocoding-apis/free-reverse-geocode-to-city-api

### Tailwind CSS

- Install Tailwind CSS
- Create a `src/index.css` file
- Add the following to the `src/index.css` file:

```css
@import "tailwindcss";
```

- Add the following to the `package.json` file:

```json
"devDependencies": {
    "@tailwindcss/vite": "^4.1.17",
    "tailwindcss": "^4.1.17",
    "prettier-plugin-tailwindcss": "^0.7.1",
    "prettier": "^3.6.2",
  },
```

- Check documentation for more details:
  - https://tailwindcss.com/docs/installation/using-vite
  - https://github.com/tailwindlabs/prettier-plugin-tailwindcss

- Use VC Code extension Tailwind CSS IntelliSense for autocomplete, syntax highlighting, and linting
