// Mock data for testing without database
export const mockLocations = [
  {
    id: 1,
    name: "The Downtown Arena",
    description: "Premier concert venue in the heart of the city",
    image_url: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500",
    address: "123 Main St, Downtown",
    capacity: 15000,
    event_count: 3
  },
  {
    id: 2,
    name: "Riverside Jazz Club", 
    description: "Intimate jazz venue by the waterfront",
    image_url: "https://images.unsplash.com/photo-1514533212735-5df27d430bf8?w=500",
    address: "456 River Ave, Waterfront District",
    capacity: 300,
    event_count: 2
  },
  {
    id: 3,
    name: "Mountain View Amphitheater",
    description: "Outdoor venue with stunning mountain backdrop", 
    image_url: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=500",
    address: "789 Mountain Rd, Hills District",
    capacity: 8000,
    event_count: 2
  },
  {
    id: 4,
    name: "Underground Basement",
    description: "Raw underground venue for alternative music",
    image_url: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=500", 
    address: "321 Underground St, Arts Quarter",
    capacity: 150,
    event_count: 3
  }
];

export const mockEvents = [
  {
    id: 1,
    title: "Rock Festival 2025",
    description: "Annual rock festival featuring top artists",
    date: "2025-07-15T19:00:00Z",
    location_id: 1,
    location_name: "The Downtown Arena",
    location_address: "123 Main St, Downtown",
    image_url: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=500",
    price: 89.99,
    genre: "Rock",
    artist: "Multiple Artists", 
    duration_minutes: 360
  },
  {
    id: 2,
    title: "Classical Symphony Night",
    description: "Evening of classical masterpieces",
    date: "2025-03-20T20:00:00Z",
    location_id: 1,
    location_name: "The Downtown Arena",
    location_address: "123 Main St, Downtown", 
    image_url: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500",
    price: 75.00,
    genre: "Classical",
    artist: "City Symphony Orchestra",
    duration_minutes: 120
  },
  {
    id: 3,
    title: "Jazz Legends Tribute", 
    description: "Tribute to the greatest jazz musicians",
    date: "2025-02-14T21:00:00Z",
    location_id: 2,
    location_name: "Riverside Jazz Club",
    location_address: "456 River Ave, Waterfront District",
    image_url: "https://images.unsplash.com/photo-1514533212735-5df27d430bf8?w=500",
    price: 45.00,
    genre: "Jazz", 
    artist: "The Jazz Collective",
    duration_minutes: 150
  },
  {
    id: 4,
    title: "Smooth Jazz Sunday",
    description: "Relaxing Sunday evening jazz session", 
    date: "2025-01-26T18:00:00Z",
    location_id: 2,
    location_name: "Riverside Jazz Club",
    location_address: "456 River Ave, Waterfront District",
    image_url: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500",
    price: 35.00,
    genre: "Jazz",
    artist: "Sarah Miles Quartet", 
    duration_minutes: 90
  },
  {
    id: 5,
    title: "Summer Concert Series",
    description: "Outdoor concert under the stars",
    date: "2025-06-10T20:30:00Z", 
    location_id: 3,
    location_name: "Mountain View Amphitheater",
    location_address: "789 Mountain Rd, Hills District",
    image_url: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=500",
    price: 55.00,
    genre: "Pop",
    artist: "The Mountain Echoes",
    duration_minutes: 180
  },
  {
    id: 6,
    title: "Holiday Gala Concert",
    description: "Special holiday celebration concert",
    date: "2024-12-20T19:00:00Z",
    location_id: 1,
    location_name: "The Downtown Arena", 
    location_address: "123 Main St, Downtown",
    image_url: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=500",
    price: 95.00,
    genre: "Various",
    artist: "Holiday Orchestra",
    duration_minutes: 150
  }
];
