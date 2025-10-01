import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import '../../styles/Categories.css';
import CategoryItem from "../../Components/Items/CategoryItems";
import defaultImg from '../../assets/Images/image.png';
import KIDS_BANNER from '../../constants/KIDS_BANNER.png';
import axios from "axios";

export default function KidsCategories() {
  const { subcategory } = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const category = "kids";

  const subcategoryImages = {
    tshirts: "https://knitroot.com/wp-content/uploads/2023/05/20.png",
    shorts: "https://m.media-amazon.com/images/I/71sRFRR6BKL._UY1100_.jpg",
    shoes: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQynK_X9lRguDKHa1y_CTLG3eZi2i5Qb6_FeA&s",
    caps: "https://www.tinyminymo.com/cdn/shop/files/Kids-Cool-3D-Cap-4_1200x1200.jpg?v=1741539809",
    dresses: "https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/29524964/2024/5/14/28f21d13-9753-4337-b032-e41403e6eb3e1715663385068BAESDFloralFlutterSleeveNetFitFlareDress1.jpg"
  };

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
        {Object.keys(subcategoryImages).map((subcat) => (
          <div className="card card-product-list" key={subcat}>
            <Link to={`/kids/${subcat}`}>
              <img src={subcategoryImages[subcat]} alt={subcat} onError={fallback} />
            </Link>
            <div className="card-body">
              <p className="card-text card-category">{subcat.charAt(0).toUpperCase() + subcat.slice(1)}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Products List */}
      <div className="SortByProducts">
        <h3>Showing {products.length} results</h3>
      </div>
      <div className="list-category row row-cols-lg-6 row-cols-md-3 row-cols-sm-1">
        {loading ? (
          <p>Loading...</p>
        ) : products.length === 0 ? (
          <p>No products found!</p>
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
