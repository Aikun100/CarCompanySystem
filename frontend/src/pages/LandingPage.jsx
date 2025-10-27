import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/NavBar";
import Card from "../components/Card";
import PrimaryButton from "../components/PrimaryButton";

export default function LandingPage() {
  const navigate = useNavigate();

  const featuredCars = [
    {
      id: 1,
      title: "LuxAuto Royale",
      image:
        "https://images.unsplash.com/photo-1532751203793-812308a10d8e?auto=format&fit=crop&w=800&q=80",
      description:
        "A timeless masterpiece that blends elegance and modern power — the ultimate luxury sedan.",
      link: "/models",
    },
    {
      id: 2,
      title: "LuxAuto Titan",
      image:
        "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=800&q=80",
      description:
        "Designed for those who demand comfort, space, and dominance on the road — a luxury SUV redefining power.",
      link: "/models",
    },
    {
      id: 3,
      title: "LuxAuto Velocity",
      image:
        "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=800&q=80",
      description:
        "Feel the thrill with cutting-edge aerodynamics and breathtaking acceleration in our luxury sports model.",
      link: "/models",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Navbar />

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
            <PrimaryButton label="Explore Models" onClick={() => navigate("/models")} />
            <PrimaryButton label="Learn More" onClick={() => navigate("/services")} />
          </div>
        </div>
      </section>

      {/* Featured Models */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900 px-8 md:px-20 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-yellow-500 mb-12">
          Featured Models
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {featuredCars.map((car) => (
            <Card
              key={car.id}
              image={car.image}
              title={car.title}
              description={car.description}
              link={car.link}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
