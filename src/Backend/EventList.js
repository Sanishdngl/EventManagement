// Backend: Node.js (Express) with MongoDB integration

// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));

// Event Schema
const eventSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, enum: ['wedding', 'sports', 'educational'], required: true },
  venue: { type: String, required: true },
  date: { type: Date, required: true },
  description: { type: String },
  attendees: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});
const Event = mongoose.model('Event', eventSchema);

// Event Routes
app.post('/api/events', async (req, res) => {
  try {
    const event = new Event(req.body);
    await event.save();
    res.status(201).json(event);
  } catch (error) {
    res.status(500).json({ message: 'Error creating event', error });
  }
});

app.get('/api/events', async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching events', error });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

// Frontend: React Components for Creating and Displaying Events

// client/src/components/CreateEvent.js
// import React, { useState } from 'react';
// import axios from 'axios';

// const CreateEvent = () => {
//   const [eventData, setEventData] = useState({ name: '', type: '', venue: '', date: '', description: '' });

//   const handleChange = (e) => {
//     setEventData({ ...eventData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5000/api/events', eventData);
//       alert('Event created successfully!');
//     } catch (error) {
//       console.error('Error creating event:', error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input name="name" placeholder="Event Name" onChange={handleChange} />
//       <select name="type" onChange={handleChange}>
//         <option value="">Select Event Type</option>
//         <option value="wedding">Wedding</option>
//         <option value="sports">Sports</option>
//         <option value="educational">Educational</option>
//       </select>
//       <input name="venue" placeholder="Venue" onChange={handleChange} />
//       <input name="date" type="date" onChange={handleChange} />
//       <textarea name="description" placeholder="Description" onChange={handleChange}></textarea>
//       <button type="submit">Create Event</button>
//     </form>
//   );
// };

// export default CreateEvent;

// client/src/components/EventList.js
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const EventList = () => {
//   const [events, setEvents] = useState([]);

//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/events');
//         setEvents(response.data);
//       } catch (error) {
//         console.error('Error fetching events:', error);
//       }
//     };
//     fetchEvents();
//   }, []);

//   return (
//     <div>
//       <h2>Event List</h2>
//       <ul>
//         {events.map(event => (
//           <li key={event._id}>
//             <h3>{event.name}</h3>
//             <p>Type: {event.type}</p>
//             <p>Venue: {event.venue}</p>
//             <p>Date: {new Date(event.date).toDateString()}</p>
//             <p>Description: {event.description}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default EventList;

// // Ensure to run the backend server and React frontend separately.
// // Use `npm start` in the `client` directory for React and `node server.js` for the backend.
