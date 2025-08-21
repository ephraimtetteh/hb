import React, { useEffect, useState } from "react";
import assets from "../assets/assests.jsx";
import Discovery from "../components/Discovery.jsx";

const LandingPage = () => {
  const images = [assets.bg5, assets.bg2, assets.bg3, assets.bg5];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="flex flex-col sm:flex-row items-center">
        <img
          className="w-full h-[60vh] sm:h-[1024px] object-cover" 
          src={images[currentImageIndex]}
          alt="Animation background"
        />
      </section>

      {/* Discovery Section */}
      <Discovery />
      
    </div>
  );
};

export default LandingPage;
