import React from "react";
import PrimaryButton from "./PrimaryButton";

export default function Navbar({ onOrder }) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <div className="flex items-center gap-6">
            <a href="#home" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 flex items-center justify-center shadow">
                <span className="font-bold text-black">A</span>
              </div>
              <span className="text-white text-lg md:text-xl font-extrabold tracking-wide">
                AURUM <span className="text-yellow-400">MOTORS</span>
              </span>
            </a>
          </div>

          {/* Nav links (desktop) */}
          <div className="hidden md:flex items-center gap-8 text-gray-300 font-medium">
            <a href="#home" className="hover:text-yellow-400 transition">Home</a>
            <a href="#models" className="hover:text-yellow-400 transition">Models</a>
            <a href="#services" className="hover:text-yellow-400 transition">Services</a>
            <a href="#about" className="hover:text-yellow-400 transition">About</a>
            <a href="#contact" className="hover:text-yellow-400 transition">Contact</a>
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-4">
            <button
              onClick={onOrder}
              className="hidden md:inline-block bg-transparent border border-yellow-400 text-yellow-400 px-4 py-2 rounded-full font-semibold hover:bg-yellow-400 hover:text-black transition"
            >
              Book Test Drive
            </button>

            {/* Primary button (mobile + desktop fallback) */}
            <div className="md:block hidden">
              <PrimaryButton label="Explore Models" onClick={() => (window.location.href = "#models")} />
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <MobileMenu />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

/* Small mobile menu component (keeps Navbar file self-contained) */
function MobileMenu() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((s) => !s)}
        aria-label="Toggle menu"
        className="p-2 rounded-md bg-white/5 text-white hover:bg-white/10 transition"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {open ? (
            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-56 bg-gray-900/95 border border-gray-800 rounded-xl shadow-lg p-4">
          <a href="#home" className="block px-3 py-2 rounded-md text-gray-200 hover:bg-white/5">Home</a>
          <a href="#models" className="block px-3 py-2 rounded-md text-gray-200 hover:bg-white/5">Models</a>
          <a href="#services" className="block px-3 py-2 rounded-md text-gray-200 hover:bg-white/5">Services</a>
          <a href="#about" className="block px-3 py-2 rounded-md text-gray-200 hover:bg-white/5">About</a>
          <a href="#contact" className="block px-3 py-2 rounded-md text-gray-200 hover:bg-white/5">Contact</a>
          <div className="mt-3">
            <button
              onClick={() => (window.location.href = "#contact")}
              className="w-full bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold hover:bg-yellow-300 transition"
            >
              Book Test Drive
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
