import React from "react";

export default function PrimaryButton({ text }) {
  return (
    <button className="bg-gradient-to-r from-yellow-500 to-yellow-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition-transform">
      {text}
    </button>
  );
}
