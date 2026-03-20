# Protfolio React

A simple personal portfolio website built with React 19 + Vite 6.

## 📦 Project structure

- `src/`
  - `App.jsx` : main app layout
  - `main.jsx` : client render entrypoint
  - `index.css` : global styles
  - `Components/` : reusable UI sections (`Navbar`, `Hero`, `About`, `Contact`, `Footer`)
  - `MyWork/` : project/work section
  - `Services/` : service cards from data
  - `assets/` : static data and images used in components

- `public/` : static assets for deployment
- `vite.config.js` : Vite build config
- `package.json` : scripts & dependencies

## 🚀 Local setup

1. Clone repository
   ```bash
   git clone <your-repo-url>
   cd "D:\urupadiyana project\protfolio-react"
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start dev server
   ```bash
   npm run dev
   ```

4. Open URL shown in terminal (e.g. `http://localhost:5173`)

## 🛠️ Available scripts

- `npm run dev` : start Vite dev server
- `npm run build` : production build to `dist/`
- `npm run preview` : preview built output locally
- `npm run lint` : run ESLint check
- `npm run predeploy` + `npm run deploy` : GH Pages deploy (configured)

## 🎨 Features

- Responsive hero & nav
- Services section (mapped from `src/assets/services_data.js`)
- Portfolio/work cards in `MyWork`
- Contact form and footer
- Smooth section nav (via `react-anchor-link-smooth-scroll`)

## ✔️ Notes / enhancements

- Update your content in component files and data arrays under `src/assets`
- Add more portfolio entries in `src/assets/mywork_data.js`
- Style updates in component CSS files (e.g., `src/Components/Hero/Hero.css`)

## 📦 Dependencies

- react 19
- react-dom 19
- react-anchor-link-smooth-scroll

## 🧹 Dev dependencies

- vite
- @vitejs/plugin-react
- eslint, @eslint/js, eslint-plugin-react-hooks, eslint-plugin-react-refresh

## 📖 Troubleshooting

- If the app fails to start, check for path spaces with quotes:
  - `cd "D:\urupadiyana project\protfolio-react"`
- Run `npm start` after `npm install`.
- Watch browser console and terminal for errors.

## 📬 Contact

- This is your personal portfolio template. Customize it with your name, links, and project details.

