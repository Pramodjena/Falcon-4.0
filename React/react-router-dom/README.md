## Using Tailwind CSS :

- `npm install -D tailwindcss postcss autoprefixer`
- `npx tailwindcss init -p`

- File name: `tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

- File name: `index.css` :

```js
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## React Router Dom :

- A library for managing navigation and routing in React application.
- Allows single page application with navigation without refreshing this page.

## Key Components :

- BrowserRouter: (Provides the context for the entire app)
- Routes: A container for a list of routes.
- Route: A single route definition.
- Link: A component for creating links between routes.
- NavLink: A special type of Link that knows whether it's "active" or not.

## Project Structure :

react-router-dom :
-- src/
-- components/
    -- Home.jsx
    -- About.jsx
    -- Contact.jsx
-- app.jsx
-- index.js
-- index.html
-- package.json
-- .gitignore
-- .env
-- tailwind.congig.js
-- postcss.config.js
-- public
-- README.md
