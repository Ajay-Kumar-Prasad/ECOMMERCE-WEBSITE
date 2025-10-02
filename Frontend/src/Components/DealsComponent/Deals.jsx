import React from "react";
import '../../styles/Deals.css';
import Item from "../Items/Item";
import { useNavigate } from "react-router-dom";

export default function Deals({ title, data }) {
  const navigate = useNavigate();

  const handleClick = (item) => {
    if (item.category && item.subcategory && item._id) {
      navigate(`/${item.category}/${item.subcategory}/${item._id}`);
    } else if (item.link) {
      navigate(item.link);
    }
  };
  

  return (
    <div className="deals">
      <div className="deals-title">
        <h2>{title}</h2>
      </div>
      <div className="Deal-items row row-cols-lg-6 row-cols-md-3 row-cols-sm-1">
        {data.map((item, i) => (
          <div key={i} style={{ textDecoration: "none" }}>
            <Item
              id={item._id || item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              onClick={() =>
                handleClick(item)
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
}
