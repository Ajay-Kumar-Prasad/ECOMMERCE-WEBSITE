import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import '../../styles/CategoryItems.css';
import CategoryItem from "../../Components/Items/CategoryItems";
import defaultImg from '../../assets/Images/image.png';
import MEN_BANNERS from "../../constants/MEN_BANNER.jpg";
import assets from "../../constants/Banners";
import axios from "axios";

export default function MenCategories() {
  const { subcategory } = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fallback = (e) => { e.target.src = defaultImg; };

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        let url = `http://localhost:8080/api/products?category=men`;
        if (subcategory) url += `&subcategory=${subcategory}`;
        const res = await axios.get(url);
        const menProducts = res.data.filter(
          (prod) => prod.category.toLowerCase() === "men"
        );
        setProducts(menProducts);
      } catch (err) {
        console.error(err);
      }
      setLoading(false);
    };

    fetchProducts();
  }, [subcategory]);

  const handleClick = (category, subcategory, productId) => {
    navigate(`/${category}/${subcategory}/${productId}`);
  };

  return (
    <div className="shop-category">
      <img src={MEN_BANNERS} alt="Category Banner" onError={fallback} />

      {/* Subcategory Cards */}
      <div className="list-category row row-cols-lg-6 row-cols-md-3 row-cols-sm-1">
        {Object.keys(assets.mensubcatImages).map((subcat) => (
          <div className="card card-product-list" key={subcat}>
            <Link to={`/men/${subcat}`}>
              <img src={assets.mensubcatImages[subcat]} alt={subcat} onError={fallback} />
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
