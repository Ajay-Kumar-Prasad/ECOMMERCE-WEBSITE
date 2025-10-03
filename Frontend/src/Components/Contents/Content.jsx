import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../../styles/Content.css';
import assets from "../../constants/Banners";

export default function Content() {
  const [currIdx, setCurrIdx] = useState(0);

  const goToNext = () => setCurrIdx((prev) => (prev === assets.homeBanners.length - 1 ? 0 : prev + 1));
  const goToPrevious = () => setCurrIdx((prev) => (prev === 0 ? assets.homeBanners.length - 1 : prev - 1));

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-wrapper">
      <div
        className="carousel-track"
        style={{ transform: `translateX(-${currIdx * 100}%)` }}
      >
        {assets.homeBanners.map((banner, idx) => (
          <Link key={idx} to={`/${banner.link}`} className="carousel-slide">
            <img src={banner.url} alt="" />
          </Link>
        ))}
      </div>

      <button className="carousel-control-prev" onClick={goToPrevious}>
        &#10094;
      </button>
      <button className="carousel-control-next" onClick={goToNext}>
        &#10095;
      </button>
    </div>
  );
}
