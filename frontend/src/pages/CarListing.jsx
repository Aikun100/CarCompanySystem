import React, { useState } from "react";
import Card from "../components/Card";

export default function CarListing() {
  const cars = [
    {
      id: 1,
      title: "LuxAuto Royale",
      image:
        "https://images.unsplash.com/photo-1532751203793-812308a10d8e?auto=format&fit=crop&w=800&q=80",
      description:
        "A timeless masterpiece that blends elegance and power — the ultimate luxury sedan.",
      price: "₱5,000,000",
    },
    {
      id: 2,
      title: "LuxAuto Titan",
      image:
        "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=800&q=80",
      description:
        "Designed for those who demand comfort, space, and dominance on the road.",
      price: "₱6,200,000",
    },
    {
      id: 3,
      title: "LuxAuto Velocity",
      image:
        "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=800&q=80",
      description:
        "Feel the thrill with cutting-edge aerodynamics and breathtaking acceleration.",
      price: "₱8,700,000",
    },
    {
      id: 4,
      title: "LuxAuto Phantom",
      image:
        "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGNhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
      description:
        "The definition of modern opulence and superior performance in one sleek body.",
      price: "₱9,500,000",
    },
    {
      id: 5,
      title: "LuxAuto Aero GT",
      image:
        "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA1fHxjYXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
      description:
        "Engineered for speed, precision, and performance that turns heads everywhere.",
      price: "₱10,000,000",
    },
    {
      id: 6,
      title: "LuxAuto Electra",
      image:
        "https://plus.unsplash.com/premium_photo-1737623479045-a6a27357ffa9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ0fHxjYXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
      description:
        "An all-electric future of luxury — smooth, silent, and sophisticated.",
      price: "₱7,300,000",
    },
    {
      id: 7,
      title: "LuxAuto Mirage",
      image:
        "https://images.unsplash.com/photo-1592853625511-ad0edcc69c07?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjU0fHxjYXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
      description:
        "A dreamlike design that combines futuristic aesthetics with top-tier technology.",
      price: "₱6,800,000",
    },
    {
      id: 8,
      title: "LuxAuto Imperial",
      image:
        "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&w=900&q=80",
      description:
        "Command the road with a vehicle that exudes authority and unmatched craftsmanship.",
      price: "₱11,000,000",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 6;

  const filteredCars = cars.filter((car) =>
    car.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = filteredCars.slice(indexOfFirstCar, indexOfLastCar);

  const totalPages = Math.ceil(filteredCars.length / carsPerPage);

  return (
    <div className="min-h-screen bg-black text-white py-20 px-8 md:px-20">
      <div className="text-center mb-10">
        <h1 className="text-5xl font-bold text-yellow-500 mb-4">
          Our Exclusive Collection
        </h1>
        <p className="text-gray-400">
          Discover luxury and performance — refined for the modern elite.
        </p>
      </div>

      <div className="flex justify-center mb-12">
        <input
          type="text"
          placeholder="Search car models..."
          className="w-full md:w-1/2 p-3 rounded-full bg-gray-900 text-white border border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
        />
      </div>

      {/* Reused Card Components */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {currentCars.map((car) => (
          <Card
            key={car.id}
            image={car.image}
            title={car.title}
            description={car.description}
            price={car.price}
          />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-12 space-x-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className={`px-5 py-2 rounded-full border border-yellow-500 font-semibold transition ${
            currentPage === 1
              ? "opacity-50 cursor-not-allowed"
              : "bg-black text-white hover:bg-yellow-500 hover:text-black"
          }`}
        >
          Previous
        </button>

        <span className="text-yellow-400 font-semibold text-lg">
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className={`px-5 py-2 rounded-full border border-yellow-500 font-semibold transition ${
            currentPage === totalPages
              ? "opacity-50 cursor-not-allowed"
              : "bg-black text-white hover:bg-yellow-500 hover:text-black"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
}
