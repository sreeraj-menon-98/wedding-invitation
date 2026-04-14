import './EventCard.css'

function EventCard({ event, onVenueClick }) {
  return (
    <div className="event-card">
      <h3 className="event-name">{event.name}</h3>
      <p className="event-datetime">
        {event.time} &middot; {event.date}
      </p>
      <p className="event-venue" onClick={onVenueClick} role="button" tabIndex={0}>
        {event.venue}
        <svg className="event-pin" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      </p>
    </div>
  )
}

export default EventCard
