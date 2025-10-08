<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# Virtual Community Space - Copilot Instructions

This is a full-stack web application for exploring music events by location, built with React frontend and Express.js backend connected to PostgreSQL database.

## Project Structure
- `server/` - Express.js backend API
- `client/` - React frontend application
- Database: PostgreSQL with locations and events tables

## Key Technologies
- Frontend: React, React Router, Vite
- Backend: Node.js, Express.js, PostgreSQL
- Database: pg (node-postgres) for database connection

## API Endpoints
- GET `/api/locations` - Get all locations with event counts
- GET `/api/locations/:id` - Get specific location details
- GET `/api/events` - Get all events with location info
- GET `/api/events/location/:locationId` - Get events for specific location
- GET `/api/events/:id` - Get specific event details

## Database Schema
### Locations Table
- id (SERIAL PRIMARY KEY)
- name, description, image_url, address, capacity
- created_at timestamp

### Events Table  
- id (SERIAL PRIMARY KEY)
- title, description, date, location_id (foreign key)
- image_url, price, genre, artist, duration_minutes
- created_at timestamp

## Key Features
- Interactive location selection with visual interface
- Location detail pages with unique URLs
- Event listing and filtering by location
- Countdown timers for upcoming events
- Responsive design with modern UI
- Sort and filter functionality for events

## Development Guidelines
- Use modern React hooks (useState, useEffect)
- Follow REST API conventions
- Implement proper error handling
- Use async/await for API calls
- Maintain responsive design principles
- Include proper loading states and error messages
