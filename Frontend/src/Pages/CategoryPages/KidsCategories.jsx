import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import '../../styles/Categories.css';
import CategoryItem from "../../Components/Items/CategoryItems";
import defaultImg from '../../assets/Images/image.png';
import KIDS_BANNER from '../../constants/KIDS_BANNER.png';
import assets from '../../constants/Banners';
import axios from "axios";

export default function KidsCategories() {
  const { subcategory } = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const category = "kids";
  const fallback = (e) => { e.target.src = defaultImg; };

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        let url = `http://localhost:8080/api/products?category=${category}`;
        if (subcategory) url += `&subcategory=${subcategory}`;
        const res = await axios.get(url);
        const kidProducts = res.data.filter(
            (prod) => prod.category.toLowerCase() === "kids"
          );
          setProducts(kidProducts);
      } catch (err) {
        console.error(err);
      }
      setLoading(false);
    };

    fetchProducts();
  }, [subcategory]);

  const handleClick = (id) => {
    navigate(`/${category}/${subcategory || ''}/${id}`);
  };

  return (
    <div className="shop-category">
      <img src={KIDS_BANNER} alt="Kids Banner" onError={fallback} />

      {/* Subcategory Cards */}
      <div className="list-category row row-cols-lg-6 row-cols-md-3 row-cols-sm-1">
        {Object.keys(assets.subcategoryImages).map((subcat) => (
          <div className="card card-product-list" key={subcat}>
            <Link to={`/kids/${subcat}`}>
              <img src={assets.subcategoryImages[subcat]} alt={subcat} onError={fallback} />
            </Link>
            <div className="card-body">
              <p className="card-text card-category">{subcat.charAt(0).toUpperCase() + subcat.slice(1)}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Products List */}
      <div className="SortByProducts">
        {products.length===0? ( <h4>No products found!</h4>):(<h3>Showing {products.length} results</h3>)}
      </div>
      <div className="list-category row row-cols-lg-6 row-cols-md-3 row-cols-sm-1">
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
              onClick={() => handleClick(item._id)}
            />
          ))
        )}
      </div>
    </div>
  );
}
