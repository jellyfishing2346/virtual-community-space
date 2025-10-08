import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import eventsRouter from './routes/events.js'
import locationsRouter from './routes/locations.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001

// Middleware
app.use((req, res, next) => {
  res.setHeader("Content-Security-Policy", "default-src 'self'; img-src 'self' data: https:;");
  next();
});
app.use(cors())
app.use(express.json())

// Routes
app.use('/api/events', eventsRouter)
app.use('/api/locations', locationsRouter)

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running!' })
})

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`)
})
