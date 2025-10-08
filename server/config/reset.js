import { pool } from './database.js'

const createTables = async () => {
  try {
    // Create locations table
    const locationsTableQuery = `
      DROP TABLE IF EXISTS events;
      DROP TABLE IF EXISTS locations;
      
      CREATE TABLE IF NOT EXISTS locations (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        description TEXT,
        image_url VARCHAR(500),
        address VARCHAR(500),
        capacity INTEGER,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `

    // Create events table
    const eventsTableQuery = `
      CREATE TABLE IF NOT EXISTS events (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT,
        date TIMESTAMP NOT NULL,
        location_id INTEGER REFERENCES locations(id) ON DELETE CASCADE,
        image_url VARCHAR(500),
        price DECIMAL(10, 2),
        genre VARCHAR(100),
        artist VARCHAR(255),
        duration_minutes INTEGER,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `

    await pool.query(locationsTableQuery)
    await pool.query(eventsTableQuery)

    // Insert sample locations
    const insertLocations = `
      INSERT INTO locations (name, description, image_url, address, capacity) VALUES
      ('The Downtown Arena', 'Premier concert venue in the heart of the city', 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500', '123 Main St, Downtown', 15000),
      ('Riverside Jazz Club', 'Intimate jazz venue by the waterfront', 'https://images.unsplash.com/photo-1514533212735-5df27d430bf8?w=500', '456 River Ave, Waterfront District', 300),
      ('Mountain View Amphitheater', 'Outdoor venue with stunning mountain backdrop', 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=500', '789 Mountain Rd, Hills District', 8000),
      ('Underground Basement', 'Raw underground venue for alternative music', 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=500', '321 Underground St, Arts Quarter', 150);
    `

    await pool.query(insertLocations)

    // Insert sample events
    const insertEvents = `
      INSERT INTO events (title, description, date, location_id, image_url, price, genre, artist, duration_minutes) VALUES
      ('Rock Festival 2025', 'Annual rock festival featuring top artists', '2025-07-15 19:00:00', 1, 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=500', 89.99, 'Rock', 'Multiple Artists', 360),
      ('Classical Symphony Night', 'Evening of classical masterpieces', '2025-03-20 20:00:00', 1, 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500', 75.00, 'Classical', 'City Symphony Orchestra', 120),
      ('Jazz Legends Tribute', 'Tribute to the greatest jazz musicians', '2025-02-14 21:00:00', 2, 'https://images.unsplash.com/photo-1514533212735-5df27d430bf8?w=500', 45.00, 'Jazz', 'The Jazz Collective', 150),
      ('Smooth Jazz Sunday', 'Relaxing Sunday evening jazz session', '2025-01-26 18:00:00', 2, 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500', 35.00, 'Jazz', 'Sarah Miles Quartet', 90),
      ('Summer Concert Series', 'Outdoor concert under the stars', '2025-06-10 20:30:00', 3, 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=500', 55.00, 'Pop', 'The Mountain Echoes', 180),
      ('Folk Music Festival', 'Celebrating traditional and modern folk', '2025-05-18 17:00:00', 3, 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=500', 40.00, 'Folk', 'Various Folk Artists', 240),
      ('Indie Rock Showcase', 'Up-and-coming indie rock bands', '2025-01-30 22:00:00', 4, 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=500', 25.00, 'Indie Rock', 'The Basement Collective', 120),
      ('Electronic Underground', 'Deep electronic music experience', '2025-02-08 23:00:00', 4, 'https://images.unsplash.com/photo-1514533212735-5df27d430bf8?w=500', 30.00, 'Electronic', 'DJ Voltage', 180),
      ('Acoustic Nights', 'Intimate acoustic performances', '2025-11-15 19:30:00', 4, 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500', 20.00, 'Acoustic', 'Local Musicians', 90),
      ('Holiday Gala Concert', 'Special holiday celebration concert', '2024-12-20 19:00:00', 1, 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=500', 95.00, 'Various', 'Holiday Orchestra', 150);
    `

    await pool.query(insertEvents)

    console.log('✅ Tables created and sample data inserted successfully!')
  } catch (err) {
    console.error('❌ Error creating tables:', err)
  } finally {
    pool.end()
  }
}

createTables()
