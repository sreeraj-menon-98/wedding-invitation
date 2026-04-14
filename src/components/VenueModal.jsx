import { QRCodeSVG } from 'qrcode.react'
import './VenueModal.css'

const VENUE_URL = 'https://maps.app.goo.gl/2D6dErMhmVpyqdEq9'

function VenueModal({ onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>

        <h2 className="modal-title">Trinita Casa</h2>
        <p className="modal-subtitle">North, Edappally</p>

        <div className="qr-container">
          <QRCodeSVG
            value={VENUE_URL}
            size={200}
            bgColor="#f5efe0"
            fgColor="#5c4a2a"
            level="M"
          />
        </div>

        <p className="modal-instruction">Scan QR code for directions</p>

        <a
          href={VENUE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="venue-link"
        >
          {VENUE_URL}
        </a>

        <a
          href={VENUE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="directions-btn"
        >
          Open in Google Maps
        </a>
      </div>
    </div>
  )
}

export default VenueModal
