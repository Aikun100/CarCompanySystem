import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import CarListing from "./pages/CarListing";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/cars" element={<CarListing />} />
      </Routes>
    </Router>
  );
}

export default App;
