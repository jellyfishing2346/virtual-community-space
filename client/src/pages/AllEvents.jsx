import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getAllEvents } from '../services/EventsAPI'
import { mockEvents } from '../services/MockData'

function AllEvents() {
  const [events, setEvents] = useState([])
  const [filteredEvents, setFilteredEvents] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedLocation, setSelectedLocation] = useState('all')
  const [sortBy, setSortBy] = useState('date')

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data = await getAllEvents()
        setEvents(data)
        setFilteredEvents(data)
      } catch (err) {
        // Fallback to mock data for demo
        console.log('Using mock data for demo')
        setEvents(mockEvents)
        setFilteredEvents(mockEvents)
      } finally {
        setLoading(false)
      }
    }

    fetchEvents()
  }, [])

  useEffect(() => {
    let filtered = [...events]

    // Filter by location
    if (selectedLocation !== 'all') {
      filtered = filtered.filter(event => event.location_name === selectedLocation)
    }

    // Sort events
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'date':
          return new Date(a.date) - new Date(b.date)
        case 'price':
          return parseFloat(a.price) - parseFloat(b.price)
        case 'title':
          return a.title.localeCompare(b.title)
        default:
          return 0
      }
    })

    setFilteredEvents(filtered)
  }, [events, selectedLocation, sortBy])

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const getTimeUntilEvent = (dateString) => {
    const eventDate = new Date(dateString)
    const now = new Date()
    const diff = eventDate - now

    if (diff < 0) {
      return { text: 'Event has passed', className: 'past' }
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24))
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    
    if (days > 0) {
      return { text: `${days} days, ${hours} hours remaining`, className: 'countdown' }
    } else if (hours > 0) {
      return { text: `${hours} hours remaining`, className: 'countdown' }
    } else {
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
      return { text: `${minutes} minutes remaining`, className: 'countdown' }
    }
  }

  const uniqueLocations = [...new Set(events.map(event => event.location_name))]

  if (loading) return <div className="loading">Loading all events...</div>
  if (error) return <div className="error">{error}</div>

  return (
    <div>
      <div className="header">
        <h1>🎵 All Events</h1>
        <p>Browse all upcoming and past music events</p>
        <Link to="/" className="nav-link">← Back to Venues</Link>
      </div>

      <div className="container">
        {/* Filters */}
        <div style={{ 
          background: 'rgba(255,255,255,0.9)', 
          padding: '1.5rem', 
          borderRadius: '15px', 
          marginBottom: '2rem',
          display: 'flex',
          gap: '2rem',
          alignItems: 'center',
          flexWrap: 'wrap'
        }}>
          <div>
            <label style={{ fontWeight: 'bold', marginRight: '0.5rem', color: 'black'}}>Filter by Location:</label>
            <select 
              value={selectedLocation} 
              onChange={(e) => setSelectedLocation(e.target.value)}
              style={{ padding: '0.5rem', borderRadius: '5px', border: '1px solid #ccc' }}
            >
              <option value="all">All Locations</option>
              {uniqueLocations.map(location => (
                <option key={location} value={location}>{location}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label style={{ fontWeight: 'bold', marginRight: '0.5rem', color: 'black'}}>Sort by:</label>
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              style={{ padding: '0.5rem', borderRadius: '5px', border: '1px solid #ccc' }}
            >
              <option value="date">Date</option>
              <option value="price">Price</option>
              <option value="title">Title</option>
            </select>
          </div>

          <div style={{ marginLeft: 'auto', fontWeight: 'bold', color: '#667eea' }}>
            Showing {filteredEvents.length} events
          </div>
        </div>

        {filteredEvents.length === 0 ? (
          <div style={{ textAlign: 'center', color: 'white', padding: '2rem' }}>
            No events found matching your criteria.
          </div>
        ) : (
          <div className="events-list">
            {filteredEvents.map((event) => {
              const timeInfo = getTimeUntilEvent(event.date)
              return (
                <div key={event.id} className="event-card">
                  <img 
                    src={event.image_url} 
                    alt={event.title}
                    className="event-image"
                  />
                  <div className="event-details">
                    <h3>{event.title}</h3>
                    <div className="event-meta">
                      <span>🎤 {event.artist}</span>
                      <span>🎵 {event.genre}</span>
                      <span>📍 {event.location_name}</span>
                      <span>⏱️ {event.duration_minutes} min</span>
                    </div>
                    <p className="event-description">{event.description}</p>
                    <p><strong>📅 Date:</strong> {formatDate(event.date)}</p>
                    <p><strong>🏢 Venue:</strong> {event.location_name}</p>
                    <div className={`countdown ${timeInfo.className}`}>
                      ⏰ {timeInfo.text}
                    </div>
                    <div className="event-price">💰 ${event.price}</div>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}

export default AllEvents
