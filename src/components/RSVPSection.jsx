import { useState, useEffect, useCallback, useRef } from 'react'
import confetti from 'canvas-confetti'
import './RSVPSection.css'

const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID || ''
const GOOGLE_SHEET_WEBAPP_URL = import.meta.env.VITE_GOOGLE_SHEET_WEBAPP_URL || ''

function fireConfetti() {
  const duration = 3000
  const end = Date.now() + duration

  const colors = ['#daa520', '#f0d060', '#fff', '#c9a84c', '#ff6b6b', '#4ecdc4']

  function frame() {
    confetti({
      particleCount: 3,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 0.7 },
      colors,
    })
    confetti({
      particleCount: 3,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 0.7 },
      colors,
    })

    if (Date.now() < end) {
      requestAnimationFrame(frame)
    }
  }

  // Big initial burst
  confetti({
    particleCount: 100,
    spread: 100,
    origin: { y: 0.6 },
    colors,
  })

  frame()
}

function RSVPSection({ events, guestId }) {
  const [user, setUser] = useState(null)
  const [selectedEvents, setSelectedEvents] = useState({})
  const [declining, setDeclining] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const audioRef = useRef(null)

  useEffect(() => {
    const initial = {}
    events.forEach((e) => { initial[e.id] = true })
    setSelectedEvents(initial)
  }, [events])

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

  // Cleanup audio on unmount
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [])

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

  function playAudio(src) {
    if (audioRef.current) {
      audioRef.current.pause()
    }
    const audio = new Audio(src)
    audio.volume = 0.5
    audioRef.current = audio
    audio.play().catch(() => {})
  }

  function toggleEvent(eventId) {
    setSelectedEvents((prev) => ({ ...prev, [eventId]: !prev[eventId] }))
  }

  async function handleSubmit() {
    const attending = !declining
    const confirmedEvents = attending
      ? events.filter((e) => selectedEvents[e.id]).map((e) => e.name)
      : []

    if (attending && confirmedEvents.length === 0) {
      setError('Please select at least one event, or decline')
      return
    }

    setLoading(true)
    setError('')

    const data = {
      name: user.name,
      email: user.email,
      guestGroup: guestId || 'direct',
      attending: attending ? 'Yes' : 'No',
      sangeet: confirmedEvents.includes('Sangeet') ? 'Yes' : 'No',
      wedding: confirmedEvents.includes('Wedding') ? 'Yes' : 'No',
      reception: confirmedEvents.includes('Reception') ? 'Yes' : 'No',
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

      if (attending) {
        fireConfetti()
        playAudio('/confirm-bgm.mp3')
      } else {
        playAudio('/decline-bgm.mp3')
      }
    } catch {
      setError('Failed to submit. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  function handleSignOut() {
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current = null
    }
    setUser(null)
    setDeclining(false)
    setSubmitted(false)
    setError('')
    const initial = {}
    events.forEach((e) => { initial[e.id] = true })
    setSelectedEvents(initial)
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

  const confirmedCount = events.filter((e) => selectedEvents[e.id]).length

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
            {!declining ? (
              <>
                <div className="check-icon">&#10003;</div>
                <h3>Thank you, {user.name.split(' ')[0]}!</h3>
                <p>
                  We're excited to see you at {confirmedCount} event{confirmedCount > 1 ? 's' : ''}!
                </p>
              </>
            ) : (
              <>
                <img src="/sad-duck.png" alt="Sad duck" className="sad-duck" />
                <h3>We'll miss you, {user.name.split(' ')[0]}!</h3>
                <p>Thank you for letting us know.</p>
              </>
            )}
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

            {!declining ? (
              <>
                <p className="event-select-label">Select events you'll attend</p>
                <div className="event-checkboxes">
                  {events.map((event) => (
                    <label key={event.id} className="event-checkbox">
                      <input
                        type="checkbox"
                        checked={selectedEvents[event.id] || false}
                        onChange={() => toggleEvent(event.id)}
                      />
                      <span className="checkbox-custom"></span>
                      <span className="checkbox-text">
                        <span className="checkbox-event-name">{event.name}</span>
                        <span className="checkbox-event-date">{event.date}</span>
                      </span>
                    </label>
                  ))}
                </div>
              </>
            ) : (
              <p className="decline-message">
                We understand. Thank you for letting us know.
              </p>
            )}

            {error && <p className="error-msg">{error}</p>}

            <button
              className="submit-btn"
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? 'Submitting...' : declining ? 'Send Regrets' : 'Confirm Attendance'}
            </button>

            <button
              className="decline-toggle"
              onClick={() => setDeclining(!declining)}
            >
              {declining ? 'Actually, I can make it!' : 'Regretfully Decline'}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default RSVPSection
