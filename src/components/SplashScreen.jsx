import './SplashScreen.css'

function SplashScreen({ done }) {
  return (
    <div className={`splash-screen ${done ? 'splash-done' : ''}`}>
      <div className="splash-photo-wrapper">
        <img
          src="/couple-photo.png"
          alt="Neeraja & Sreeraj"
          className="splash-photo"
        />
        <div className="splash-overlay"></div>
        <div className="splash-text">
          <p className="splash-save-date">Save the Date</p>
          <h1 className="splash-names">Neeraja & Sreeraj</h1>
          <p className="splash-date">9th May, 2026</p>
        </div>
      </div>
    </div>
  )
}

export default SplashScreen
