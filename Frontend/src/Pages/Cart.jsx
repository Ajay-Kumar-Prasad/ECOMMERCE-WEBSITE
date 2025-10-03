import React, { useContext } from "react";
import "../styles/CartItems.css";
import { ShopContext } from "../ContextAPI/ShopContext";

export default function Cart() {
  const {
    products,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalPrice,
    getTotalOldPrice,
  } = useContext(ShopContext);

  // Get all products that are in the cart
  const cartProductList = products.filter((p) => cartItems[p._id] > 0);
  
  return (
    <div className="container py-5">
      <div className="row">
        {/* Left: Cart Items */}
        <div className="col-lg-8">
          <div className="card mb-4">
            <div className="card-body cart-product">
              {cartProductList.length === 0 ? (
                <p style={{ color: "green" }}>Your cart is empty!</p>
              ) : (
                cartProductList.map((product) => (
                  <div
                    key={product._id}
                    className="d-flex flex-row flex-md-row align-items-center mb-3 cart-item"
                  >
                    {/* Product Image */}
                    <div className="me-md-3 mb-2 mb-md-0">
                      <img
                        src={product.image}
                        alt={product.full_name}
                        className="img-fluid rounded"
                        style={{ width: "120px", height: "120px", objectFit: "cover" }}
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-grow-1 d-flex flex-column justify-content-between">
                      <div className="product-details">
                        <h6>{product.full_name}</h6>
                        <p style={{ textDecoration: "line-through" }}>
                          ₹{product.old_price.toLocaleString("en-IN")}
                        </p>
                        <div className="d-flex align-items-center mt-2">
                          <p style={{ color: "green",fontWeight:"bold" }}>{product.discount}</p>
                          <div className="ms-auto fw-bold">
                            {/* Delete Button */}
                            <i className="fa-solid fa-trash" onClick={() => removeFromCart(product._id, true)} style={{ color: "#fe424d" }}></i>
                          </div>
                        </div>
                        {/* Quantity Controls */}
                        <div className="d-flex align-items-center mt-2 quant-control">
                          <button
                            className="btn btn-outline-secondary btn-sm me-2"
                            onClick={() => removeFromCart(product._id)}
                          >
                            -
                          </button>
                          <input
                            type="text"
                            className="form-control form-control-sm text-center me-2"
                            value={cartItems[product._id]}
                            readOnly
                            style={{height:"0.8rem", width: "2rem" }}
                          />
                          <button
                            className="btn btn-outline-secondary btn-sm"
                            onClick={() => addToCart(product._id)}
                          >
                            +
                          </button>
                          <div className="ms-auto fw-bold">
                            ₹{(product.new_price * cartItems[product._id]).toLocaleString("en-IN")}
                          </div>
                        </div>
                        </div>
                      </div>
                  </div>
                ))
              )}
            </div>
          </div>


          {/* Continue Shopping Button */}
          <a
            href="/"
            className="btn btn-pink-outline"
            style={{ color: "#fe424d", borderColor: "#fe424d" }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#fe424d";
              e.target.style.color = "white";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "white";
              e.target.style.color = "#fe424d";
            }}
          >
            Continue Shopping
          </a>
        </div>

        {/* Right: Summary */}
        <div className="col-lg-4">
          <div className="card cart-summary">
            <div className="card-body">
              <h5 className="card-title mb-4">Order Summary</h5>
              <div className="d-flex justify-content-between mb-3">
                <span>Subtotal</span>
                <span>₹{getTotalOldPrice().toLocaleString("en-IN")}</span>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <span>Shipping</span>
                <span style={{color:"green"}}>Free</span>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <span>Tax</span>
                <span>₹20.00 GST</span>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <span >Discount</span>
                <span style={{color:"green"}}>
                  ₹{(getTotalOldPrice() - getTotalPrice()).toLocaleString("en-IN")}
                </span>
              </div>
              <hr />
              <div className="d-flex justify-content-between mb-4">
                <strong>Total</strong>
                <strong>₹{getTotalPrice().toLocaleString("en-IN")}</strong>
              </div>
              <button
                className="btn w-100"
                style={{ color: "white", backgroundColor: "#fe424d" }}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>

          {/* Promo Code */}
          <div className="card mt-4">
            <div className="card-body">
              <h5 className="card-title mb-3">
                Apply Promo Code&nbsp;&nbsp;<i className="fa-solid fa-tag"></i>
              </h5>
              <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Enter promo code" />
                <button className="btn btn-outline-secondary" type="button">
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
