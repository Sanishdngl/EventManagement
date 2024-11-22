// import { useState } from 'react';

// const WeddingEvent = () => {
//     const [venue, setVenue] = useState('');
//     const [formData, setFormData] = useState({ name: '', email: '', date: '' });

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         alert('Form submitted!');
//         // Handle form submission logic
//     };

//     return (
//         <div className="p-4">
//             <h1 className="text-2xl font-bold mb-4">Wedding Event</h1>
//             <form onSubmit={handleSubmit} className="space-y-4">
//                 <div>
//                     <label className="block text-gray-700">Select Venue:</label>
//                     <select
//                         value={venue}
//                         onChange={(e) => setVenue(e.target.value)}
//                         className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//                     >
//                         <option value="">Select a venue</option>
//                         <option value="venue1">Venue 1</option>
//                         <option value="venue2">Venue 2</option>
//                         <option value="venue3">Venue 3</option>
//                     </select>
//                 </div>
//                 <div>
//                     <label className="block text-gray-700">Name:</label>
//                     <input
//                         type="text"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleInputChange}
//                         required
//                         className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//                     />
//                 </div>
//                 <div>
//                     <label className="block text-gray-700">Email:</label>
//                     <input
//                         type="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleInputChange}
//                         required
//                         className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//                     />
//                 </div>
//                 <div>
//                     <label className="block text-gray-700">Event Date:</label>
//                     <input
//                         type="date"
//                         name="date"
//                         value={formData.date}
//                         onChange={handleInputChange}
//                         required
//                         className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//                     />
//                 </div>
//                 <button
//                     type="submit"
//                     className="mt-4 w-full bg-indigo-600 text-white font-bold py-2 rounded hover:bg-indigo-700 transition"
//                 >
//                     Submit
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default WeddingEvent;
