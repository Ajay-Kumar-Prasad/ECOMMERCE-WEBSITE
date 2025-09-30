import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../../styles/Content.css';

export default function Content() {
  const [currIdx, setCurrIdx] = useState(0);

  const contentBanners = [
    { url: "https://www.orchardtaunton.co.uk/app/uploads/2021/06/OSC-Summer-Generic-Website-Banner-01.jpg", link: "Best-Deals" },
    { url: "https://i.pinimg.com/originals/8f/8c/96/8f8c96d99932fce8c786b4130d624dca.jpg", link: "wedding" },
    { url: "https://m.media-amazon.com/images/S/aplus-media/vc/85497716-3f9c-41f7-abf0-76003c76fa44.__CR0,0,970,300_PT0_SX970_V1___.jpg", link: "boat-headphones" },
    { url: "https://1.bp.blogspot.com/-tjmqXN7PvSA/YNBUBC4a_rI/AAAAAAAAE5U/HzjRrCB8rZwM-J2PVqh-84WrdO_33WvTwCNcBGAsYHQ/s1920/Laptop_banner.jpg", link: "" },
  ];

  const goToNext = () => setCurrIdx((prev) => (prev === contentBanners.length - 1 ? 0 : prev + 1));
  const goToPrevious = () => setCurrIdx((prev) => (prev === 0 ? contentBanners.length - 1 : prev - 1));

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
        {contentBanners.map((banner, idx) => (
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
