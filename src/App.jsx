import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage.jsx";
import NavBar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import AboutUs from "./pages/navigate/AboutUs.jsx";
function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />

          <Route path="/aboutUs" element={<AboutUs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
