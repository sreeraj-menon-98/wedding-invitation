import CoupleIllustration from './CoupleIllustration'
import LotusDecoration from './LotusDecoration'
import './WeddingInvitation.css'

function WeddingInvitation({ onVenueClick }) {
  return (
    <div className="invitation-card">
      {/* Background texture overlay */}
      <div className="texture-overlay"></div>

      {/* Gold border frame */}
      <div className="gold-frame">
        {/* Scalloped arch at top */}
        <div className="scalloped-arch">
          <svg viewBox="0 0 400 120" preserveAspectRatio="none" className="arch-svg">
            <defs>
              <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#c9a84c" />
                <stop offset="50%" stopColor="#daa520" />
                <stop offset="100%" stopColor="#b8860b" />
              </linearGradient>
            </defs>
            {/* Scallop arcs */}
            <path
              d="M0,120 L0,80 Q0,40 40,40 Q80,40 80,0 Q80,40 120,40 Q160,40 160,0 Q160,40 200,40 Q240,40 240,0 Q240,40 280,40 Q320,40 320,0 Q320,40 360,40 Q400,40 400,80 L400,120 Z"
              fill="none"
              stroke="url(#goldGrad)"
              strokeWidth="3"
            />
          </svg>
        </div>

        {/* Content area */}
        <div className="invitation-content">
          <CoupleIllustration />

          <h2 className="invite-text">
            You're Cordially Invited<br />To The Wedding Of
          </h2>

          <h1 className="bride-name">Neeraja</h1>

          <div className="ampersand">&</div>

          <h1 className="groom-name">Sreeraj</h1>

          <div className="details-row">
            <div className="date-info">
              <p className="detail-text">10:30 AM</p>
              <p className="detail-text">Saturday,</p>
              <p className="detail-text">9th May, 2026</p>
            </div>

            <div className="venue-info" onClick={onVenueClick}>
              <p className="detail-text">Trinita Casa,</p>
              <p className="detail-text">North,</p>
              <p className="detail-text">
                Edappally
                <span className="location-pin">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Lotus decoration at bottom */}
        <LotusDecoration />
      </div>
    </div>
  )
}

export default WeddingInvitation
