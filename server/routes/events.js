import express from 'express'
import { getAllEvents, getEventsByLocation, getEventById } from '../controllers/events.js'

const router = express.Router()

// GET /api/events - Get all events
router.get('/', getAllEvents)

// GET /api/events/location/:locationId - Get events by location ID
router.get('/location/:locationId', getEventsByLocation)

// GET /api/events/:id - Get event by ID
router.get('/:id', getEventById)

export default router
