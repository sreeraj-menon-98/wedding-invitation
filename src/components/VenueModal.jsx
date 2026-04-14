import { QRCodeSVG } from 'qrcode.react'
import './VenueModal.css'

function VenueModal({ event, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>

        <h2 className="modal-title">{event.venue}</h2>
        <p className="modal-subtitle">{event.name} &middot; {event.date}</p>

        <div className="qr-container">
          <QRCodeSVG
            value={event.mapUrl}
            size={180}
            bgColor="#f5efe0"
            fgColor="#5c4a2a"
            level="M"
          />
        </div>

        <p className="modal-instruction">Scan QR code for directions</p>

        <a
          href={event.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="venue-link"
        >
          {event.mapUrl}
        </a>

        <a
          href={event.mapUrl}
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
