import React, { useContext } from "react";
import '../styles/CartItems.css';
import { ShopContext } from "../ContextAPI/ShopContext";
export default function Cart(){
    const {addToCart,getTotalCartOldPrice,getTotalCartPrice,cartProduct,cartItems,RemoveFromCart} = useContext(ShopContext);
    return(
        <>
        <div class="container py-5">
    <div class="row">
        <div class="col-lg-8">
            <div class="card mb-4">
                <div class="card-body">
                {cartProduct.length === 0 ? (
                    <p>No Items in Cart</p>
                ) : (
                    cartProduct.map((e) => {
                        if (cartItems[e.id] > 0) {
                            return (
                                <div key={e.id} class="row cart-item mb-3">
                                    <div class="col-md-3">
                                        <img src={e.image} alt="Product 1" class="img-fluid rounded" />
                                    </div>
                                    <div class="col-md-5">
                                        <h6 class="card-title">{e.full_name}</h6>
                                        <p class="text-muted">
                                            <p style={{ textDecoration: "line-through" }}>
                                                ₹{e.old_price.toLocaleString("en-IN")}
                                            </p>
                                            <p style={{ color: "green" }}>{e.discount}</p>
                                        </p>
                                    </div>
                                    <div class="col-md-2">
                                        <div class="input-group">
                                            <button
                                                class="btn btn-outline-secondary btn-sm"
                                                type="button"
                                                onClick={() => {
                                                    RemoveFromCart(e.id);
                                                }}
                                            >
                                                -
                                            </button>
                                            <input
                                                style={{ maxWidth: "100px" }}
                                                type="text"
                                                class="form-control  form-control-sm text-center quantity-input"
                                                value={cartItems[e.id]}
                                            />
                                            <button
                                                class="btn btn-outline-secondary btn-sm"
                                                type="button"
                                                onClick={() => {
                                                    addToCart(e.id);
                                                }}
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                    <div class="col-md-2 text-end">
                                        <p class="fw-bold">
                                            <a style={{ color: "#ff415a" }}>
                                                ₹{(e.new_price * cartItems[e.id]).toLocaleString("en-IN")}{" "}
                                            </a>
                                        </p>
                                        <button
                                            class="btn btn-sm btn-outline-danger"
                                            onClick={() => {
                                                RemoveFromCart(e.id);
                                            }}
                                        >
                                            <i class="fa-solid fa-trash-can"></i>
                                        </button>
                                    </div>
                                </div>
                            );
                        }
                        return null;
                    })
                )}
                </div>
            </div>
            <div class="text-start mb-4">
                <a href="/" class="btn btn-outline-primary">
                    <i class="bi bi-arrow-left me-2"></i>Continue Shopping
                </a>
            </div>
        </div>
        <div class="col-lg-4">
            <div class="card cart-summary">
                <div class="card-body">
                    <h5 class="card-title mb-4">Order Summary</h5>
                    <div class="d-flex justify-content-between mb-3">
                        <span>Sutotal</span>
                        <span>₹{getTotalCartOldPrice().toLocaleString("en-IN")}</span>
                    </div>
                    <div class="d-flex justify-content-between mb-3">
                        <span>Shipping</span>
                        <span>Free</span>
                    </div>
                    <div class="d-flex justify-content-between mb-3">
                        <span>Tax</span>
                        <span>₹20.00 GST</span>
                    </div>
                    <div class="d-flex justify-content-between mb-3">
                        <span>Discount</span>
                        <span>₹{(getTotalCartOldPrice()-getTotalCartPrice()).toLocaleString("en-IN")}</span>
                    </div>
                    <hr/>
                    <div class="d-flex justify-content-between mb-4">
                        <strong>Total</strong>
                        <strong>₹{getTotalCartPrice().toLocaleString("en-IN")}</strong>
                    </div>
                    <button class="btn btn-primary w-100">Proceed to Checkout</button>
                </div>
            </div>
            <div class="card mt-4">
                <div class="card-body">
                    <h5 class="card-title mb-3">Apply Promo Code&nbsp;&nbsp;<i class="fa-solid fa-tag"></i></h5>
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Enter promo code"/>
                        <button class="btn btn-outline-secondary" type="button">Apply</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
        </>
    )    
}
