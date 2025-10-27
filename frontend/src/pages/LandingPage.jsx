import React from "react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-4 bg-black bg-opacity-80 fixed w-full z-50 backdrop-blur-md">
        <h1 className="text-3xl font-bold text-yellow-500 tracking-widest">
          LuxAuto
        </h1>
        <ul className="hidden md:flex space-x-8 text-lg">
          <li className="hover:text-yellow-400 cursor-pointer transition duration-300">
            Home
          </li>
          <li className="hover:text-yellow-400 cursor-pointer transition duration-300">
            Models
          </li>
          <li className="hover:text-yellow-400 cursor-pointer transition duration-300">
            Services
          </li>
          <li className="hover:text-yellow-400 cursor-pointer transition duration-300">
            Contact
          </li>
        </ul>
        <button className="bg-black text-white px-5 py-2 rounded-full font-semibold border border-yellow-500 hover:bg-yellow-500 hover:text-black transition duration-300">
          Order Now
        </button>
      </nav>

      {/* Hero Section */}
      <section
        className="relative w-full h-screen flex flex-col justify-center items-start px-8 md:px-24"
        style={{
          backgroundImage:
            "url('https://www.bing.com/th/id/OGC.ca920c941030245b0444f9ee51858797?o=7&cb=ucfimg2&pid=1.7&rm=3&rurl=https%3a%2f%2fi.gifer.com%2fNRP3.gif&ehk=nkywTH%2f1omPSCwc1oxDcyVAH9rFcNNt0mtp8MsG77fY%3d&ucfimg=1')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-xl space-y-6">
          <h2 className="text-5xl md:text-7xl font-bold text-yellow-500 leading-tight">
            Drive in Luxury.  
            <br />
            Live the Experience.
          </h2>
          <p className="text-gray-300 text-lg md:text-xl">
            Explore our world-class lineup of premium vehicles designed for those who crave style, comfort, and performance.
          </p>
          <div className="space-x-4">
            <button className="bg-black text-white border border-yellow-500 px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 hover:text-black transition duration-300">
              Explore Models
            </button>
            <button className="bg-black text-white border border-yellow-500 px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 hover:text-black transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Featured Models Section */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900 px-8 md:px-20 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-yellow-500 mb-12">
          Featured Models
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Card 1 */}
          <div className="bg-gray-900 rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 hover:shadow-yellow-500/30 transition duration-300">
            <img
              src="https://images.unsplash.com/photo-1532751203793-812308a10d8e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=646"
              alt="Luxury Sedan"
              className="w-full h-64 object-cover"
            />
            <div className="p-6 text-left">
              <h3 className="text-2xl font-semibold text-yellow-400 mb-2">
                LuxAuto Royale
              </h3>
              <p className="text-gray-400 mb-4">
                A timeless masterpiece that blends elegance and modern power — the ultimate luxury sedan.
              </p>
              <button className="bg-black text-white border border-yellow-500 px-5 py-2 rounded-full hover:bg-yellow-500 hover:text-black transition">
                View Details
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-900 rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 hover:shadow-yellow-500/30 transition duration-300">
            <img
              src="https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=800&q=80"
              alt="Luxury SUV"
              className="w-full h-64 object-cover"
            />
            <div className="p-6 text-left">
              <h3 className="text-2xl font-semibold text-yellow-400 mb-2">
                LuxAuto Titan
              </h3>
              <p className="text-gray-400 mb-4">
                Designed for those who demand comfort, space, and dominance on the road — a luxury SUV redefining power.
              </p>
              <button className="bg-black text-white border border-yellow-500 px-5 py-2 rounded-full hover:bg-yellow-500 hover:text-black transition">
                View Details
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-900 rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 hover:shadow-yellow-500/30 transition duration-300">
            <img
              src="https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=800&q=80"
              alt="Sports Car"
              className="w-full h-64 object-cover"
            />
            <div className="p-6 text-left">
              <h3 className="text-2xl font-semibold text-yellow-400 mb-2">
                LuxAuto Velocity
              </h3>
              <p className="text-gray-400 mb-4">
                Feel the thrill with cutting-edge aerodynamics and breathtaking acceleration in our luxury sports model.
              </p>
              <button className="bg-black text-white border border-yellow-500 px-5 py-2 rounded-full hover:bg-yellow-500 hover:text-black transition">
                View Details
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
