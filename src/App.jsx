import { useState, useEffect } from 'react'
import WeddingInvitation from './components/WeddingInvitation'
import VenueModal from './components/VenueModal'
import './App.css'

function App() {
  const [textVisible, setTextVisible] = useState(false)
  const [showVenueModal, setShowVenueModal] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setTextVisible(true), 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="app">
      <WeddingInvitation
        textVisible={textVisible}
        onVenueClick={() => setShowVenueModal(true)}
      />
      {showVenueModal && (
        <VenueModal onClose={() => setShowVenueModal(false)} />
      )}
    </div>
  )
}

export default App
