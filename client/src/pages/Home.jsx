import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getAllLocations } from '../services/LocationsAPI'
import { mockLocations } from '../services/MockData'

function Home() {
  const [locations, setLocations] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const data = await getAllLocations()
        setLocations(data)
      } catch (err) {
        // Fallback to mock data for demo
        console.log('Using mock data for demo')
        setLocations(mockLocations)
      } finally {
        setLoading(false)
      }
    }

    fetchLocations()
  }, [])

  if (loading) return <div className="loading">Loading amazing venues...</div>
  if (error) return <div className="error">{error}</div>

  return (
    <div>
      <div className="header">
        <h1>🎵 Virtual Community Space</h1>
        <p>Discover amazing music events at incredible venues</p>
        <Link to="/events" className="nav-link">View All Events</Link>
      </div>
      
      <div className="container">
        <div className="locations-grid">
          {locations.map((location) => (
            <Link 
              key={location.id} 
              to={`/location/${location.id}`} 
              className="location-card"
            >
              <img 
                src={location.image_url} 
                alt={location.name}
                className="location-image"
              />
              <div className="location-name">{location.name}</div>
              <div className="location-description">{location.description}</div>
              <div className="location-info">
                <span>📍 {location.address}</span>
                <span className="event-count">
                  {location.event_count} events
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
