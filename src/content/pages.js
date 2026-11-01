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
 *      photo: '/photos/dance.jpg'
 *    Portrait orientation (taller than wide) looks best. Any size works.
 *
 *  LINKS
 *    `portfolioLink` is where the "View Portfolio" button goes.
 *    Use a full URL (https://...) for an external site, or a path like
 *    '/dance' once you build the gallery pages inside this project.
 * ===================================================================== */

export const PAGES = {
  dance: {
    title: 'Dance Artist',
    eyebrow: 'Krump · Open Choreography',
    description:
      'Choreographer, performer, and crew member. Placeholder text: write two or three sentences about your dance journey, your style, and what you bring to a stage.',
    buttonLabel: 'View Portfolio',
    portfolioLink: 'https://www.behance.net/gallery/231948345/DANCE-PORTFOLIO-Alecson-Gantica-',
    photo: '/photos/dance.svg',
    photoAlt: 'Alecson Gantica, dance artist',
  },

  design: {
    title: 'Graphic Design',
    eyebrow: 'Kozmik Kreations',
    description:
      'Branding, logo design, and visual identity. Placeholder text: describe the kind of design work you do, who you have worked with, and what your visual voice is.',
    buttonLabel: 'View Portfolio',
    portfolioLink: '#design-portfolio-coming-soon',
    photo: '/photos/design.svg',
    photoAlt: 'Alecson Gantica, graphic designer',
  },

  unity: {
    title: 'Unity Developer',
    eyebrow: 'Gameplay · Systems · Pixel Worlds',
    description:
      'Gameplay programmer and game designer. Placeholder text: mention the games or prototypes you have built, the systems you enjoy coding, and the genres you love.',
    // The Unity page has a second text column (right side) in the layout.
    secondaryText:
      'Placeholder text for the right column: tools you use (C#, Unity, shaders, Tilemaps), or a short list of shipped projects and jams.',
    buttonLabel: 'View Portfolio',
    portfolioLink: '#unity-portfolio-coming-soon',
    photo: '/photos/unity.svg',
    photoAlt: 'Alecson Gantica, Unity developer',
  },
}

/** Text shown in the top-left corner of every page. */
export const SITE_NAME = 'Alecson Gantica'
