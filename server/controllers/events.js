import { pool } from '../config/database.js'

export const getAllEvents = async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT e.*, l.name as location_name, l.address as location_address
      FROM events e
      JOIN locations l ON e.location_id = l.id
      ORDER BY e.date ASC
    `)
    res.json(result.rows)
  } catch (err) {
    console.error('Error fetching events:', err)
    res.status(500).json({ error: 'Failed to fetch events' })
  }
}

export const getEventsByLocation = async (req, res) => {
  try {
    const { locationId } = req.params
    const result = await pool.query(`
      SELECT e.*, l.name as location_name, l.address as location_address
      FROM events e
      JOIN locations l ON e.location_id = l.id
      WHERE e.location_id = $1
      ORDER BY e.date ASC
    `, [locationId])
    
    res.json(result.rows)
  } catch (err) {
    console.error('Error fetching events by location:', err)
    res.status(500).json({ error: 'Failed to fetch events for location' })
  }
}

export const getEventById = async (req, res) => {
  try {
    const { id } = req.params
    const result = await pool.query(`
      SELECT e.*, l.name as location_name, l.address as location_address
      FROM events e
      JOIN locations l ON e.location_id = l.id
      WHERE e.id = $1
    `, [id])
    
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Event not found' })
    }
    
    res.json(result.rows[0])
  } catch (err) {
    console.error('Error fetching event:', err)
    res.status(500).json({ error: 'Failed to fetch event' })
  }
}
