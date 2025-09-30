import React from "react";
import { useNavigate } from "react-router-dom";
import '../../styles/Categories.css';
import CategoryItem from "../../Components/Items/CategoryItems";
import all_products from "../../data/All_Product";
import defaultImg from '../../assets/Images/image.png';
import { Link, useParams } from "react-router-dom";
import WOMEN_BANNER from '../../constants/MAIN-BANNER.jpg';

export default function WomenCategories(props) {
  const { subcategory } = useParams();
  const navigate = useNavigate();
    
  const handleClick = (category, subcategory, productId) => {
      navigate(`/${category}/${subcategory}/${productId}`);
  };
  const subcategoryImages = {
    dresses: "https://i.pinimg.com/736x/1a/e1/43/1ae14341b8d9573ecef88c454edca694.jpg",
    tops: "https://i.pinimg.com/originals/16/96/d4/1696d40c051b038d4f56c8b91348a8fc.jpg",
    kurti: "https://urbanstree.com/cdn/shop/files/April23-351.jpg?v=1689345436",
    jeans: "https://d2j6dbq0eux0bg.cloudfront.net/images/21493407/3488072551.jpg",
    heels: "https://th.bing.com/th/id/OIP.JYcFWJJrRmiINXNCvy5bZQAAAA?w=385&h=385&rs=1&pid=ImgDetMain",
    sarees: "https://i.pinimg.com/originals/e3/35/a9/e335a9861dc71a9c17f38e4817f0b496.jpg",
    trousers: "https://assets.ajio.com/medias/sys_master/root/20240919/5p8e/66eb5480260f9c41e811fd6c/-473Wx593H-700440700-beige-MODEL.jpg",
    sneakers: "https://ae01.alicdn.com/kf/HTB1_ECxaXkoBKNjSZFEq6zrEVXaB/Women-Running-Shoes-Krasovki-Womens-Sneakers-2018-Sneakers-Women-Zapatillas-Deportivas-Mujer-Running-Shoes-Pink-Size.jpg",
    handbags: "https://th.bing.com/th/id/OIP.73ClGYHGReevkne1_hVF7AAAAA?rs=1&pid=ImgDetMain",
    watches: "https://img.joomcdn.net/8f3f0c280ce325d8756d88d2d5792e0a95dce3c7_original.jpeg"
  };

  const fallback = (e) => { e.target.src = defaultImg; };

  const filteredProducts = all_products.filter(item => {
    const itemCategory = item.category ? item.category.toLowerCase() : "";
    const itemSubcategory = item.subcategory ? item.subcategory.toLowerCase() : "";
    if (!subcategory) return itemCategory === "women"; // all women products
    return itemCategory === "women" && itemSubcategory === subcategory.toLowerCase();
});

  return (
    <div className="shop-category">
      <img src={WOMEN_BANNER} alt={`Women banner`} onError={fallback} />
      {/* Subcategory cards */}
      <div className="list-category row row-cols-lg-6 row-cols-md-3 row-cols-sm-1">
        {Object.keys(subcategoryImages).map((subcat) => (
          <div className="card card-product-list" key={subcat}>
            <Link to={`/women/${subcat}`}>
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
        <h3>Showing {filteredProducts.length} results</h3>
      </div>
      <div className="list-category row row-cols-lg-6 row-cols-md-3 row-cols-sm-1">
        {filteredProducts.map((item, i) => (
          <CategoryItem
            key={i}
            id={item.id}
            name={item.name}
            image={item.image || defaultImg} // fallback if item.image is missing
            new_price={item.new_price}
            old_price={item.old_price}
            discount={item.discount}
            category={item.category}
            subcategory={item.subcategory}
            onClick={() =>
              handleClick(item.category, item.subcategory, item.id)
            }
          />
        ))}
      </div>
    </div>
  );
}
