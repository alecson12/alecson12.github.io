/**
 * =====================================================================
 *  EDIT YOUR CONTENT HERE
 * =====================================================================
 *  This is the ONE file you need to touch to change the words, the
 *  services, the links, the contact details and the photos.
 *
 *  PHOTOS
 *    Drop your pictures into:  public/photos/   then change `photo`.
 *    Cut-out pictures (transparent background) look best: the person
 *    stands straight on the page. Any size works.
 *
 *  LINKS
 *    `portfolioLink` is where the Portfolio button goes. Use the full
 *    address (https://...) of each portfolio site.
 *
 *  ANALYTICS
 *    Paste your Google Analytics Measurement ID (G-XXXXXXXXXX) into
 *    `ANALYTICS.gaId` below. Views and visitors then show up at
 *    analytics.google.com. Leave it empty and nothing is tracked.
 *
 *  Everything here was taken from your three portfolio sites. Nothing
 *  was invented; change it as you like.
 * ===================================================================== */

/** Top bar. */
export const SITE = {
  name: 'Alecson Gantica',
  // The big question in the header
  question: 'What version of me you want to hire?',
  hint: 'Pick one',
  contactLabel: 'Contact',
}

/** The three roles, in the order they appear left to right. */
export const ROLES = [
  {
    id: 'dance',
    title: 'Dance Artist',
    eyebrow: 'Dance Portfolio',
    pitch: 'A dancer driven by the power of movement to inspire, connect, and create.',
    // What you can be hired for (from the Works & Projects sections)
    services: ['Performances', 'Choreography', 'Coaching', 'Competition judging', 'Corporate guesting', 'TV appearances'],
    styles: ['Krump', 'Open Choreo'],
    availability: 'Nitrous Image Crew · FLOPM · Buck SNDKT · The Rocketeerz',
    hireLabel: 'Hire me',
    hireSubject: 'Dance booking — Alecson Gantica',
    portfolioLabel: 'Portfolio',
    portfolioLink: 'https://alecson12.github.io/danceartist-portfolio/',
    photo: '/photos/dance.webp',
    photoAlt: 'Alecson Gantica, dance artist',
  },
  {
    id: 'design',
    title: 'Graphic Design',
    eyebrow: 'Kozmik Kreations',
    pitch: 'Kreativity beyond the ordinary.',
    // From the Services slide of Kozmik Kreations
    services: ['Logo & brand identity', 'Social media graphics', 'Posters & marketing', 'Print design', 'Custom graphics & merch', 'Photo retouching'],
    availability: 'Open for commissions',
    hireLabel: 'Start a project',
    hireSubject: 'Project inquiry — Kozmik Kreations',
    // Kozmik has its own inbox; leave blank to use the main email below
    email: 'kozmikkreations.design@gmail.com',
    portfolioLabel: 'My Kreations',
    portfolioLink: 'https://alecson12.github.io/kozmikkreations-portfolio/',
    photo: '/photos/design.webp',
    photoAlt: 'Alecson Gantica, graphic designer',
    mark: '/media/design/kozmik-chrome.webp',
    markStencil: '/media/design/kozmik-mark.png',
  },
  {
    id: 'unity',
    title: 'Unity Developer',
    eyebrow: 'Game UI & Systems',
    pitch: 'I build the screens players live in.',
    // From the What I do section of the Unity portfolio, with its pixel icons
    // (controller · hud · code · gear · star · trophy)
    services: [
      { name: 'Unity Game Development', icon: 'controller' },
      { name: 'Game UI / UX Implementation', icon: 'hud' },
      { name: 'C# Programming', icon: 'code' },
      { name: 'Game Systems', icon: 'gear' },
      { name: 'Gameplay Programming', icon: 'star' },
      { name: 'Bug Fixing & Optimization', icon: 'trophy' },
    ],
    availability: 'Open to contract and part-time work',
    hireLabel: 'Hire me',
    hireSubject: 'Unity work — Alecson Gantica',
    portfolioLabel: 'Portfolio',
    portfolioLink: 'https://alecson12.github.io/unitydeveloper-portfolio/',
    photo: '/media/unity/alecson-unity-developer-white.webp',
    photoAlt: 'Alecson Gantica, Unity developer',
    wordmark: '/media/unity/wordmark.webp',
  },
]

/** Contact details shown in the hire sheet (all from your portfolios). Remove any line you do not want shown. */
export const CONTACT = {
  email: 'alecsongantica12@gmail.com',
  based: 'Bulacan, Philippines',
  links: [
    { label: 'Facebook', href: 'https://www.facebook.com/alecson.12' },
    { label: 'Instagram', href: 'https://www.instagram.com/alec.jrtsubaki' },
    { label: 'TikTok', href: 'https://www.tiktok.com/@mr.gantica' },
    { label: 'Behance', href: 'https://www.behance.net/KozmikKreations' },
    { label: 'GitHub', href: 'https://github.com/alecson12' },
  ],
}

/** Google Analytics 4 Measurement ID, shared by all four sites. Empty = off. */
export const ANALYTICS = {
  gaId: '',
}
