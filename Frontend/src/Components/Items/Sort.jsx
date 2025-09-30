import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/Sort.css";
import CategoryItem from "./CategoryItems";
import all_products from "../../data/All_Product";

export default function Sort({ category, subcategory}) {
  const navigate = useNavigate();
    
  const handleClick = (category, subcategory, productId) => {
      navigate(`/${category}/${subcategory}/${productId}`);
  };
  // Filter products by BOTH category and subcategory
  let filtered_array = all_products.filter(
    (obj) =>
      obj.category?.toLowerCase() === category?.toLowerCase() &&
      obj.subcategory?.toLowerCase() === subcategory?.toLowerCase()
  );

  const [sortedItems, setSortedItems] = useState(filtered_array);

  const handleSortChange = (event) => {
    const selectedValue = event.target.value;
    let sortedArray = [...filtered_array];

    if (selectedValue === "lowest") {
      sortedArray.sort((a, b) => a.new_price - b.new_price);
    } else if (selectedValue === "highest") {
      sortedArray.sort((a, b) => b.new_price - a.new_price);
    }

    setSortedItems(sortedArray);
  };

  return (
    <>
      <div className="item-sort">
        <h5>Sort by</h5>
        <select onChange={handleSortChange}>
          <option value="none">None</option>
          <option value="lowest">Price (Low-High)</option>
          <option value="highest">Price (High-Low)</option>
        </select>
      </div>

      <div className="list-category row row-cols-lg-6 row-cols-md-3 row-cols-sm-1">
        {sortedItems.length === 0 ? (
          <p>Products Not Found!</p>
        ) : (
          sortedItems.map((item, i) => (
            <CategoryItem
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
              discount={item.discount}
              category={item.category}
              subcategory={item.subcategory}
              onClick={() =>
                handleClick(item.category, item.subcategory, item.id)
              }
            />
          ))
        )}
      </div>
    </>
  );
}
