import React, { useEffect, useState } from "react";
import {  useNavigate,useParams } from "react-router-dom";
import "../../styles/MenCategory.css";
import axios from "axios";
import CategoryItem from "../../Components/Items/CategoryItems";
import defaultImg from '../../assets/Images/image.png';
import assets from "../../constants/Banners";

export default function Listing() {
  const { category, subcategory } = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const bannerImg = assets.images[category?.toLowerCase()+"_"+subcategory?.toLowerCase()] || "";

  const fallback = (e) => { e.target.src = defaultImg; };

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        let url = `http://localhost:8080/api/products?category=${category}`;
        if (subcategory) url += `&subcategory=${subcategory}`;
        const res = await axios.get(url);
        const menProducts = res.data.filter(
          (prod) => prod.category.toLowerCase() === category && prod.subcategory.toLowerCase() === subcategory.toLowerCase()
        );
        setProducts(menProducts);
      } catch (err) {
        console.error(err);
      }
      setLoading(false);
    };

    fetchProducts();
  }, [category, subcategory]);

  const handleClick = (category, subcategory, productId) => {
    navigate(`/${category}/${subcategory}/${productId}`);
  };
  return (
    <div className={`${category}-${subcategory}`}>
      {bannerImg && <img className="category-banner" src={bannerImg} alt={subcategory} onError={fallback} />}
      <div className="list-category row row-cols-lg-6 row-cols-md-3 row-cols-sm-1 mt-3">
        {loading ? (
          <p>Loading..</p>
        ) : products.length === 0 ? (
          <p style={{color:"red"}}>No products found!</p>
        ) : (
          products.map((item) => (
            <CategoryItem
              key={item._id}
              id={item._id}
              name={item.name}
              image={item.image || defaultImg}
              new_price={item.new_price}
              old_price={item.old_price}
              discount={item.discount}
              category={item.category}
              subcategory={item.subcategory}
              onClick={() =>
                handleClick(item.category, item.subcategory, item._id)
              }
            />
          ))
        )}
      </div>
    </div>
  );
}
