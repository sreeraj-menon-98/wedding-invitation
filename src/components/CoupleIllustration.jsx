import './CoupleIllustration.css'

function CoupleIllustration() {
  return (
    <div className="couple-container">
      <div className="couple-walk-animation">
        {/* Bride */}
        <svg className="bride" viewBox="0 0 120 280" width="120" height="280">
          {/* Hair */}
          <ellipse cx="60" cy="35" rx="22" ry="26" fill="#1a0e0a" />
          <circle cx="42" cy="28" r="4" fill="#1a0e0a" />
          {/* Hair bun with flowers */}
          <circle cx="78" cy="30" r="12" fill="#1a0e0a" />
          <circle cx="82" cy="22" r="5" fill="#f5f0e0" />
          <circle cx="88" cy="28" r="4" fill="#f5f0e0" />
          <circle cx="84" cy="34" r="3.5" fill="#f5f0e0" />
          <circle cx="78" cy="18" r="3" fill="#f5f0e0" />

          {/* Face */}
          <ellipse cx="58" cy="40" rx="17" ry="20" fill="#d4a574" />

          {/* Eyes */}
          <ellipse cx="52" cy="38" rx="2.5" ry="2" fill="#1a0e0a" />
          <ellipse cx="64" cy="38" rx="2.5" ry="2" fill="#1a0e0a" />

          {/* Smile */}
          <path d="M53 46 Q58 51 63 46" stroke="#8b4513" strokeWidth="1.5" fill="none" />

          {/* Bindi */}
          <circle cx="58" cy="32" r="2" fill="#cc0000" />

          {/* Earrings */}
          <ellipse cx="40" cy="48" rx="3" ry="5" fill="#daa520" />
          <ellipse cx="76" cy="48" rx="3" ry="5" fill="#daa520" />

          {/* Necklace - layered */}
          <path d="M42 60 Q58 72 74 60" stroke="#daa520" strokeWidth="3" fill="none" />
          <path d="M44 64 Q58 78 72 64" stroke="#daa520" strokeWidth="2.5" fill="none" />
          <path d="M46 68 Q58 82 70 68" stroke="#daa520" strokeWidth="2" fill="none" />
          {/* Necklace pendant */}
          <circle cx="58" cy="76" r="4" fill="#daa520" />

          {/* Body / Blouse */}
          <path d="M40 58 L35 90 L81 90 L76 58" fill="#c0392b" />

          {/* Arms */}
          <path d="M35 62 L20 100 L25 102 L38 75" fill="#d4a574" />
          {/* Right arm reaching to hold hands */}
          <path d="M76 62 L95 95 L100 92 L80 65" fill="#d4a574" />
          {/* Bangles */}
          <rect x="18" y="95" width="10" height="4" rx="2" fill="#daa520" />
          <rect x="18" y="100" width="10" height="4" rx="2" fill="#cc0000" />
          <rect x="93" y="88" width="10" height="4" rx="2" fill="#daa520" />
          <rect x="93" y="93" width="10" height="4" rx="2" fill="#cc0000" />

          {/* Hand */}
          <ellipse cx="22" cy="108" rx="5" ry="4" fill="#d4a574" />
          {/* Right hand (holding) */}
          <ellipse cx="103" cy="96" rx="5" ry="4" fill="#d4a574" />

          {/* Saree body */}
          <path d="M32 90 L28 240 L88 240 L84 90" fill="#c0392b" />

          {/* Saree pallu (drape over shoulder) */}
          <path d="M40 70 L25 90 L20 180 L35 180 L42 90" fill="#e67e22" opacity="0.8" />

          {/* Saree border */}
          <rect x="28" y="230" width="60" height="10" fill="#daa520" opacity="0.7" />

          {/* Saree design lines */}
          <path d="M45 120 L45 230" stroke="#daa520" strokeWidth="0.5" opacity="0.4" />
          <path d="M55 120 L55 230" stroke="#daa520" strokeWidth="0.5" opacity="0.4" />
          <path d="M65 120 L65 230" stroke="#daa520" strokeWidth="0.5" opacity="0.4" />

          {/* Feet */}
          <ellipse cx="42" cy="248" rx="10" ry="5" fill="#d4a574" />
          <ellipse cx="72" cy="248" rx="10" ry="5" fill="#d4a574" />

          {/* Left leg animation */}
          <g className="bride-left-leg">
            <path d="M38 240 L32 258 L50 258 L44 240" fill="#c0392b" />
          </g>
          <g className="bride-right-leg">
            <path d="M68 240 L62 258 L80 258 L74 240" fill="#c0392b" />
          </g>
        </svg>

        {/* Groom */}
        <svg className="groom" viewBox="0 0 120 280" width="120" height="280">
          {/* Hair */}
          <ellipse cx="60" cy="30" rx="20" ry="22" fill="#1a0e0a" />

          {/* Face */}
          <ellipse cx="60" cy="38" rx="17" ry="20" fill="#c9956b" />

          {/* Eyes */}
          <ellipse cx="53" cy="36" rx="2.5" ry="2" fill="#1a0e0a" />
          <ellipse cx="67" cy="36" rx="2.5" ry="2" fill="#1a0e0a" />

          {/* Eyebrows */}
          <path d="M49 32 Q53 30 57 32" stroke="#1a0e0a" strokeWidth="1.5" fill="none" />
          <path d="M63 32 Q67 30 71 32" stroke="#1a0e0a" strokeWidth="1.5" fill="none" />

          {/* Smile */}
          <path d="M54 44 Q60 49 66 44" stroke="#8b4513" strokeWidth="1.5" fill="none" />

          {/* Beard shadow */}
          <path d="M44 42 Q60 58 76 42" fill="#3d2b1f" opacity="0.3" />

          {/* Shirt (cream/off-white) */}
          <path d="M38 56 L32 160 L88 160 L82 56" fill="#f5e6c8" />

          {/* Shirt collar */}
          <path d="M48 56 L58 75 L68 56" fill="#ede0c8" stroke="#d4c4a0" strokeWidth="1" />

          {/* Shirt buttons */}
          <circle cx="60" cy="85" r="2" fill="#d4c4a0" />
          <circle cx="60" cy="100" r="2" fill="#d4c4a0" />
          <circle cx="60" cy="115" r="2" fill="#d4c4a0" />

          {/* Left arm */}
          <path d="M38 60 L22 110 L18 140 L24 142 L30 115 L40 75" fill="#f5e6c8" />
          {/* Left hand reaching to hold */}
          <ellipse cx="20" cy="145" rx="5" ry="6" fill="#c9956b" />

          {/* Right arm */}
          <path d="M82 60 L96 100 L100 95 L85 68" fill="#f5e6c8" />
          <ellipse cx="100" cy="100" rx="5" ry="5" fill="#c9956b" />

          {/* Watch */}
          <rect x="94" y="90" width="8" height="6" rx="2" fill="#333" />

          {/* Mundu (traditional white dhoti) */}
          <path d="M32 160 L28 260 L92 260 L88 160" fill="#f5f0e0" />

          {/* Mundu border */}
          <rect x="28" y="248" width="64" height="6" fill="#daa520" opacity="0.5" />

          {/* Mundu fold line */}
          <path d="M60 160 L60 255" stroke="#e0d5c0" strokeWidth="1" />

          {/* Feet with sandals */}
          <rect x="34" y="258" width="20" height="6" rx="3" fill="#8b6914" />
          <rect x="66" y="258" width="20" height="6" rx="3" fill="#8b6914" />
          <path d="M44 258 L44 264" stroke="#6b4f10" strokeWidth="2" />
          <path d="M76 258 L76 264" stroke="#6b4f10" strokeWidth="2" />
        </svg>

        {/* Holding hands connection */}
        <svg className="holding-hands" viewBox="0 0 40 30" width="40" height="30">
          <ellipse cx="12" cy="15" rx="7" ry="5" fill="#d4a574" />
          <ellipse cx="26" cy="15" rx="7" ry="5" fill="#c9956b" />
          <ellipse cx="19" cy="14" rx="8" ry="6" fill="#d09e6c" opacity="0.7" />
        </svg>
      </div>

      {/* Shadow beneath couple */}
      <div className="couple-shadow"></div>
    </div>
  )
}

export default CoupleIllustration
