const API_BASE_URL = 'http://localhost:3001/api'

export const getAllEvents = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/events`)
    if (!response.ok) {
      throw new Error('Failed to fetch events')
    }
    return await response.json()
  } catch (error) {
    console.error('Error fetching events:', error)
    throw error
  }
}

export const getEventsByLocation = async (locationId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/events/location/${locationId}`)
    if (!response.ok) {
      throw new Error('Failed to fetch events for location')
    }
    return await response.json()
  } catch (error) {
    console.error('Error fetching events by location:', error)
    throw error
  }
}

export const getEventById = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/events/${id}`)
    if (!response.ok) {
      throw new Error('Failed to fetch event')
    }
    return await response.json()
  } catch (error) {
    console.error('Error fetching event:', error)
    throw error
  }
}
