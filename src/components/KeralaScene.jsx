import './KeralaScene.css'

function KeralaScene() {
  return (
    <div className="kerala-scene">
      <svg viewBox="0 0 600 200" preserveAspectRatio="none" className="kerala-svg">
        <defs>
          <linearGradient id="meadow1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#5a8c3e" />
            <stop offset="100%" stopColor="#3d6b28" />
          </linearGradient>
          <linearGradient id="meadow2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#4a7c30" />
            <stop offset="100%" stopColor="#2d5a1e" />
          </linearGradient>
          <linearGradient id="elephantGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#5a5a5a" />
            <stop offset="50%" stopColor="#4a4a4a" />
            <stop offset="100%" stopColor="#3a3a3a" />
          </linearGradient>
          <linearGradient id="elephantGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#555" />
            <stop offset="100%" stopColor="#3d3d3d" />
          </linearGradient>
        </defs>

        {/* Sky/background hint */}
        <rect x="0" y="0" width="600" height="80" fill="rgba(200, 220, 180, 0.15)" />

        {/* Back hills */}
        <ellipse cx="150" cy="95" rx="200" ry="50" fill="#4a7830" opacity="0.4" />
        <ellipse cx="450" cy="90" rx="220" ry="55" fill="#3d6b25" opacity="0.4" />

        {/* Meadow - rolling hills */}
        <path d="M0 120 Q100 85 200 105 Q300 75 400 100 Q500 80 600 95 L600 200 L0 200 Z" fill="url(#meadow1)" />
        <path d="M0 140 Q80 120 160 135 Q280 110 400 130 Q500 115 600 125 L600 200 L0 200 Z" fill="url(#meadow2)" />

        {/* Grass tufts */}
        <path d="M50 135 Q52 125 54 135" stroke="#3d7028" strokeWidth="1" fill="none" />
        <path d="M52 135 Q55 122 58 135" stroke="#4a8035" strokeWidth="1" fill="none" />
        <path d="M180 128 Q182 118 184 128" stroke="#3d7028" strokeWidth="1" fill="none" />
        <path d="M182 128 Q185 115 188 128" stroke="#4a8035" strokeWidth="1" fill="none" />
        <path d="M350 125 Q352 115 354 125" stroke="#3d7028" strokeWidth="1" fill="none" />
        <path d="M450 130 Q452 120 454 130" stroke="#4a8035" strokeWidth="1" fill="none" />
        <path d="M520 120 Q522 110 524 120" stroke="#3d7028" strokeWidth="1" fill="none" />

        {/* Elephant 1 - left side, larger */}
        <g transform="translate(100, 100)" className="elephant elephant-1">
          {/* Body */}
          <ellipse cx="30" cy="35" rx="28" ry="20" fill="url(#elephantGrad)" />
          {/* Head */}
          <ellipse cx="58" cy="25" rx="14" ry="16" fill="url(#elephantGrad)" />
          {/* Ear */}
          <ellipse cx="50" cy="22" rx="8" ry="12" fill="#4d4d4d" />
          {/* Eye */}
          <circle cx="62" cy="22" r="1.5" fill="#1a1a1a" />
          <circle cx="62.5" cy="21.5" r="0.5" fill="#fff" />
          {/* Trunk */}
          <path d="M68 30 Q75 40 72 55 Q70 62 66 65" stroke="url(#elephantGrad)" strokeWidth="5" fill="none" strokeLinecap="round" />
          {/* Tusks */}
          <path d="M66 32 Q72 36 70 42" stroke="#f5f0e0" strokeWidth="2" fill="none" strokeLinecap="round" />
          {/* Legs */}
          <rect x="12" y="48" width="8" height="22" rx="3" fill="#4a4a4a" />
          <rect x="22" y="48" width="8" height="24" rx="3" fill="#444" />
          <rect x="38" y="48" width="8" height="24" rx="3" fill="#444" />
          <rect x="48" y="48" width="8" height="22" rx="3" fill="#4a4a4a" />
          {/* Tail */}
          <path d="M3 30 Q-4 40 -2 48" stroke="#3a3a3a" strokeWidth="2" fill="none" />
          <path d="M-2 48 Q-4 50 -1 52" stroke="#2a2a2a" strokeWidth="3" fill="none" />
          {/* Decorative nettipattam (forehead ornament) */}
          <rect x="53" y="12" width="10" height="8" rx="2" fill="#daa520" opacity="0.8" />
          <circle cx="58" cy="16" r="2" fill="#cc0000" opacity="0.7" />
          {/* Back cloth */}
          <path d="M10 20 L50 20 L50 35 L10 35 Z" fill="#8b1a1a" opacity="0.4" />
          <path d="M10 25 L50 25" stroke="#daa520" strokeWidth="0.8" opacity="0.5" />
          <path d="M10 30 L50 30" stroke="#daa520" strokeWidth="0.8" opacity="0.5" />
        </g>

        {/* Elephant 2 - right side, smaller (further away) */}
        <g transform="translate(420, 95) scale(0.7)" className="elephant elephant-2">
          <ellipse cx="30" cy="35" rx="28" ry="20" fill="url(#elephantGrad2)" />
          <ellipse cx="2" cy="25" rx="14" ry="16" fill="url(#elephantGrad2)" />
          <ellipse cx="10" cy="22" rx="8" ry="12" fill="#4d4d4d" />
          <circle cx="-2" cy="22" r="1.5" fill="#1a1a1a" />
          <path d="M-10 30 Q-18 42 -15 55 Q-13 60 -10 63" stroke="url(#elephantGrad2)" strokeWidth="5" fill="none" strokeLinecap="round" />
          <path d="M-6 32 Q-12 38 -10 44" stroke="#f5f0e0" strokeWidth="2" fill="none" strokeLinecap="round" />
          <rect x="12" y="48" width="8" height="22" rx="3" fill="#4a4a4a" />
          <rect x="22" y="48" width="8" height="24" rx="3" fill="#444" />
          <rect x="38" y="48" width="8" height="24" rx="3" fill="#444" />
          <rect x="48" y="48" width="8" height="22" rx="3" fill="#4a4a4a" />
          <path d="M57 30 Q64 40 62 48" stroke="#3a3a3a" strokeWidth="2" fill="none" />
          <rect x="-3" y="12" width="10" height="8" rx="2" fill="#daa520" opacity="0.7" />
        </g>

        {/* Flowers scattered in meadow */}
        {/* Hibiscus-style flowers */}
        <g transform="translate(70, 140)">
          <circle cx="0" cy="0" r="4" fill="#e74c3c" />
          <circle cx="0" cy="0" r="2" fill="#ffcc00" />
          <ellipse cx="-3" cy="-2" rx="2" ry="3" fill="#e74c3c" opacity="0.8" />
          <ellipse cx="3" cy="-2" rx="2" ry="3" fill="#e74c3c" opacity="0.8" />
        </g>

        <g transform="translate(250, 130)">
          <circle cx="0" cy="0" r="3.5" fill="#f39c12" />
          <circle cx="0" cy="0" r="1.5" fill="#fff" />
          <ellipse cx="-2.5" cy="-1.5" rx="1.8" ry="2.5" fill="#f39c12" opacity="0.8" />
          <ellipse cx="2.5" cy="-1.5" rx="1.8" ry="2.5" fill="#f39c12" opacity="0.8" />
        </g>

        <g transform="translate(380, 135)">
          <circle cx="0" cy="0" r="4" fill="#e74c3c" />
          <circle cx="0" cy="0" r="2" fill="#ffcc00" />
          <ellipse cx="-3" cy="-2" rx="2" ry="3" fill="#e74c3c" opacity="0.8" />
          <ellipse cx="3" cy="-2" rx="2" ry="3" fill="#e74c3c" opacity="0.8" />
        </g>

        <g transform="translate(530, 125)">
          <circle cx="0" cy="0" r="3" fill="#f1c40f" />
          <circle cx="0" cy="0" r="1.5" fill="#fff" />
        </g>

        <g transform="translate(160, 138)">
          <circle cx="0" cy="0" r="2.5" fill="#e91e63" />
          <circle cx="0" cy="0" r="1" fill="#fff" />
        </g>

        <g transform="translate(480, 132)">
          <circle cx="0" cy="0" r="3" fill="#e91e63" />
          <circle cx="0" cy="0" r="1.2" fill="#ffcc00" />
          <ellipse cx="-2" cy="-1" rx="1.5" ry="2" fill="#e91e63" opacity="0.8" />
          <ellipse cx="2" cy="-1" rx="1.5" ry="2" fill="#e91e63" opacity="0.8" />
        </g>

        {/* Small white flowers (jasmine) */}
        <circle cx="120" cy="145" r="2" fill="#faf5e4" opacity="0.8" />
        <circle cx="300" cy="138" r="1.8" fill="#faf5e4" opacity="0.8" />
        <circle cx="430" cy="142" r="2" fill="#faf5e4" opacity="0.8" />
        <circle cx="560" cy="130" r="1.5" fill="#faf5e4" opacity="0.8" />

        {/* Foreground grass layer */}
        <path d="M0 165 Q50 155 100 162 Q200 150 300 160 Q400 148 500 158 Q550 152 600 155 L600 200 L0 200 Z" fill="#2d5a1e" opacity="0.6" />
      </svg>
    </div>
  )
}

export default KeralaScene
