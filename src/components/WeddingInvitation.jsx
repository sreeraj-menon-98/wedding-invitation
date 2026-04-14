import RSVPSection from './RSVPSection'
import './WeddingInvitation.css'

function WeddingInvitation({ textVisible, onVenueClick }) {
  return (
    <div className="invitation-card">
      <section className="hero-section">
        <img
          src="/couple-photo.png"
          alt="Neeraja & Sreeraj"
          className="hero-photo"
        />
        <div className="hero-overlay"></div>

        <div className={`hero-text ${textVisible ? 'show' : ''}`}>
          <p className="hero-invite-line anim-1">You're Cordially Invited</p>
          <p className="hero-invite-line anim-2">To The Wedding Of</p>

          <h1 className="hero-bride-name anim-3">Neeraja</h1>
          <div className="hero-ampersand anim-4">&</div>
          <h1 className="hero-groom-name anim-5">Sreeraj</h1>

          <div className="hero-divider anim-6">
            <svg viewBox="0 0 200 20" width="180" height="16">
              <line x1="0" y1="10" x2="80" y2="10" stroke="rgba(218,165,32,0.6)" strokeWidth="0.8" />
              <circle cx="90" cy="10" r="3" fill="none" stroke="rgba(218,165,32,0.6)" strokeWidth="0.8" />
              <circle cx="100" cy="10" r="2" fill="rgba(218,165,32,0.7)" />
              <circle cx="110" cy="10" r="3" fill="none" stroke="rgba(218,165,32,0.6)" strokeWidth="0.8" />
              <line x1="120" y1="10" x2="200" y2="10" stroke="rgba(218,165,32,0.6)" strokeWidth="0.8" />
            </svg>
          </div>

          <div className="hero-details anim-7">
            <p>10:30 AM</p>
            <p>Saturday, 9th May, 2026</p>
          </div>

          <div className="hero-venue anim-8" onClick={onVenueClick} role="button" tabIndex={0}>
            <p>Trinita Casa, North, Edappally</p>
            <span className="hero-venue-hint">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Tap for directions
            </span>
          </div>

          <div className="hero-rsvp anim-9">
            <RSVPSection />
          </div>
        </div>
      </section>
    </div>
  )
}

export default WeddingInvitation
