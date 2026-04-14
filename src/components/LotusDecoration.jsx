import './LotusDecoration.css'

function LotusDecoration() {
  return (
    <div className="lotus-decoration">
      <svg viewBox="0 0 600 140" preserveAspectRatio="none" className="lotus-svg">
        <defs>
          <radialGradient id="leafGrad1" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#4a7c59" />
            <stop offset="100%" stopColor="#2d5a3a" />
          </radialGradient>
          <radialGradient id="leafGrad2" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#5a8c65" />
            <stop offset="100%" stopColor="#3a6b48" />
          </radialGradient>
          <radialGradient id="leafGrad3" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#3d6b4a" />
            <stop offset="100%" stopColor="#1e4a2e" />
          </radialGradient>
        </defs>

        {/* Background lily pad layer (darker, further back) */}
        <ellipse cx="50" cy="100" rx="55" ry="30" fill="url(#leafGrad3)" />
        <ellipse cx="150" cy="90" rx="60" ry="32" fill="url(#leafGrad3)" />
        <ellipse cx="270" cy="95" rx="55" ry="28" fill="url(#leafGrad3)" />
        <ellipse cx="380" cy="88" rx="58" ry="30" fill="url(#leafGrad3)" />
        <ellipse cx="500" cy="95" rx="55" ry="28" fill="url(#leafGrad3)" />
        <ellipse cx="580" cy="100" rx="50" ry="30" fill="url(#leafGrad3)" />

        {/* Middle layer lily pads */}
        <ellipse cx="80" cy="110" rx="60" ry="28" fill="url(#leafGrad1)" />
        <ellipse cx="200" cy="105" rx="65" ry="30" fill="url(#leafGrad1)" />
        <ellipse cx="330" cy="108" rx="58" ry="28" fill="url(#leafGrad1)" />
        <ellipse cx="450" cy="105" rx="62" ry="30" fill="url(#leafGrad1)" />
        <ellipse cx="560" cy="112" rx="55" ry="28" fill="url(#leafGrad1)" />

        {/* Front layer lily pads (lighter) */}
        <ellipse cx="30" cy="125" rx="50" ry="25" fill="url(#leafGrad2)" />
        <ellipse cx="140" cy="120" rx="55" ry="26" fill="url(#leafGrad2)" />
        <ellipse cx="260" cy="125" rx="50" ry="24" fill="url(#leafGrad2)" />
        <ellipse cx="390" cy="120" rx="55" ry="26" fill="url(#leafGrad2)" />
        <ellipse cx="510" cy="125" rx="52" ry="24" fill="url(#leafGrad2)" />
        <ellipse cx="600" cy="122" rx="45" ry="25" fill="url(#leafGrad2)" />

        {/* Lotus flowers */}
        {/* Flower 1 */}
        <g transform="translate(100, 80)">
          <ellipse cx="0" cy="0" rx="6" ry="10" fill="#f5c6d0" transform="rotate(-30)" />
          <ellipse cx="0" cy="0" rx="6" ry="10" fill="#f8d0d8" transform="rotate(0)" />
          <ellipse cx="0" cy="0" rx="6" ry="10" fill="#f5c6d0" transform="rotate(30)" />
          <circle cx="0" cy="0" r="3" fill="#e8a0b0" />
        </g>

        {/* Flower 2 */}
        <g transform="translate(300, 85)">
          <ellipse cx="0" cy="0" rx="5" ry="9" fill="#f5c6d0" transform="rotate(-25)" />
          <ellipse cx="0" cy="0" rx="5" ry="9" fill="#f8d0d8" transform="rotate(5)" />
          <ellipse cx="0" cy="0" rx="5" ry="9" fill="#f5c6d0" transform="rotate(35)" />
          <circle cx="0" cy="0" r="2.5" fill="#e8a0b0" />
        </g>

        {/* Flower 3 */}
        <g transform="translate(480, 82)">
          <ellipse cx="0" cy="0" rx="6" ry="10" fill="#f5c6d0" transform="rotate(-20)" />
          <ellipse cx="0" cy="0" rx="6" ry="10" fill="#f8d0d8" transform="rotate(10)" />
          <ellipse cx="0" cy="0" rx="6" ry="10" fill="#f5c6d0" transform="rotate(40)" />
          <circle cx="0" cy="0" r="3" fill="#e8a0b0" />
        </g>

        {/* Flower 4 (smaller) */}
        <g transform="translate(550, 95)">
          <ellipse cx="0" cy="0" rx="4" ry="7" fill="#f5c6d0" transform="rotate(-15)" />
          <ellipse cx="0" cy="0" rx="4" ry="7" fill="#f8d0d8" transform="rotate(15)" />
          <circle cx="0" cy="0" r="2" fill="#e8a0b0" />
        </g>

        {/* Flower 5 (smaller) */}
        <g transform="translate(40, 90)">
          <ellipse cx="0" cy="0" rx="4" ry="7" fill="#f5c6d0" transform="rotate(-15)" />
          <ellipse cx="0" cy="0" rx="4" ry="7" fill="#f8d0d8" transform="rotate(15)" />
          <circle cx="0" cy="0" r="2" fill="#e8a0b0" />
        </g>
      </svg>
    </div>
  )
}

export default LotusDecoration
