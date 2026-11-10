/**
 * Small 12×12 pixel icons, the same ones the Unity portfolio uses for its
 * services. 'X' = ink (currentColor), 'o' = accent.
 * Names: controller, hud, code, gear, star, trophy.
 */
const ICONS = {
  controller: ['............', '............', '..XXXXXXXX..', '.X........X.', 'X..o....o..X', 'X.ooo..o.o.X', 'X..o....o..X', 'X..........X', '.X..X..X..X.', '..XX....XX..', '............', '............'],
  hud: ['............', '.XXXXXXXXXX.', '.X........X.', '.X.ooooo..X.', '.X........X.', '.X.ooo....X.', '.X........X.', '.XXXXXXXXXX.', '............', '.XX......XX.', '.X........X.', '.XX......XX.'],
  code: ['............', '............', '...X....X...', '..X......X..', '.X........X.', 'X....oo....X', 'X....oo....X', '.X........X.', '..X......X..', '...X....X...', '............', '............'],
  gear: ['.....XX.....', '..X..XX..X..', '.XXXXXXXXXX.', '..XX....XX..', '.XX..oo..XX.', 'XXX.o..o.XXX', 'XXX.o..o.XXX', '.XX..oo..XX.', '..XX....XX..', '.XXXXXXXXXX.', '..X..XX..X..', '.....XX.....'],
  star: ['.....XX.....', '.....XX.....', '....XooX....', '....XooX....', 'XXXXXooXXXXX', '.XooooooooX.', '..XooooooX..', '...XooooX...', '...XooooX...', '..XooXXooX..', '.XoX....XoX.', 'XX........XX'],
  trophy: ['............', '.XXXXXXXXXX.', 'X.X......X.X', 'X.X.oooo.X.X', 'X.X.oooo.X.X', '.XX......XX.', '..X......X..', '...X....X...', '....XXXX....', '.....XX.....', '...XXXXXX...', '..XXXXXXXX..'],
}

export default function PixelIcon({ name = 'star', size = 20, accent = '#9fb4dc', className = '' }) {
  const grid = ICONS[name] ?? ICONS.star
  const cells = []
  grid.forEach((row, y) => {
    for (let x = 0; x < row.length; x++) if (row[x] !== '.') cells.push([x, y, row[x]])
  })
  return (
    <svg viewBox="0 0 12 12" width={size} height={size} className={className} shapeRendering="crispEdges" aria-hidden>
      {cells.map(([x, y, ch]) => (
        <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" fill={ch === 'o' ? accent : 'currentColor'} />
      ))}
    </svg>
  )
}
