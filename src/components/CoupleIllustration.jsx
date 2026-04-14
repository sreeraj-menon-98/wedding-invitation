import './CoupleIllustration.css'

function CoupleIllustration() {
  return (
    <div className="couple-container">
      <div className="couple-walk-animation">
        {/* Bride - Kerala traditional saree with gold jewelry */}
        <svg className="person bride-figure" viewBox="0 0 140 300" width="110" height="240">
          <defs>
            <linearGradient id="sareeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#c0392b" />
              <stop offset="100%" stopColor="#a93226" />
            </linearGradient>
            <linearGradient id="palluGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#e67e22" />
              <stop offset="100%" stopColor="#d4711e" />
            </linearGradient>
            <linearGradient id="goldJewelry" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f0d060" />
              <stop offset="50%" stopColor="#daa520" />
              <stop offset="100%" stopColor="#b8860b" />
            </linearGradient>
            <linearGradient id="skinBride" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#dbb08a" />
              <stop offset="100%" stopColor="#c9956b" />
            </linearGradient>
          </defs>

          {/* Hair */}
          <ellipse cx="68" cy="38" rx="24" ry="28" fill="#0d0806" />
          <ellipse cx="68" cy="36" rx="22" ry="25" fill="#1a0e0a" />
          {/* Hair bun with jasmine flowers */}
          <circle cx="90" cy="35" r="14" fill="#1a0e0a" />
          <circle cx="95" cy="24" r="5" fill="#faf5e4" />
          <circle cx="101" cy="30" r="4.5" fill="#faf5e4" />
          <circle cx="100" cy="38" r="4" fill="#faf5e4" />
          <circle cx="94" cy="44" r="4" fill="#faf5e4" />
          <circle cx="88" cy="20" r="3.5" fill="#faf5e4" />
          <circle cx="96" cy="18" r="3" fill="#f5eedc" />

          {/* Face */}
          <ellipse cx="66" cy="46" rx="18" ry="21" fill="url(#skinBride)" />

          {/* Eyes */}
          <ellipse cx="59" cy="43" rx="3" ry="2.2" fill="#1a0e0a" />
          <ellipse cx="73" cy="43" rx="3" ry="2.2" fill="#1a0e0a" />
          <circle cx="60" cy="42.5" r="0.8" fill="#fff" />
          <circle cx="74" cy="42.5" r="0.8" fill="#fff" />

          {/* Eyebrows */}
          <path d="M55 39 Q59 37 63 39" stroke="#1a0e0a" strokeWidth="1.2" fill="none" />
          <path d="M69 39 Q73 37 77 39" stroke="#1a0e0a" strokeWidth="1.2" fill="none" />

          {/* Nose */}
          <path d="M66 46 Q68 49 66 50" stroke="#b8855e" strokeWidth="1" fill="none" />
          {/* Nose ring */}
          <circle cx="64" cy="49" r="1.5" fill="url(#goldJewelry)" />

          {/* Smile */}
          <path d="M60 53 Q66 58 72 53" stroke="#a0604a" strokeWidth="1.5" fill="none" />

          {/* Bindi */}
          <circle cx="66" cy="36" r="2.5" fill="#cc0000" />

          {/* Maang tikka */}
          <rect x="64" y="28" width="4" height="8" rx="2" fill="url(#goldJewelry)" />
          <circle cx="66" cy="28" r="3" fill="url(#goldJewelry)" />

          {/* Earrings - jhumkas */}
          <path d="M45 50 L42 58 L48 58 Z" fill="url(#goldJewelry)" />
          <circle cx="45" cy="60" r="3" fill="url(#goldJewelry)" />
          <path d="M87 50 L84 58 L90 58 Z" fill="url(#goldJewelry)" />
          <circle cx="87" cy="60" r="3" fill="url(#goldJewelry)" />

          {/* Necklaces - multi layered */}
          <path d="M48 66 Q66 76 84 66" stroke="url(#goldJewelry)" strokeWidth="4" fill="none" />
          <path d="M50 70 Q66 82 82 70" stroke="url(#goldJewelry)" strokeWidth="3" fill="none" />
          <path d="M52 74 Q66 88 80 74" stroke="url(#goldJewelry)" strokeWidth="2.5" fill="none" />
          {/* Center pendant */}
          <ellipse cx="66" cy="84" rx="5" ry="6" fill="url(#goldJewelry)" />
          <circle cx="66" cy="84" r="2.5" fill="#cc0000" />

          {/* Blouse */}
          <path d="M46 64 L40 100 L92 100 L86 64" fill="url(#sareeGrad)" />

          {/* Left arm */}
          <path d="M40 70 Q28 90 24 115" stroke="url(#skinBride)" strokeWidth="10" fill="none" strokeLinecap="round" />
          {/* Bangles left */}
          <rect x="18" y="106" width="12" height="4" rx="2" fill="url(#goldJewelry)" />
          <rect x="18" y="111" width="12" height="3" rx="1.5" fill="#cc0000" />
          <rect x="18" y="115" width="12" height="3" rx="1.5" fill="#228B22" />
          <rect x="18" y="119" width="12" height="4" rx="2" fill="url(#goldJewelry)" />
          {/* Left hand */}
          <ellipse cx="24" cy="128" rx="6" ry="5" fill="url(#skinBride)" />

          {/* Right arm (reaching toward groom) */}
          <path d="M86 70 Q100 90 108 105" stroke="url(#skinBride)" strokeWidth="10" fill="none" strokeLinecap="round" />
          {/* Bangles right */}
          <rect x="103" y="98" width="12" height="4" rx="2" fill="url(#goldJewelry)" />
          <rect x="103" y="103" width="12" height="3" rx="1.5" fill="#cc0000" />
          <rect x="103" y="107" width="12" height="4" rx="2" fill="url(#goldJewelry)" />
          {/* Right hand */}
          <ellipse cx="112" cy="112" rx="6" ry="5" fill="url(#skinBride)" />

          {/* Saree body */}
          <path d="M36 100 L30 265 L100 265 L94 100" fill="url(#sareeGrad)" />

          {/* Saree pallu drape */}
          <path d="M48 78 L30 100 L22 200 L38 200 L48 100" fill="url(#palluGrad)" opacity="0.85" />

          {/* Saree gold border at bottom */}
          <rect x="30" y="252" width="70" height="5" fill="url(#goldJewelry)" opacity="0.8" />
          <rect x="30" y="258" width="70" height="7" fill="url(#goldJewelry)" opacity="0.5" />

          {/* Saree pleats */}
          <path d="M55 140 L52 252" stroke="#a93226" strokeWidth="0.8" opacity="0.3" />
          <path d="M62 140 L60 252" stroke="#a93226" strokeWidth="0.8" opacity="0.3" />
          <path d="M69 140 L68 252" stroke="#a93226" strokeWidth="0.8" opacity="0.3" />
          <path d="M76 140 L76 252" stroke="#a93226" strokeWidth="0.8" opacity="0.3" />

          {/* Hip chain / waist belt */}
          <path d="M38 100 Q66 108 94 100" stroke="url(#goldJewelry)" strokeWidth="3" fill="none" />

          {/* Feet */}
          <ellipse cx="48" cy="272" rx="12" ry="5" fill="url(#skinBride)" />
          <ellipse cx="82" cy="272" rx="12" ry="5" fill="url(#skinBride)" />
          {/* Anklets */}
          <ellipse cx="48" cy="268" rx="8" ry="2" fill="none" stroke="url(#goldJewelry)" strokeWidth="1.5" />
          <ellipse cx="82" cy="268" rx="8" ry="2" fill="none" stroke="url(#goldJewelry)" strokeWidth="1.5" />
        </svg>

        {/* Groom - Kerala traditional mundu with shirt */}
        <svg className="person groom-figure" viewBox="0 0 140 300" width="110" height="240">
          <defs>
            <linearGradient id="shirtGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f5e6c8" />
              <stop offset="100%" stopColor="#ede0c0" />
            </linearGradient>
            <linearGradient id="munduGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#f8f3e8" />
              <stop offset="100%" stopColor="#efe8d8" />
            </linearGradient>
            <linearGradient id="skinGroom" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#d0a070" />
              <stop offset="100%" stopColor="#c08a5c" />
            </linearGradient>
          </defs>

          {/* Hair */}
          <ellipse cx="70" cy="32" rx="22" ry="24" fill="#0d0806" />
          <ellipse cx="70" cy="30" rx="20" ry="21" fill="#1a0e0a" />
          {/* Hair parting/style */}
          <path d="M52 22 Q70 18 88 25" stroke="#0d0806" strokeWidth="2" fill="none" />

          {/* Face */}
          <ellipse cx="70" cy="44" rx="19" ry="22" fill="url(#skinGroom)" />

          {/* Eyes */}
          <ellipse cx="62" cy="41" rx="3" ry="2.2" fill="#1a0e0a" />
          <ellipse cx="78" cy="41" rx="3" ry="2.2" fill="#1a0e0a" />
          <circle cx="63" cy="40.5" r="0.8" fill="#fff" />
          <circle cx="79" cy="40.5" r="0.8" fill="#fff" />

          {/* Eyebrows */}
          <path d="M57 37 Q62 34.5 67 37" stroke="#1a0e0a" strokeWidth="1.8" fill="none" />
          <path d="M73 37 Q78 34.5 83 37" stroke="#1a0e0a" strokeWidth="1.8" fill="none" />

          {/* Nose */}
          <path d="M70 44 Q72 48 70 49" stroke="#a07850" strokeWidth="1" fill="none" />

          {/* Smile */}
          <path d="M63 52 Q70 57 77 52" stroke="#8b5a3a" strokeWidth="1.5" fill="none" />

          {/* Stubble/beard shadow */}
          <path d="M52 48 Q70 66 88 48" fill="#2a1a10" opacity="0.15" />

          {/* Ears */}
          <ellipse cx="50" cy="44" rx="4" ry="6" fill="url(#skinGroom)" />
          <ellipse cx="90" cy="44" rx="4" ry="6" fill="url(#skinGroom)" />

          {/* Shirt body */}
          <path d="M46 64 L38 170 L102 170 L94 64" fill="url(#shirtGrad)" />

          {/* Shirt collar V-neck */}
          <path d="M56 64 L70 85 L84 64" fill="#f0dcc0" stroke="#d4c4a0" strokeWidth="1.2" />

          {/* Shirt fold lines */}
          <path d="M60 90 L58 165" stroke="#d8cbb0" strokeWidth="0.6" opacity="0.5" />
          <path d="M80 90 L82 165" stroke="#d8cbb0" strokeWidth="0.6" opacity="0.5" />

          {/* Shirt buttons */}
          <circle cx="70" cy="95" r="2" fill="#d4c4a0" />
          <circle cx="70" cy="112" r="2" fill="#d4c4a0" />
          <circle cx="70" cy="129" r="2" fill="#d4c4a0" />
          <circle cx="70" cy="146" r="2" fill="#d4c4a0" />

          {/* Left arm (reaching toward bride) */}
          <path d="M46 68 Q32 95 26 115" stroke="url(#shirtGrad)" strokeWidth="14" fill="none" strokeLinecap="round" />
          <path d="M46 68 Q32 95 26 115" stroke="#ede0c0" strokeWidth="12" fill="none" strokeLinecap="round" />
          {/* Left hand */}
          <ellipse cx="24" cy="120" rx="7" ry="6" fill="url(#skinGroom)" />

          {/* Right arm */}
          <path d="M94 68 Q108 95 112 110" stroke="url(#shirtGrad)" strokeWidth="14" fill="none" strokeLinecap="round" />
          <path d="M94 68 Q108 95 112 110" stroke="#ede0c0" strokeWidth="12" fill="none" strokeLinecap="round" />
          {/* Right hand */}
          <ellipse cx="114" cy="115" rx="7" ry="6" fill="url(#skinGroom)" />

          {/* Watch */}
          <rect x="108" y="104" width="9" height="7" rx="2" fill="#2c2c2c" />
          <rect x="110" y="105.5" width="5" height="4" rx="1" fill="#1a1a2e" />

          {/* Mundu */}
          <path d="M38 170 L32 275 L108 275 L102 170" fill="url(#munduGrad)" />

          {/* Mundu gold kasavu border */}
          <rect x="32" y="263" width="76" height="5" fill="url(#goldJewelry)" opacity="0.6" />
          <rect x="32" y="269" width="76" height="6" fill="url(#goldJewelry)" opacity="0.35" />

          {/* Mundu center fold */}
          <path d="M70 170 L70 268" stroke="#ddd5c5" strokeWidth="1.2" />
          <path d="M71 170 L71 268" stroke="#e8e0d0" strokeWidth="0.6" />

          {/* Mundu drape fold */}
          <path d="M70 180 Q85 200 80 268" stroke="#ddd5c5" strokeWidth="0.8" opacity="0.5" />

          {/* Feet with kolhapuri sandals */}
          <rect x="38" y="274" width="24" height="7" rx="3.5" fill="#8b6914" />
          <rect x="78" y="274" width="24" height="7" rx="3.5" fill="#8b6914" />
          <path d="M50 274 L50 281" stroke="#6b4f10" strokeWidth="2.5" />
          <path d="M90 274 L90 281" stroke="#6b4f10" strokeWidth="2.5" />
          <path d="M44 277 L50 274 L56 277" stroke="#7a5c12" strokeWidth="1" fill="none" />
          <path d="M84 277 L90 274 L96 277" stroke="#7a5c12" strokeWidth="1" fill="none" />
        </svg>
      </div>

      {/* Shadow */}
      <div className="couple-shadow"></div>
    </div>
  )
}

export default CoupleIllustration
