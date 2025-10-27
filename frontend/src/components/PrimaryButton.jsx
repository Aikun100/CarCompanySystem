import React from "react";

export default function PrimaryButton({ label, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`bg-black text-white border border-yellow-500 px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 hover:text-black transition duration-300 ${className}`}
    >
      {label}
    </button>
  );
}
