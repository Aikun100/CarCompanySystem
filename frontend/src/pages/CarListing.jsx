import React, { useState } from "react";

const CarListing = () => {
  // Sample car data
  const cars = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800",
      model: "Lamborghini Aventador",
      description: "A powerful V12 supercar that delivers raw speed and luxury.",
      price: "$450,000",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=800",
      model: "Ferrari 488 GTB",
      description: "An Italian masterpiece with aerodynamic design and sharp control.",
      price: "$380,000",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1504215680853-026ed2a45def?w=800",
      model: "Porsche 911 Turbo",
      description: "The iconic blend of style, performance, and reliability.",
      price: "$210,000",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1511910849309-0e398a7a27c8?w=800",
      model: "BMW M8 Competition",
      description: "Luxury meets performance with a twin-turbo V8 engine.",
      price: "$180,000",
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1606925797300-0a1b4b4d5e9d?w=800",
      model: "Tesla Model S Plaid",
      description: "A futuristic electric sedan with insane acceleration.",
      price: "$140,000",
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=800",
      model: "Audi R8 V10",
      description: "A sleek supercar combining German precision and style.",
      price: "$200,000",
    },
  ];

  // Pagination and search states
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 3;

  // Filtered cars based on search
  const filteredCars = cars.filter((car) =>
    car.model.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination logic
  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = filteredCars.slice(indexOfFirstCar, indexOfLastCar);

  const totalPages = Math.ceil(filteredCars.length / carsPerPage);

  return (
    <div className="bg-black min-h-screen text-white py-10 px-6">
      <h1 className="text-4xl font-bold text-center mb-8">
        🚗 Car Listings
      </h1>

      {/* Search Bar */}
      <div className="max-w-md mx-auto mb-8">
        <input
          type="text"
          placeholder="Search by model..."
          className="w-full p-3 rounded-lg text-black focus:outline-none"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1); // reset to first page when searching
          }}
        />
      </div>

      {/* Car Grid */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {currentCars.map((car) => (
          <div
            key={car.id}
            className="bg-white/10 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            <img
              src={car.image}
              alt={car.model}
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold">{car.model}</h2>
              <p className="text-gray-300 text-sm mt-2">{car.description}</p>
              <p className="text-yellow-400 font-semibold mt-3">{car.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-10 gap-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="bg-gray-800 hover:bg-yellow-500 hover:text-black px-4 py-2 rounded-lg disabled:opacity-50"
        >
          Prev
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="bg-gray-800 hover:bg-yellow-500 hover:text-black px-4 py-2 rounded-lg disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CarListing;
