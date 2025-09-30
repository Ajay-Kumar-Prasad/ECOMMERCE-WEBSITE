import React, { createContext, useState } from "react";

// Import product data
import all_products from "../data/All_Product";
import men_data from "../data/MenCategory";
import women_data from "../data/WomenCategory";

import kids_data from "../data/KidsCategory";

// Create Context
export const ShopContext = createContext(null);

// Merge all product sources
const cartProduct = [...all_products, ...men_data, ...women_data, ...kids_data];

// ✅ Initialize cart with product.id as key
const getDefaultCart = () => {
  let cart = {};
  cartProduct.forEach((product) => {
    cart[product.id] = 0;
  });
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  // Add item to cart
  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));
  };

  // Remove item from cart
  const RemoveFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: Math.max((prev[itemId] || 0) - 1, 0), // Prevent negatives
    }));
  };

  // Get total price of new prices
  const getTotalCartPrice = () => {
    let totalPrice = 0;
    for (let itemId in cartItems) {
      if (cartItems[itemId] > 0) {
        let itemInfo = cartProduct.find(
          (product) => product.id === Number(itemId)
        );
        if (itemInfo) {
          totalPrice += itemInfo.new_price * cartItems[itemId];
        }
      }
    }
    return totalPrice;
  };

  // Get total old price (MRP)
  const getTotalCartOldPrice = () => {
    let totalOldPrice = 0;
    for (let itemId in cartItems) {
      if (cartItems[itemId] > 0) {
        let itemInfo = cartProduct.find(
          (product) => product.id === Number(itemId)
        );
        if (itemInfo) {
          totalOldPrice += itemInfo.old_price * cartItems[itemId];
        }
      }
    }
    return totalOldPrice;
  };

  // Get total number of items in cart
  const getTotalCartItem = () => {
    let total_item = 0;
    for (let itemId in cartItems) {
      if (cartItems[itemId] > 0) {
        total_item += cartItems[itemId];
      }
    }
    return total_item;
  };

  // Context values
  const contextValue = {
    getTotalCartOldPrice,
    getTotalCartItem,
    getTotalCartPrice,
    all_products,
    men_data,
    women_data,
    kids_data,
    cartProduct,
    cartItems,
    addToCart,
    RemoveFromCart,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
