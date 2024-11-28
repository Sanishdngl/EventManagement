import { useState } from "react";
import QRCode from "react-qr-code";

const EducationalEvent = () => {
  const [cart, setCart] = useState([]);
  const [showQR, setShowQR] = useState(false);

  // Sample data for events
  const events = [
    {
      id: 1,
      name: "Tech Conference 2024",
      price: 500,
      venue: "Tech Park, City Center",
      time: "10:00 AM - 4:00 PM",
      date: "2024-05-10",  // Added date
    },
    {
      id: 2,
      name: "AI & ML Workshop",
      price: 300,
      venue: "Innovation Hub, Downtown",
      time: "11:00 AM - 3:00 PM",
      date: "2024-06-15",  // Added date
    },
    {
      id: 3,
      name: "Startup Summit",
      price: 800,
      venue: "Expo Hall, Main Street",
      time: "9:00 AM - 5:00 PM",
      date: "2024-07-20",  // Added date
    },
  ];

  const [ticketCounts, setTicketCounts] = useState(
    events.reduce((acc, event) => ({ ...acc, [event.id]: 0 }), {})
  );

  const handleIncrease = (id) => {
    setTicketCounts({ ...ticketCounts, [id]: ticketCounts[id] + 1 });
  };

  const handleDecrease = (id) => {
    if (ticketCounts[id] > 0) {
      setTicketCounts({ ...ticketCounts, [id]: ticketCounts[id] - 1 });
    }
  };

  const handleAddToCart = (event) => {
    if (ticketCounts[event.id] > 0) {
      const updatedCart = [...cart];
      const existingItemIndex = updatedCart.findIndex((item) => item.id === event.id);

      if (existingItemIndex !== -1) {
        updatedCart[existingItemIndex].quantity += ticketCounts[event.id];
      } else {
        updatedCart.push({ ...event, quantity: ticketCounts[event.id] });
      }

      setCart(updatedCart);
      setTicketCounts({ ...ticketCounts, [event.id]: 0 });
    } else {
      alert("Please select at least one ticket.");
    }
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handlePayment = () => {
    if (cart.length === 0) {
      alert("Your cart is empty. Add tickets to proceed.");
    } else {
      setShowQR(true);
    }
  };

  return (
    <div>
      {/* Navbar */}
      <div
        className="w-full z-10 bg-blue-800 flex justify-center items-center text-4xl text-white font-extrabold py-4 shadow-md mt-20"
      >
        Educational Events
      </div>
      <div className=" p-6">
        {/* Event Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white shadow-lg rounded-lg p-4 flex flex-col justify-between"
            >
              <div>
                <img
                  src="https://via.placeholder.com/600x400"
                  alt="Event Image"
                  className="w-full h-48 object-cover rounded-md"
                />
                <h2 className="text-xl font-semibold mt-4">{event.name}</h2>
                <p className="text-gray-600">Venue: {event.venue}</p>
                <p className="text-gray-600">Time: {event.time}</p>
                <p className="text-gray-600">Date: {event.date}</p> {/* Added date */}
                <p className="text-blue-600 font-bold">Price: ${event.price}</p>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <button
                    className="btn btn-sm btn-outline"
                    onClick={() => handleDecrease(event.id)}
                  >
                    -
                  </button>
                  <span>{ticketCounts[event.id]}</span>
                  <button
                    className="btn btn-sm btn-outline"
                    onClick={() => handleIncrease(event.id)}
                  >
                    +
                  </button>
                </div>
                <button
                  className="btn btn-primary"
                  onClick={() => handleAddToCart(event)}
                >
                  Book Now
                </button> {/* Replaced 'Add to Cart' with 'Book Now' */}
              </div>
            </div>
          ))}
        </div>

        {/* Cart Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
          {cart.length === 0 ? (
            <p className="text-gray-600">Your cart is empty.</p>
          ) : (
            <div>
              <ul className="space-y-4">
                {cart.map((item) => (
                  <li
                    key={item.id}
                    className="flex justify-between items-center"
                  >
                    <div>
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-gray-600">Quantity: {item.quantity}</p>
                    </div>
                    <p className="text-blue-600 font-bold">
                      ${item.price * item.quantity}
                    </p>
                  </li>
                ))}
              </ul>
              <div className="mt-4 text-xl font-bold">
                Total Amount: ${calculateTotal()}
              </div>
              <button
                className="btn btn-primary mt-4"
                onClick={handlePayment}
              >
                Proceed to Payment
              </button>
            </div>
          )}
        </div>

        {/* QR Code Section */}
        {showQR && (
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Payment QR Code</h2>
            <QRCode
              value={`Payment of $${calculateTotal()} for Educational Events`}
              size={200}
              level="H"
            />
            <p className="mt-4 text-gray-600">
              Scan the QR code above to complete your payment.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EducationalEvent;
