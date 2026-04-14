import RSVPSection from './RSVPSection'
import EventCard from './EventCard'
import './WeddingInvitation.css'

function WeddingInvitation({ textVisible, events, guestId, onVenueClick }) {
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

          {/* Event cards */}
          <div className="events-list anim-7">
            {events.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                onVenueClick={() => onVenueClick(event)}
              />
            ))}
          </div>

          {/* RSVP */}
          <div className="hero-rsvp anim-8">
            <RSVPSection events={events} guestId={guestId} />
          </div>
        </div>
      </section>
    </div>
  )
}

export default WeddingInvitation
