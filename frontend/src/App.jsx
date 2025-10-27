import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import CarListing from "./pages/CarListing";
import OrderForm from "./pages/OrderForm";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/cars" element={<CarListing />} />
        <Route path="/order" element={<OrderForm />} />

      </Routes>
    </Router>
  );
}

export default App;
