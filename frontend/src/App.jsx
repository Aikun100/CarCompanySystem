import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import CarListing from "./pages/CarListing";
import OrderForm from "./pages/OrderForm";

// temporary placeholder for unfinished pages
const ComingSoon = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-black text-yellow-500 text-3xl">
    Coming Soon...
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/cars" element={<CarListing />} />
        <Route path="/order" element={<OrderForm />} />
        <Route path="/models" element={<CarListing />} />
        <Route path="/services" element={<ComingSoon />} />
        <Route path="/contact" element={<ComingSoon />} />
      </Routes>
    </Router>
  );
}

export default App;
