# 🎵 Virtual Community Space

A full-stack web application that allows users to explore music events by location. Users can browse venues, view detailed information about each location, and discover upcoming events with countdown timers.

## ✨ Features

### Required Features ✅
- [x] **React Frontend**: Web app built with React displaying data from API
- [x] **PostgreSQL Database**: Connected to database with structured events table
- [x] **Title Display**: Website includes clear title and branding
- [x] **Visual Location Interface**: Interactive grid of location cards (not just text links)
- [x] **Unique URLs**: Each location has detail page with unique URL (`/location/:id`)
- [x] **Event Display**: Location detail pages show all associated events from database

### Stretch Features ✅
- [x] **All Events Page**: Additional page showing all events with sorting and filtering
- [x] **Event Countdown**: Real-time countdown timers for upcoming events
- [x] **Past Event Formatting**: Different styling for expired events (crossed out, grayed)
- [x] **Sort & Filter**: Users can sort by date/price/title and filter by location

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- PostgreSQL database (Render or local)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd virtual-community-space
   ```

2. **Install dependencies**
   ```bash
   npm run install-deps
   ```

3. **Set up database**
   - Create a PostgreSQL database on Render (or use local PostgreSQL)
   - Copy your database connection details

4. **Configure environment variables**
   - Navigate to `server/.env`
   - Fill in your database credentials:
   ```env
   PGUSER="your_username"
   PGPASSWORD="your_password"
   PGHOST="your_host"
   PGPORT=5432
   PGDATABASE="your_database_name"
   ```

5. **Initialize database**
   ```bash
   cd server
   npm run reset-db
   ```

6. **Start the application**
   ```bash
   npm run dev
   ```

The app will run on:
- Frontend: http://localhost:5173
- Backend API: http://localhost:3001

## 🎯 How to Use

1. **Browse Venues**: Visit the homepage to see all available music venues
2. **Explore Locations**: Click on any venue card to view its details and events
3. **View All Events**: Use the "View All Events" link to see events from all venues
4. **Filter & Sort**: On the all events page, filter by location or sort by date/price/title
5. **Event Countdowns**: See real-time countdowns for upcoming events

## 🏗️ Project Structure

```
virtual-community-space/
├── client/                 # React frontend
│   ├── src/
│   │   ├── pages/         # Page components
│   │   ├── services/      # API service functions
│   │   └── App.jsx        # Main app with routing
├── server/                # Express.js backend
│   ├── config/           # Database configuration
│   ├── controllers/      # Route handlers
│   ├── routes/          # API routes
│   └── server.js        # Main server file
└── README.md
```

## 🛠️ API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/locations` | Get all locations with event counts |
| GET | `/api/locations/:id` | Get specific location details |
| GET | `/api/events` | Get all events with location info |
| GET | `/api/events/location/:locationId` | Get events for specific location |
| GET | `/api/events/:id` | Get specific event details |

## 💾 Database Schema

### Locations Table
- `id` - Primary key
- `name` - Venue name
- `description` - Venue description
- `image_url` - Venue image
- `address` - Venue address
- `capacity` - Maximum capacity

### Events Table
- `id` - Primary key
- `title` - Event title
- `description` - Event description
- `date` - Event date/time
- `location_id` - Foreign key to locations
- `image_url` - Event image
- `price` - Ticket price
- `genre` - Music genre
- `artist` - Performing artist
- `duration_minutes` - Event duration

## 🎨 Technologies Used

- **Frontend**: React, React Router, Vite
- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL
- **Styling**: CSS3 with modern gradients and animations
- **Development**: Concurrently for running both servers

## 🚀 Deployment

1. **Database**: Deploy PostgreSQL database on Render
2. **Backend**: Deploy Express.js server (Render/Heroku)
3. **Frontend**: Deploy React app (Netlify/Vercel)
4. **Environment**: Update API URLs for production

## 📱 Demo

![Virtual Community Space Demo](WEB103 Project 3 Submission.gif)

*Add your demo GIF here showing the application in action*

## 📸 Screenshots

Below are screenshots demonstrating all required and stretch features:

- **Homepage with Venue Cards**
  ![Homepage](screenshots/screenshot-06.png)
- **Location Detail Page**
  ![Location Detail](screenshots/screenshot-07.png)
- **All Events Page with Countdown Timer**
  ![All Events](screenshots/screenshot-08.png)
- **Event Countdown Example**
  ![Countdown](screenshots/screenshot-08.png)

---

## 🗂️ Project Diagram

```mermaid
graph TD;
  A[Client (React)] -- API Calls --> B[Server (Express.js)]
  B -- SQL Queries --> C[(PostgreSQL Database)]
  A -- User Interactions --> A
  B -- REST Endpoints --> B
  C -- Stores Events & Locations --> C
```

- **Client (React):** Handles UI, routing, and API calls
- **Server (Express.js):** Provides REST API, connects to database
- **Database (PostgreSQL):** Stores locations and events data

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License.

---

**Built with ❤️ for music lovers and event enthusiasts**
