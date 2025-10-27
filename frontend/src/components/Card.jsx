import React from "react";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "./PrimaryButton";

export default function Card({ image, title, description, price, link }) {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-900 rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 hover:shadow-yellow-500/30 transition duration-300">
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover"
      />
      <div className="p-6 text-left">
        <h3 className="text-2xl font-semibold text-yellow-400 mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>

        {price && (
          <p className="text-lg font-bold text-yellow-500 mb-4">{price}</p>
        )}

        <PrimaryButton
          label="View Details"
          onClick={() => navigate(link || "/models")}
        />
      </div>
    </div>
  );
}
