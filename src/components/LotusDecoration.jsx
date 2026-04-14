import './LotusDecoration.css'

function LotusDecoration() {
  return (
    <div className="lotus-decoration">
      <svg viewBox="0 0 600 160" preserveAspectRatio="none" className="lotus-svg">
        <defs>
          <radialGradient id="padDark" cx="50%" cy="40%">
            <stop offset="0%" stopColor="#3a6b48" />
            <stop offset="100%" stopColor="#1a3d25" />
          </radialGradient>
          <radialGradient id="padMid" cx="50%" cy="40%">
            <stop offset="0%" stopColor="#4a8058" />
            <stop offset="100%" stopColor="#2d5a3a" />
          </radialGradient>
          <radialGradient id="padLight" cx="50%" cy="40%">
            <stop offset="0%" stopColor="#5a9068" />
            <stop offset="100%" stopColor="#3a7048" />
          </radialGradient>
          <radialGradient id="padFront" cx="50%" cy="40%">
            <stop offset="0%" stopColor="#6aa075" />
            <stop offset="100%" stopColor="#4a8058" />
          </radialGradient>
          <radialGradient id="petalPink" cx="50%" cy="30%">
            <stop offset="0%" stopColor="#fce4ec" />
            <stop offset="100%" stopColor="#f48fb1" />
          </radialGradient>
        </defs>

        {/* Back layer - darkest pads */}
        <ellipse cx="40" cy="80" rx="58" ry="28" fill="url(#padDark)" />
        <ellipse cx="130" cy="72" rx="62" ry="30" fill="url(#padDark)" />
        <ellipse cx="240" cy="78" rx="55" ry="26" fill="url(#padDark)" />
        <ellipse cx="350" cy="70" rx="60" ry="28" fill="url(#padDark)" />
        <ellipse cx="460" cy="76" rx="58" ry="27" fill="url(#padDark)" />
        <ellipse cx="560" cy="80" rx="55" ry="28" fill="url(#padDark)" />

        {/* Second layer */}
        <ellipse cx="80" cy="95" rx="60" ry="28" fill="url(#padMid)" />
        <ellipse cx="190" cy="88" rx="65" ry="30" fill="url(#padMid)" />
        <ellipse cx="310" cy="92" rx="58" ry="27" fill="url(#padMid)" />
        <ellipse cx="420" cy="86" rx="62" ry="29" fill="url(#padMid)" />
        <ellipse cx="530" cy="93" rx="56" ry="28" fill="url(#padMid)" />

        {/* Third layer */}
        <ellipse cx="20" cy="112" rx="50" ry="24" fill="url(#padLight)" />
        <ellipse cx="140" cy="108" rx="58" ry="26" fill="url(#padLight)" />
        <ellipse cx="260" cy="115" rx="52" ry="24" fill="url(#padLight)" />
        <ellipse cx="380" cy="106" rx="60" ry="28" fill="url(#padLight)" />
        <ellipse cx="500" cy="112" rx="55" ry="25" fill="url(#padLight)" />
        <ellipse cx="590" cy="108" rx="45" ry="24" fill="url(#padLight)" />

        {/* Front layer - lightest pads */}
        <ellipse cx="60" cy="130" rx="55" ry="22" fill="url(#padFront)" />
        <ellipse cx="180" cy="128" rx="58" ry="24" fill="url(#padFront)" />
        <ellipse cx="320" cy="132" rx="52" ry="22" fill="url(#padFront)" />
        <ellipse cx="450" cy="126" rx="56" ry="24" fill="url(#padFront)" />
        <ellipse cx="570" cy="130" rx="50" ry="22" fill="url(#padFront)" />

        {/* Leaf vein lines on visible pads */}
        <path d="M80 95 L80 70" stroke="#2d5a3a" strokeWidth="0.5" opacity="0.3" />
        <path d="M80 95 L60 78" stroke="#2d5a3a" strokeWidth="0.4" opacity="0.2" />
        <path d="M80 95 L100 80" stroke="#2d5a3a" strokeWidth="0.4" opacity="0.2" />

        <path d="M310 92 L310 68" stroke="#2d5a3a" strokeWidth="0.5" opacity="0.3" />
        <path d="M310 92 L290 76" stroke="#2d5a3a" strokeWidth="0.4" opacity="0.2" />
        <path d="M310 92 L330 78" stroke="#2d5a3a" strokeWidth="0.4" opacity="0.2" />

        {/* Lotus flowers */}
        {/* Flower 1 - full bloom */}
        <g transform="translate(95, 68)" className="lotus-flower">
          <ellipse cx="-8" cy="0" rx="5" ry="12" fill="#f8bbd0" transform="rotate(-40)" />
          <ellipse cx="-4" cy="0" rx="5" ry="13" fill="#f48fb1" transform="rotate(-20)" />
          <ellipse cx="0" cy="0" rx="5" ry="14" fill="#fce4ec" transform="rotate(0)" />
          <ellipse cx="4" cy="0" rx="5" ry="13" fill="#f48fb1" transform="rotate(20)" />
          <ellipse cx="8" cy="0" rx="5" ry="12" fill="#f8bbd0" transform="rotate(40)" />
          <circle cx="0" cy="0" r="4" fill="#f06292" />
          <circle cx="0" cy="0" r="2" fill="#ffcc02" />
        </g>

        {/* Flower 2 - medium */}
        <g transform="translate(280, 72)" className="lotus-flower">
          <ellipse cx="-6" cy="0" rx="4" ry="10" fill="#f8bbd0" transform="rotate(-35)" />
          <ellipse cx="0" cy="0" rx="4.5" ry="11" fill="#fce4ec" transform="rotate(0)" />
          <ellipse cx="6" cy="0" rx="4" ry="10" fill="#f8bbd0" transform="rotate(35)" />
          <circle cx="0" cy="0" r="3" fill="#f06292" />
          <circle cx="0" cy="0" r="1.5" fill="#ffcc02" />
        </g>

        {/* Flower 3 - full bloom */}
        <g transform="translate(480, 70)" className="lotus-flower">
          <ellipse cx="-8" cy="0" rx="5" ry="12" fill="#f8bbd0" transform="rotate(-40)" />
          <ellipse cx="-4" cy="0" rx="5" ry="13" fill="#f48fb1" transform="rotate(-20)" />
          <ellipse cx="0" cy="0" rx="5" ry="14" fill="#fce4ec" transform="rotate(0)" />
          <ellipse cx="4" cy="0" rx="5" ry="13" fill="#f48fb1" transform="rotate(20)" />
          <ellipse cx="8" cy="0" rx="5" ry="12" fill="#f8bbd0" transform="rotate(40)" />
          <circle cx="0" cy="0" r="4" fill="#f06292" />
          <circle cx="0" cy="0" r="2" fill="#ffcc02" />
        </g>

        {/* Flower 4 - small bud */}
        <g transform="translate(180, 82)" className="lotus-flower-small">
          <ellipse cx="-3" cy="0" rx="3" ry="8" fill="#f8bbd0" transform="rotate(-20)" />
          <ellipse cx="0" cy="0" rx="3.5" ry="9" fill="#fce4ec" transform="rotate(0)" />
          <ellipse cx="3" cy="0" rx="3" ry="8" fill="#f8bbd0" transform="rotate(20)" />
          <circle cx="0" cy="0" r="2" fill="#f06292" />
        </g>

        {/* Flower 5 - small bud */}
        <g transform="translate(400, 78)" className="lotus-flower-small">
          <ellipse cx="-3" cy="0" rx="3" ry="8" fill="#f8bbd0" transform="rotate(-20)" />
          <ellipse cx="0" cy="0" rx="3.5" ry="9" fill="#fce4ec" transform="rotate(0)" />
          <ellipse cx="3" cy="0" rx="3" ry="8" fill="#f8bbd0" transform="rotate(20)" />
          <circle cx="0" cy="0" r="2" fill="#f06292" />
        </g>

        {/* Flower 6 - tiny */}
        <g transform="translate(550, 88)">
          <ellipse cx="0" cy="0" rx="3" ry="7" fill="#f8bbd0" transform="rotate(-10)" />
          <ellipse cx="0" cy="0" rx="3" ry="7" fill="#fce4ec" transform="rotate(15)" />
          <circle cx="0" cy="0" r="1.5" fill="#f06292" />
        </g>

        {/* Flower 7 - tiny */}
        <g transform="translate(30, 75)">
          <ellipse cx="0" cy="0" rx="3" ry="7" fill="#f8bbd0" transform="rotate(-10)" />
          <ellipse cx="0" cy="0" rx="3" ry="7" fill="#fce4ec" transform="rotate(15)" />
          <circle cx="0" cy="0" r="1.5" fill="#f06292" />
        </g>
      </svg>
    </div>
  )
}

export default LotusDecoration
