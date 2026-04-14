import { useState, useEffect, useCallback } from 'react'
import './RSVPSection.css'

const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID || ''
const GOOGLE_SHEET_WEBAPP_URL = import.meta.env.VITE_GOOGLE_SHEET_WEBAPP_URL || ''

function RSVPSection() {
  const [user, setUser] = useState(null)
  const [attending, setAttending] = useState(null)
  const [guestCount, setGuestCount] = useState(1)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleCredentialResponse = useCallback((response) => {
    const payload = parseJwt(response.credential)
    setUser({
      name: payload.name,
      email: payload.email,
      picture: payload.picture,
    })
  }, [])

  useEffect(() => {
    if (!GOOGLE_CLIENT_ID) return

    const script = document.createElement('script')
    script.src = 'https://accounts.google.com/gsi/client'
    script.async = true
    script.defer = true
    script.onload = () => {
      window.google.accounts.id.initialize({
        client_id: GOOGLE_CLIENT_ID,
        callback: handleCredentialResponse,
      })
      window.google.accounts.id.renderButton(
        document.getElementById('google-signin-btn'),
        {
          theme: 'outline',
          size: 'large',
          text: 'signin_with',
          shape: 'pill',
          width: 280,
        }
      )
    }
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [handleCredentialResponse])

  function parseJwt(token) {
    const base64Url = token.split('.')[1]
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join('')
    )
    return JSON.parse(jsonPayload)
  }

  async function handleSubmit() {
    if (attending === null) {
      setError('Please select whether you are attending')
      return
    }

    setLoading(true)
    setError('')

    const data = {
      name: user.name,
      email: user.email,
      attending: attending ? 'Yes' : 'No',
      guestCount: attending ? guestCount : 0,
      timestamp: new Date().toISOString(),
    }

    try {
      const formData = new URLSearchParams()
      formData.append('data', JSON.stringify(data))
      await fetch(GOOGLE_SHEET_WEBAPP_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: formData,
      })
      setSubmitted(true)
    } catch {
      setError('Failed to submit. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  function handleSignOut() {
    setUser(null)
    setAttending(null)
    setSubmitted(false)
    setError('')
  }

  if (!GOOGLE_CLIENT_ID) {
    return (
      <div className="rsvp-section">
        <h2 className="rsvp-title">RSVP</h2>
        <p className="rsvp-setup-msg">
          Google Sign-In not configured. Set VITE_GOOGLE_CLIENT_ID in .env
        </p>
      </div>
    )
  }

  return (
    <div className="rsvp-section">
      <div className="rsvp-container">
        <h2 className="rsvp-title">RSVP</h2>
        <p className="rsvp-subtitle">We would love to know if you can make it</p>

        {!user ? (
          <div className="signin-area">
            <p className="signin-prompt">Please sign in to respond</p>
            <div id="google-signin-btn"></div>
          </div>
        ) : submitted ? (
          <div className="submitted-message">
            <div className="check-icon">&#10003;</div>
            <h3>Thank you, {user.name.split(' ')[0]}!</h3>
            <p>
              {attending
                ? `We're excited to see you there with ${guestCount} guest${guestCount > 1 ? 's' : ''}!`
                : "We'll miss you! Thank you for letting us know."}
            </p>
          </div>
        ) : (
          <div className="rsvp-form">
            <div className="user-info">
              <img
                src={user.picture}
                alt={user.name}
                className="user-avatar"
                referrerPolicy="no-referrer"
              />
              <div>
                <p className="user-name">{user.name}</p>
                <p className="user-email">{user.email}</p>
              </div>
              <button className="signout-btn" onClick={handleSignOut}>
                Sign out
              </button>
            </div>

            <div className="attendance-toggle">
              <button
                className={`toggle-btn ${attending === true ? 'active-yes' : ''}`}
                onClick={() => setAttending(true)}
              >
                Joyfully Accept
              </button>
              <button
                className={`toggle-btn ${attending === false ? 'active-no' : ''}`}
                onClick={() => setAttending(false)}
              >
                Regretfully Decline
              </button>
            </div>

            {attending && (
              <div className="guest-count">
                <label className="guest-label">Number of Guests</label>
                <div className="counter-controls">
                  <button
                    className="counter-btn"
                    onClick={() => setGuestCount(Math.max(1, guestCount - 1))}
                  >
                    -
                  </button>
                  <span className="counter-value">{guestCount}</span>
                  <button
                    className="counter-btn"
                    onClick={() => setGuestCount(Math.min(10, guestCount + 1))}
                  >
                    +
                  </button>
                </div>
              </div>
            )}

            {error && <p className="error-msg">{error}</p>}

            <button
              className="submit-btn"
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? 'Submitting...' : 'Send RSVP'}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default RSVPSection
