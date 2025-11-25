import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import '../../styles/Categories.css';
import CategoryItem from "../../Components/Items/CategoryItems";
import defaultImg from '../../assets/Images/image.png';
import WOMEN_BANNER from '../../constants/MAIN-BANNER.jpg';
import assets from "../../constants/Banners";
import axios from "axios";

export default function WomenCategories() {
  const { subcategory } = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fallback = (e) => { e.target.src = defaultImg; };

  const handleClick = (category, subcategory, productId) => {
    navigate(`/${category}/${subcategory}/${productId}`);
  };

  // Fetch products from backend
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        let url = `${process.env.REACT_APP_API_URL}/api/products?category=women`;
        if (subcategory) url += `&subcategory=${subcategory}`;
        const res = await axios.get(url);
        const womenProducts = res.data.filter(
          (prod) => prod.category.toLowerCase() === "women"
        );
        setProducts(womenProducts);
      } catch (err) {
        console.error(err);
      }
      setLoading(false);
    };

    fetchProducts();
  }, [subcategory]);

  return (
    <div className="shop-category">
      <img src={WOMEN_BANNER} alt={`Women banner`} onError={fallback} />

      {/* Subcategory cards */}
      <div className="list-category row row-cols-lg-6 row-cols-md-3 row-cols-sm-1">
        {Object.keys(assets.womensubcatImages).map((subcat) => (
          <div className="card card-product-list" key={subcat}>
            <Link to={`/women/${subcat}`}>
              <img src={assets.womensubcatImages[subcat]} alt={subcat} onError={fallback} />
            </Link>
            <div className="card-body">
              <p className="card-text card-category">{subcat.charAt(0).toUpperCase() + subcat.slice(1)}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Products List */}
      <div className="SortByProducts">
        <h4>Showing all {products.length} results</h4>
      </div>
      <div className="list-category row row-cols-lg-6 row-cols-md-3 row-cols-sm-1">
        {loading ? (
          <p>Loading..</p>
        ) : products.length === 0 ? (
          <p>Products Not Found!</p>
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
              onClick={() => handleClick(item.category, item.subcategory, item._id)}
            />
          ))
        )}
      </div>
    </div>
  );
}
