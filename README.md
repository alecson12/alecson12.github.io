# Alecson Gantica — Portfolio

One screen, three doors. Each door is one way to hire Alecson (Dance Artist, Graphic Design, Unity Developer), painted in the look of its own portfolio site. Hover or tap a door and it opens: the pitch, what you can be hired for, a **Hire me** button (opens the contact sheet) and a **Portfolio** button (opens the portfolio site).

Live at https://alecson12.github.io/ · built with Vite, React, Tailwind and Framer Motion.

## Edit your content

Everything you would normally want to change is in **one file**: `src/content/pages.js`.

| I want to…                                   | Edit                                        |
| -------------------------------------------- | ------------------------------------------- |
| Change the words (titles, pitch, services)   | `src/content/pages.js` → `ROLES`            |
| Change where a Portfolio button goes         | `ROLES[...].portfolioLink`                  |
| Change the email, socials, location          | `src/content/pages.js` → `CONTACT`          |
| Change the tagline or the Contact label      | `src/content/pages.js` → `SITE`             |
| Swap a photo                                 | drop it in `public/photos/`, set `photo`    |
| Change colours or fonts of a world           | `src/styles/themes.css` (`.world-dance` …)  |
| Change how the doors open and move           | `src/styles/index.css` (the `.panel` block) |

### Photos

Cut-out pictures with a transparent background look best: the person stands straight on the page. Any size works; `.webp` keeps the site fast. Current files: `public/photos/dance.webp`, `public/photos/design.webp`, and the Unity cut-out in `public/media/unity/`.

### Services

Each role lists what you can be hired for. They were taken from the three portfolio sites; add or remove entries in `ROLES[...].services`.

## Run it

```bash
npm install
npm run dev
```

Opens at http://localhost:5173. `npm run build` makes the `dist/` folder; pushing to `main` publishes it to GitHub Pages through `.github/workflows/deploy.yml`.

## Folder structure

```
src/
  content/pages.js        ← the words, links, contact, photos (edit this)
  screens/
    Select.jsx            the screen: top bar, the three doors, the sheet
    Panel.jsx             one door (copy, photo, chips, buttons)
    World.jsx             the painted background of each door
    HireSheet.jsx         the contact sheet
  styles/
    index.css             layout: doors, copy, sheet
    themes.css            the three worlds: colours, fonts, art
public/
  photos/                 your portraits
  media/dance|design|unity  art and brand assets used by the worlds
  icon-32.png, icon-192.png, apple-touch-icon.png   the tab icon
```

## How it behaves

- On a mouse, hovering a door opens it; moving off closes all three. On a phone, tapping a door opens it. Arrow keys move between doors, Enter opens the contact sheet, Escape closes.
- The contact sheet shows the role's services, its availability line, an **Email me** link with a prefilled subject, a copy-address button, and the social links. The Graphic Design door uses the Kozmik Kreations inbox; the others use the main address.
- Everything stops moving under the system's reduce-motion setting.
