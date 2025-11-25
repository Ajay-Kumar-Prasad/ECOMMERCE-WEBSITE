import React, { useEffect, useState } from "react";
import {  useNavigate,useParams } from "react-router-dom";
import "../../styles/Listing.css";
import axios from "axios";
import CategoryItem from "../../Components/Items/CategoryItems";
import defaultImg from '../../assets/Images/image.png';
import assets from "../../constants/Banners";

export default function Listing() {
  const { category, subcategory } = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [sortedItems, setSortedItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const bannerImg = assets.images[category?.toLowerCase()+"_"+subcategory?.toLowerCase()] || "";

  const fallback = (e) => { e.target.src = defaultImg; };

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        let url = `${process.env.REACT_APP_API_URL}/api/products?category=${category}`;
        if (subcategory) url += `&subcategory=${subcategory}`;
        const res = await axios.get(url);
        const filteredProducts = res.data.filter(
          (prod) => prod.category.toLowerCase() === category && prod.subcategory.toLowerCase() === subcategory.toLowerCase()
        );
        setProducts(filteredProducts);
        setSortedItems(filteredProducts);
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

  const handleSortChange = (event) => {
    const selectedValue = event.target.value;
    let sortedArray = [...products];

    if (selectedValue === "lowest") {
      sortedArray.sort((a, b) => a.new_price - b.new_price);
    } else if (selectedValue === "highest") {
      sortedArray.sort((a, b) => b.new_price - a.new_price);
    }
    else if (selectedValue === "discount-highest"){
      sortedArray.sort((a,b) => parseInt(b.discount) - parseInt(a.discount));
    }
    else if (selectedValue === "rating-highest"){
      sortedArray.sort((a,b) => b.rating - a.rating);
    }
    setSortedItems(sortedArray);
  };
  return (
    <div className={`${category}-${subcategory}`}>
      {bannerImg && <img className="category-banner" src={bannerImg} alt={subcategory} onError={fallback} />}
      <div className="item-sort">
        <h5>Sort by</h5>
        <div className="select-wrap">
          <select className="sort-select" onChange={handleSortChange} defaultValue="none">
            <option value="none">None</option>
            <option value="lowest">Price (Low-High)</option>
            <option value="highest">Price (High-Low)</option>
            <option value="discount-highest">Discount (High-Low)</option>
            <option value="rating-highest">Rating (High-Low)</option>
          </select>
        </div>
      </div>

      <div className="list-category row row-cols-lg-6 row-cols-md-3 row-cols-sm-1 mt-3">
        {loading ? (
          <p>Loading..</p>
        ) : products.length === 0 ? (
          <p style={{color:"red"}}>No products found!</p>
        ) : (
          sortedItems.map((item) => (
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
