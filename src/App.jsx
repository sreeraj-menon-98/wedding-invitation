import { useState, useEffect, useMemo } from 'react'
import WeddingInvitation from './components/WeddingInvitation'
import VenueModal from './components/VenueModal'
import { getGuestEvents } from './events'
import './App.css'

function App() {
  const [textVisible, setTextVisible] = useState(false)
  const [venueEvent, setVenueEvent] = useState(null)

  const guestId = useMemo(() => {
    const params = new URLSearchParams(window.location.search)
    return params.get('rsvp')
  }, [])

  const events = useMemo(() => getGuestEvents(guestId), [guestId])

  useEffect(() => {
    const timer = setTimeout(() => setTextVisible(true), 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="app">
      <WeddingInvitation
        textVisible={textVisible}
        events={events}
        guestId={guestId}
        onVenueClick={(event) => setVenueEvent(event)}
      />
      {venueEvent && (
        <VenueModal event={venueEvent} onClose={() => setVenueEvent(null)} />
      )}
    </div>
  )
}

export default App
