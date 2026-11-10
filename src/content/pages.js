/**
 * =====================================================================
 *  EDIT YOUR CONTENT HERE
 * =====================================================================
 *  This is the ONE file you need to touch to change the words, the
 *  button labels, the links, and which photo each page shows.
 *
 *  PHOTOS
 *    Drop your pictures into:  public/photos/
 *    Then change the `photo` path below to match the filename, e.g.
 *      photo: '/photos/dance.webp'
 *    Cut-out pictures (transparent background) look best: the person
 *    stands straight on the page. Any size works.
 *
 *  LINKS
 *    `portfolioLink` is where the big button goes. Use the full address
 *    (https://...) of each portfolio site.
 * ===================================================================== */

export const PAGES = {
  dance: {
    title: 'Dance Artist',
    eyebrow: 'Dance Portfolio',
    // Short labels shown as cream tags under the title (Dance page only)
    tags: ['KRUMP', 'OPEN CHOREO', 'JR TSUBAKI'],
    description: 'A dancer driven by the power of movement to inspire, connect, and create.',
    // Small line in the bottom corner on big screens (Dance page only)
    meta: 'Nitrous Image Crew · FLOPM · Buck SNDKT · The Rocketeerz',
    buttonLabel: 'View Portfolio',
    portfolioLink: 'https://alecson12.github.io/danceartist-portfolio/',
    photo: '/photos/dance.webp',
    photoAlt: 'Alecson Gantica, dance artist',
  },

  design: {
    title: 'Graphic Design',
    eyebrow: 'Kozmik Kreations',
    description: 'Kreativity beyond the ordinary.',
    // Small line in the bottom corner on big screens (Design page only)
    meta: 'Logo & Brand Identity · Social Media · Print',
    buttonLabel: 'Explore My Kreations',
    portfolioLink: 'https://alecson12.github.io/kozmikkreations-portfolio/',
    photo: '/photos/design.webp',
    photoAlt: 'Alecson Gantica, graphic designer',
    // The chrome Kozmik mark shown above the title (transparent images)
    mark: '/media/design/kozmik-chrome.webp',
    markStencil: '/media/design/kozmik-mark.png',
  },

  unity: {
    title: 'Unity Developer',
    eyebrow: 'Unity Developer · Game UI & Systems',
    buttonLabel: 'Dive In',
    portfolioLink: 'https://alecson12.github.io/unitydeveloper-portfolio/',
    photo: '/media/unity/alecson-unity-developer-white.webp',
    // Pixel wordmark shown in the sky instead of a text title (transparent webp)
    wordmark: '/media/unity/wordmark.webp',
    wordmarkAlt: 'Unity Developer, Alecson Gantica',
    photoAlt: 'Alecson Gantica, Unity developer',
  },
}

/** Text shown in the top-left corner of every page. */
export const SITE_NAME = 'Alecson Gantica'
