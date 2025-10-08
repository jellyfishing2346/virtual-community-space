const API_BASE_URL = 'http://localhost:3001/api'

export const getAllLocations = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/locations`)
    if (!response.ok) {
      throw new Error('Failed to fetch locations')
    }
    return await response.json()
  } catch (error) {
    console.error('Error fetching locations:', error)
    throw error
  }
}

export const getLocationById = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/locations/${id}`)
    if (!response.ok) {
      throw new Error('Failed to fetch location')
    }
    return await response.json()
  } catch (error) {
    console.error('Error fetching location:', error)
    throw error
  }
}
