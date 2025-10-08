import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getLocationById } from '../services/LocationsAPI'
import { getEventsByLocation } from '../services/EventsAPI'
import { mockLocations, mockEvents } from '../services/MockData'

function LocationDetail() {
  const { id } = useParams()
  const [location, setLocation] = useState(null)
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [locationData, eventsData] = await Promise.all([
          getLocationById(id),
          getEventsByLocation(id)
        ])
        setLocation(locationData)
        setEvents(eventsData)
      } catch (err) {
        // Fallback to mock data for demo
        console.log('Using mock data for demo')
        const mockLocation = mockLocations.find(loc => loc.id === parseInt(id))
        const mockLocationEvents = mockEvents.filter(event => event.location_id === parseInt(id))
        if (mockLocation) {
          setLocation(mockLocation)
          setEvents(mockLocationEvents)
        } else {
          setError('Location not found')
        }
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [id])

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

  if (loading) return <div className="loading">Loading venue details...</div>
  if (error) return <div className="error">{error}</div>
  if (!location) return <div className="error">Location not found</div>

  return (
    <div>
      <div className="header">
        <h1>{location.name}</h1>
        <p>{location.description}</p>
        <div>
          <Link to="/" className="nav-link">← Back to Venues</Link>
          <Link to="/events" className="nav-link">View All Events</Link>
        </div>
      </div>

      <div className="container">
        <div className="location-details">
          <img 
            src={location.image_url} 
            alt={location.name}
            style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '15px', marginBottom: '2rem' }}
          />
          <div style={{ background: 'rgba(255,255,255,0.95)', padding: '1.5rem', borderRadius: '15px', marginBottom: '2rem' }}>
            <h3 style={{ margin: '0 0 1rem 0', color: '#222' }}>Venue Information</h3>
            <p style={{ color: '#333', fontSize: '1rem' }}><strong style={{ color: '#111' }}>📍 Address:</strong> {location.address}</p>
            <p style={{ color: '#333', fontSize: '1rem' }}><strong style={{ color: '#111' }}>👥 Capacity:</strong> {location.capacity?.toLocaleString()} people</p>
            <p style={{ color: '#333', fontSize: '1rem' }}><strong style={{ color: '#111' }}>🎤 Total Events:</strong> {location.event_count}</p>
          </div>
        </div>

        <h2 style={{ color: 'white', textAlign: 'center', marginBottom: '2rem' }}>
          🎵 Events at {location.name}
        </h2>

        {events.length === 0 ? (
          <div style={{ textAlign: 'center', color: 'white', padding: '2rem' }}>
            No events scheduled at this venue yet.
          </div>
        ) : (
          <div className="events-list">
            {events.map((event) => {
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
                      <span>⏱️ {event.duration_minutes} min</span>
                    </div>
                    <p className="event-description">{event.description}</p>
                    <p><strong>📅 Date:</strong> {formatDate(event.date)}</p>
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

export default LocationDetail
