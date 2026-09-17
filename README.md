# AQiels Portfolio

Personal portfolio of **Muhammad Aqilul Muttaqin** — a fullstack web developer
based in Malang, Indonesia.

Single-page React application built with Vite and Tailwind CSS v4.

## Tech stack

| Purpose      | Library                        |
| ------------ | ------------------------------ |
| UI           | React 19                       |
| Build        | Vite 6                         |
| Styling      | Tailwind CSS v4 (`@tailwindcss/vite`) |
| Scroll nav   | `react-scroll`                 |
| Animation    | `aos`                          |
| Icons        | `react-icons`                  |
| Contact form | `@emailjs/browser`             |

## Getting started

```bash
npm install
npm run dev
```

The contact form needs EmailJS credentials. Create a `.env` file in the project
root (it is git-ignored):

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Without these the form renders but shows an error on submit.

## Scripts

| Command           | Description                        |
| ----------------- | ---------------------------------- |
| `npm run dev`     | Start the dev server               |
| `npm run build`   | Production build into `dist/`      |
| `npm run preview` | Serve the production build locally |
| `npm run lint`    | Run ESLint                         |

## Project structure

```
src/
├── App.jsx                     # Layout + the single AOS.init() for the app
├── constants.js                # Profile data, social links, scroll settings
├── index.css                   # Tailwind entry + reduced-motion overrides
└── components/
    ├── HomeSection.jsx
    ├── AboutSection.jsx
    ├── ExperienceSection.jsx
    ├── ProjectSection.jsx
    ├── ContactSection.jsx
    └── Layouts/
        ├── Navbar.jsx
        └── Footer.jsx
```

### Editing content

Most content lives next to the component that renders it:

- **Profile, social links, CV link** → `src/constants.js`
- **Work history and education** → `workExperience` / `education` in
  `ExperienceSection.jsx`
- **Projects** → the `projects` array in `ProjectSection.jsx`. Leave `liveLink`
  or `githubLink` as an empty string when there is no public URL; the card then
  renders a disabled label instead of a dead link.

Project screenshots live in `public/projects/` and are referenced with
root-absolute paths (`/projects/name.png`).

## Notes

- `AOS.init()` must only be called once (in `App.jsx`). AOS keeps its config in a
  single module-level object and adds a fresh set of scroll listeners on every
  init, so calling it per-section silently overrides the config and leaks
  listeners.
- Scroll offsets use `SCROLL_OFFSET` from `src/constants.js`, which matches the
  fixed navbar height (64px).
- Deploying under a sub-path requires setting `base` in `vite.config.js` and
  updating the `/projects/...` image paths.
