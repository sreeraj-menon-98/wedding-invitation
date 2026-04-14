import { useState } from 'react'
import WeddingInvitation from './components/WeddingInvitation'
import VenueModal from './components/VenueModal'
import RSVPSection from './components/RSVPSection'
import './App.css'

function App() {
  const [showVenueModal, setShowVenueModal] = useState(false)

  return (
    <div className="app">
      <WeddingInvitation onVenueClick={() => setShowVenueModal(true)} />
      <RSVPSection />
      {showVenueModal && (
        <VenueModal onClose={() => setShowVenueModal(false)} />
      )}
    </div>
  )
}

export default App
