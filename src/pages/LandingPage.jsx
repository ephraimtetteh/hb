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
      <section className="flex flex-col sm:flex-row items-center h-[90vh]">
        <img
          className="w-full h-[100%] sm:h-[640px] object-cover"
          src={images[currentImageIndex]}
          alt="Animation background"
        />
      </section>

      {/* Discovery Section */}
      <Discovery />
      <div className="h-[100vh]">

      </div>
    </div>
  );
};

export default LandingPage;
