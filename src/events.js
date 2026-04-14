export const EVENTS = {
  sangeet: {
    id: 'sangeet',
    name: 'Sangeet',
    date: 'Thursday, 7th May, 2026',
    time: '6:00 PM',
    venue: 'Edassery Resorts',
    mapUrl: 'https://maps.app.goo.gl/Q3z3uFhKdJWanBND6',
  },
  wedding: {
    id: 'wedding',
    name: 'Wedding',
    date: 'Saturday, 9th May, 2026',
    time: '10:30 AM',
    venue: 'Trinita Casa, North, Edappally',
    mapUrl: 'https://maps.app.goo.gl/2D6dErMhmVpyqdEq9',
  },
  reception: {
    id: 'reception',
    name: 'Reception',
    date: 'Sunday, 10th May, 2026',
    time: '6:00 PM',
    venue: 'Soba Auditorium',
    mapUrl: 'https://maps.app.goo.gl/175vcsMHdfU7778F6',
  },
}

// Guest groups: map param to which events they're invited to
export const GUEST_GROUPS = {
  g1: ['sangeet', 'wedding', 'reception'], // All events
  g2: ['wedding', 'reception'],            // Wedding + Reception
  g3: ['wedding'],                         // Wedding only
  g4: ['sangeet', 'wedding'],              // Sangeet + Wedding
  g5: ['reception'],                       // Reception only
  g6: ['sangeet', 'reception'],            // Sangeet + Reception
}

export function getGuestEvents(guestId) {
  const group = GUEST_GROUPS[guestId]
  if (!group) return Object.values(EVENTS) // default: show all
  return group.map((id) => EVENTS[id])
}
