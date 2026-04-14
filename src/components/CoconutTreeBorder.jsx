import './CoconutTreeBorder.css'

function CoconutTreeBorder({ side }) {
  const isLeft = side === 'left'

  return (
    <div className={`coconut-border coconut-${side}`}>
      <svg
        viewBox="0 0 80 500"
        className="coconut-tree-svg"
        style={{ transform: isLeft ? 'scaleX(1)' : 'scaleX(-1)' }}
      >
        <defs>
          <linearGradient id={`trunk-${side}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B7355" />
            <stop offset="50%" stopColor="#6B5B45" />
            <stop offset="100%" stopColor="#5a4a35" />
          </linearGradient>
          <linearGradient id={`leaf-${side}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2d5a1e" />
            <stop offset="100%" stopColor="#1a4010" />
          </linearGradient>
          <linearGradient id={`leafLight-${side}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3d7a2e" />
            <stop offset="100%" stopColor="#2d5a1e" />
          </linearGradient>
        </defs>

        {/* Tree trunk - curved */}
        <path
          d="M45 500 Q42 400 44 350 Q46 280 40 220 Q36 180 38 140"
          stroke={`url(#trunk-${side})`}
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
        />
        {/* Trunk rings */}
        <path d="M37 460 Q45 458 49 460" stroke="#5a4a35" strokeWidth="0.8" fill="none" opacity="0.5" />
        <path d="M38 430 Q45 428 48 430" stroke="#5a4a35" strokeWidth="0.8" fill="none" opacity="0.5" />
        <path d="M39 400 Q44 398 47 400" stroke="#5a4a35" strokeWidth="0.8" fill="none" opacity="0.5" />
        <path d="M40 370 Q44 368 46 370" stroke="#5a4a35" strokeWidth="0.8" fill="none" opacity="0.5" />
        <path d="M40 340 Q44 338 46 340" stroke="#5a4a35" strokeWidth="0.8" fill="none" opacity="0.5" />
        <path d="M39 300 Q43 298 46 300" stroke="#5a4a35" strokeWidth="0.8" fill="none" opacity="0.5" />
        <path d="M38 260 Q42 258 45 260" stroke="#5a4a35" strokeWidth="0.8" fill="none" opacity="0.5" />

        {/* Coconuts */}
        <circle cx="38" cy="148" r="5" fill="#6B4226" />
        <circle cx="44" cy="145" r="5" fill="#5a3820" />
        <circle cx="35" cy="142" r="4.5" fill="#6B4226" />

        {/* Palm leaves - drooping fronds */}
        {/* Right-drooping leaves */}
        <path
          d="M38 138 Q55 110 75 95"
          stroke={`url(#leaf-${side})`}
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M38 138 Q58 105 78 80"
          stroke={`url(#leafLight-${side})`}
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M38 138 Q62 118 80 120"
          stroke={`url(#leaf-${side})`}
          strokeWidth="2"
          fill="none"
        />

        {/* Left-drooping leaves */}
        <path
          d="M38 138 Q20 110 5 100"
          stroke={`url(#leaf-${side})`}
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M38 138 Q15 105 -5 85"
          stroke={`url(#leafLight-${side})`}
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M38 138 Q12 120 -2 130"
          stroke={`url(#leaf-${side})`}
          strokeWidth="2"
          fill="none"
        />

        {/* Upward leaves */}
        <path
          d="M38 138 Q42 100 60 60"
          stroke={`url(#leafLight-${side})`}
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M38 138 Q30 95 15 55"
          stroke={`url(#leaf-${side})`}
          strokeWidth="2"
          fill="none"
        />

        {/* Leaf blades (feathered look) */}
        {/* Right frond leaflets */}
        <path d="M50 120 L58 112 L52 118" fill={`url(#leaf-${side})`} opacity="0.7" />
        <path d="M55 112 L65 102 L58 110" fill={`url(#leaf-${side})`} opacity="0.7" />
        <path d="M62 105 L72 96 L65 103" fill={`url(#leaf-${side})`} opacity="0.6" />
        <path d="M52 108 L62 96 L55 105" fill={`url(#leafLight-${side})`} opacity="0.7" />
        <path d="M60 98 L70 85 L63 95" fill={`url(#leafLight-${side})`} opacity="0.6" />

        {/* Left frond leaflets */}
        <path d="M28 118 L18 112 L26 116" fill={`url(#leaf-${side})`} opacity="0.7" />
        <path d="M22 110 L12 104 L20 108" fill={`url(#leaf-${side})`} opacity="0.7" />
        <path d="M16 104 L6 98 L14 102" fill={`url(#leaf-${side})`} opacity="0.6" />
        <path d="M24 108 L14 98 L22 106" fill={`url(#leafLight-${side})`} opacity="0.7" />

        {/* Upper frond leaflets */}
        <path d="M42 110 L50 95 L44 108" fill={`url(#leafLight-${side})`} opacity="0.6" />
        <path d="M44 100 L55 80 L46 96" fill={`url(#leafLight-${side})`} opacity="0.5" />
        <path d="M34 108 L24 92 L32 105" fill={`url(#leaf-${side})`} opacity="0.6" />
        <path d="M32 98 L20 78 L30 95" fill={`url(#leaf-${side})`} opacity="0.5" />
      </svg>
    </div>
  )
}

export default CoconutTreeBorder
