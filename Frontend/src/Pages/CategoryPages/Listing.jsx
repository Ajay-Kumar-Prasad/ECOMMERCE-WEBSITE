import React from "react";
import { useParams } from "react-router-dom";
import Sort from "../../Components/Items/Sort";
import "../../styles/MenCategory.css";

export default function Listing() {
  const { category, subcategory } = useParams();

  // Image URLs mapped to subcategories
  const images = {
    trousers:"https://www.artless-store.com/cdn/shop/collections/e63e4d03adef96f99de73b60f9e2ea50_1376x416_a34eea3d-a267-4a29-9085-9c2097e4c8f3.jpg?v=1704529624",
    blazers:"https://cdn.shopify.com/s/files/1/2027/6273/files/3for2_banner_1024x1024.jpg?v=1724524295",
    earbuds:"https://store.hifiman.com/media/catalog/category/Earphones_banner_1.jpg",
    ethnics:"https://ethnicity.in/cdn/shop/files/Men-Banner_1_1024x1024.jpg?v=1737635693",
    formals:"https://theformalclub.in/cdn/shop/files/Fulkl-SLEVVEESSS_74f73ad8-8779-4f5c-9d89-c70fb07ff625.jpg?v=1721209695",
    jeans:"https://cdn.shopify.com/s/files/1/0565/8050/5775/files/5_jan_banner_1640x924_copy_1024x1024.jpg?v=1704452484",
    shirts:"https://theformalclub.in/cdn/shop/files/NEW-COLLECTION-BANNER-23_2.jpg?v=1721304243&width=3600",
    shoes:"https://th.bing.com/th/id/R.e70226b7efdbf3258e83fd98150263cb?rik=PkXL3K%2f48fh8fw&riu=http%3a%2f%2fs7d4.scene7.com%2fis%2fimage%2fboombah%2ffootwear-mens-banner-2%3f%24fullsize%24&ehk=56wCulEgRtWoXOqW7lHar78OOl7J0B3XJZUlr3aGkkk%3d&risl=&pid=ImgRaw&r=0",
    tshirts:"https://cdn.shopify.com/s/files/1/1982/7331/files/Artboard_1_77.jpg?v=1757922643",
    watches:"https://static.helioswatchstore.com/media/brand_directory/all.png",
  };

  // Pick the image based on subcategory
  const bannerImg = images[subcategory?.toLowerCase()] || "";

  return (
    <div className={`${category}-${subcategory}`}>
      {category==="men" && bannerImg && <img className="men-banner" src={bannerImg} alt={subcategory} />}
      <Sort category={category} subcategory={subcategory} />
    </div>
  );
}
