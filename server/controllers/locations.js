import { pool } from '../config/database.js'

export const getAllLocations = async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT l.*, COUNT(e.id) as event_count 
      FROM locations l 
      LEFT JOIN events e ON l.id = e.location_id 
      GROUP BY l.id 
      ORDER BY l.id
    `)
    res.json(result.rows)
  } catch (err) {
    console.error('Error fetching locations:', err)
    res.status(500).json({ error: 'Failed to fetch locations' })
  }
}

export const getLocationById = async (req, res) => {
  try {
    const { id } = req.params
    const result = await pool.query(`
      SELECT l.*, COUNT(e.id) as event_count 
      FROM locations l 
      LEFT JOIN events e ON l.id = e.location_id 
      WHERE l.id = $1 
      GROUP BY l.id
    `, [id])
    
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Location not found' })
    }
    
    res.json(result.rows[0])
  } catch (err) {
    console.error('Error fetching location:', err)
    res.status(500).json({ error: 'Failed to fetch location' })
  }
}
