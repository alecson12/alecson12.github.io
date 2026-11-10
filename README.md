# Alecson Gantica — Portfolio

Three full-screen pages (Dance Artist, Graphic Design, Unity Developer) connected by horizontal slide transitions.

## Run it

```bash
npm install
npm run dev
```

Build for hosting with `npm run build` (output in `dist/`).

## Where to edit things

| I want to…                                  | Open this file                              |
| ------------------------------------------- | ------------------------------------------- |
| Change titles, descriptions, button text    | `src/content/pages.js`                      |
| Change where "View Portfolio" buttons go    | `src/content/pages.js` → `portfolioLink`    |
| Replace a photo                             | drop the file in `public/photos/`, then set `photo` in `src/content/pages.js` |
| Change which arrow buttons a page shows     | `src/navigation/routes.js` → `NAV_LINKS`    |
| Change page order / slide direction         | `src/navigation/routes.js` → `ORDER`        |
| Change slide speed or easing                | `src/transitions/slide.js`                  |
| Change a page's colours or fonts            | `src/styles/themes.css`                     |
| Change a page's layout                      | `src/pages/DancePage.jsx`, `DesignPage.jsx`, `UnityPage.jsx` |
| Add the real portfolio gallery for a page   | create a new page component and point `portfolioLink` at it (see below) |

## Photos

Put your pictures in `public/photos/`. Portrait orientation works best. Then in `src/content/pages.js` change, for example:

```js
photo: '/photos/dance.webp',
photo: '/photos/dance.jpg',   // your photo
```

The current photos are `dance.webp` and `design.webp`; the Unity page uses `public/media/unity/`. Cut-out pictures with a transparent background look best.

## Folder structure

```
src/
  App.jsx                 mounts the current page inside the slide stage
  main.jsx                React entry point
  content/
    pages.js              ALL text, links and photo paths (edit here)
  navigation/
    routes.js             page order + which arrow buttons appear where
    useNavigation.js      current page, direction, URL hash, arrow keys
  transitions/
    slide.js              horizontal slide + text fade animations
  components/
    PageShell.jsx         full-screen wrapper: slide, site name, arrows
    Photo.jsx             the big portrait
    PortfolioButton.jsx   "View Portfolio" button
    NavButton.jsx         chevron arrow button
  pages/
    DancePage.jsx         photo left, text right
    DesignPage.jsx        text left, photo right
    UnityPage.jsx         text left, photo centre, text right
  styles/
    index.css             Tailwind + shared element styles
    themes.css            colours and fonts per page
public/
  photos/                 your portraits go here
  icon-32.png, icon-192.png, apple-touch-icon.png   (the pixel wave tab icon)
```

## How navigation works

- `useNavigation` keeps the current page id (`dance`, `design`, `unity`) and the direction of the last move.
- Direction comes from `LAYOUT` in `routes.js`, which places the pages on a 2D grid (Dance top-left, Design top-right, Unity bottom-centre). The slide follows the vector between the two pages: horizontal, vertical or diagonal. Clicks during a slide are ignored.
- `App.jsx` renders only the current page inside `AnimatePresence`. When the page changes, the old one animates out and the new one animates in at the same time, so there is never a blank frame.
- The URL hash is kept in sync (`/#design`), so each page is linkable and the browser back button works. Left/Right arrow keys also move between pages.

## Adding real portfolio galleries later

1. Create `src/pages/DanceGallery.jsx` (or similar).
2. Either render it as a fourth page in this slide system, or build it as its own route and set `portfolioLink: '/dance'` in `pages.js`.
3. External sites (Behance, itch.io, YouTube) work today: just paste the URL into `portfolioLink`.
