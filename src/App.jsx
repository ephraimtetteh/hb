import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage.jsx";
import NavBar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import AboutUs from "./pages/navigate/AboutUs.jsx";
import OurTrust from './pages/navigate/OurTrust.jsx'
import OurProcess from './pages/navigate/OurProcess.jsx'
import CustomerCare from './pages/navigate/CustomerCare.jsx'
import DiscoverUs from './pages/navigate/DiscoverUs.jsx'

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/trust" element={<OurTrust />} />
          <Route path="/process" element={<OurProcess />} />
          <Route path="/customercare" element={<CustomerCare />} />
          <Route path="/discovery" element={<DiscoverUs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
