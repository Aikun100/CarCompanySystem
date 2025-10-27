import React from "react";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "./PrimaryButton";
import { Home, Car, Wrench, Info, Phone } from "lucide-react";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <>
      {/* Top Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
          <div className="flex items-center justify-between h-16">
            {/* Brand */}
            <div className="flex items-center gap-6 cursor-pointer" onClick={() => navigate("/")}>
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 flex items-center justify-center shadow">
                <span className="font-bold text-black">A</span>
              </div>
              <span className="text-white text-lg md:text-xl font-extrabold tracking-wide">
                AURUM <span className="text-yellow-400">MOTORS</span>
              </span>
            </div>

            {/* Nav links (desktop) */}
            <div className="hidden md:flex items-center gap-8 text-gray-300 font-medium">
              <button onClick={() => navigate("/")} className="hover:text-yellow-400 transition">Home</button>
              <button onClick={() => navigate("/models")} className="hover:text-yellow-400 transition">Models</button>
              <button onClick={() => navigate("/services")} className="hover:text-yellow-400 transition">Services</button>
              <button onClick={() => navigate("/about")} className="hover:text-yellow-400 transition">About</button>
              <button onClick={() => navigate("/contact")} className="hover:text-yellow-400 transition">Contact</button>
            </div>

            {/* Right actions */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate("/order")}
                className="hidden md:inline-block bg-transparent border border-yellow-400 text-yellow-400 px-4 py-2 rounded-full font-semibold hover:bg-yellow-400 hover:text-black transition"
              >
                Order Now
              </button>

              {/* Primary button (desktop only) */}
              <div className="md:block hidden">
                <PrimaryButton
                  label="Explore Models"
                  onClick={() => navigate("/models")}
                />
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <MobileMenu />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navigation */}
      <BottomNav />
    </>
  );
}

/* Small mobile dropdown menu */
function MobileMenu() {
  const [open, setOpen] = React.useState(false);
  const menuRef = React.useRef(null);
  const navigate = useNavigate();

  // Close menu when clicking outside
  React.useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setOpen((s) => !s)}
        aria-label="Toggle menu"
        className="p-2 rounded-md bg-white/5 text-yellow-400 hover:bg-white/10 transition"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {open ? (
            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Animated dropdown */}
      <div
        className={`absolute right-0 mt-2 w-56 bg-gray-900/95 border border-gray-800 rounded-xl shadow-lg p-4 transform transition-all duration-300 origin-top ${
          open ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"
        }`}
      >
        <button onClick={() => {navigate("/"); setOpen(false);}} className="block w-full text-left px-3 py-2 rounded-md text-gray-200 hover:bg-white/5">Home</button>
        <button onClick={() => {navigate("/models"); setOpen(false);}} className="block w-full text-left px-3 py-2 rounded-md text-gray-200 hover:bg-white/5">Models</button>
        <button onClick={() => {navigate("/services"); setOpen(false);}} className="block w-full text-left px-3 py-2 rounded-md text-gray-200 hover:bg-white/5">Services</button>
        <button onClick={() => {navigate("/about"); setOpen(false);}} className="block w-full text-left px-3 py-2 rounded-md text-gray-200 hover:bg-white/5">About</button>
        <button onClick={() => {navigate("/contact"); setOpen(false);}} className="block w-full text-left px-3 py-2 rounded-md text-gray-200 hover:bg-white/5">Contact</button>
        <div className="mt-3">
          <button
            onClick={() => {navigate("/order"); setOpen(false);}}
            className="w-full bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold hover:bg-yellow-300 transition"
          >
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
}

/* 📱 Bottom Navigation Bar for Mobile */
function BottomNav() {
  const navigate = useNavigate();
  const navItems = [
    { path: "/", label: "Home", icon: <Home size={22} /> },
    { path: "/models", label: "Models", icon: <Car size={22} /> },
    { path: "/services", label: "Services", icon: <Wrench size={22} /> },
    { path: "/about", label: "About", icon: <Info size={22} /> },
    { path: "/contact", label: "Contact", icon: <Phone size={22} /> },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-black/90 border-t border-gray-800 backdrop-blur-md md:hidden z-50">
      <ul className="flex justify-around items-center py-2">
        {navItems.map((item) => (
          <li key={item.path}>
            <button
              onClick={() => navigate(item.path)}
              className="flex flex-col items-center text-gray-300 hover:text-yellow-400 transition"
            >
              {item.icon}
              <span className="text-xs mt-1">{item.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
