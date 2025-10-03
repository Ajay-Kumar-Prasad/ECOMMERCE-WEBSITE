import React, { useContext } from "react";
import "../styles/ShowProductDetails.css";
import { ShopContext } from "../ContextAPI/ShopContext";
import { Link } from "react-router-dom";

export default function ShowProductDetails({ product, showSize }) {
  const { addToCart, cartItems } = useContext(ShopContext);

  // Check if product already in cart
  const productQuantity = cartItems[product._id] || 0;

  return (
    <div className="clearfix product-container">
      {/* Product Image */}
      <img
        src={product.image}
        className="col-md-6 float-md-start mb-3 ms-md-3 product-image position-relative"
        alt={product.full_name}
      />

      {/* Product Details */}
      <div className="product-details">
        <h3 className="product-inner-details">{product.brand_name}</h3>
        <h5>{product.full_name}</h5>
        <p>
          Ratings{" "}
          <i className="fa-solid fa-star" style={{ color: "#fe424d" }}></i>
          {product.rating}
        </p>
        <p>
          <span className="new-price">
            ₹{product.new_price.toLocaleString("en-IN")}
          </span>{" "}
          <span className="old-price">
            ₹{product.old_price.toLocaleString("en-IN")}
          </span>{" "}
          <span className="discount">
            {product.discount} <b>inclusive of all taxes</b>
          </span>
        </p>
        <h4>Description</h4>
        <p>{product.description}</p>
      </div>

      {/* Add to Cart */}
      {productQuantity > 0 ? (
        <Link to="/cart" className="btn btn-addtocart">
          <i className="fa-solid fa-bag-shopping"></i>&nbsp;Go to Cart ({productQuantity})
        </Link>
      ) : (
        <button
          type="button"
          className="btn btn-addtocart"
          onClick={() => addToCart(product._id)}
        >
          <i className="fa-solid fa-bag-shopping"></i>&nbsp;Add To Cart
        </button>
      )}

      {/* Wishlist Button */}
      &nbsp;&nbsp;
      <button type="button" className="btn btn-outline-secondary btn-wishlist">
        <i className="fa-regular fa-heart">&nbsp;</i>Wishlist
      </button>

      {/* Sizes */}
      {showSize && product.hasSizes && (
        <>
          <h6>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;SELECT SIZE
          </h6>
          <div className="size-options">
            {["S", "M", "L", "XL", "XXL"].map((size) => (
              <button
                key={size}
                type="button"
                className="btn btn-outline-secondary btn-size"
              >
                {size}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
