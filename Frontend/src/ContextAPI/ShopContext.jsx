import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

// Create Context
export const ShopContext = createContext(null);

const ShopContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]); // products from backend
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : {};
  });

  // Fetch products from backend API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:8080/api/products");
        setProducts(res.data);

        // Optionally, initialize cart for products not in localStorage
        const defaultCart = {};
        res.data.forEach(p => {
          if (!cartItems[p._id]) defaultCart[p._id] = 0;
        });
        setCartItems(prev => ({ ...defaultCart, ...prev }));
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };
    fetchProducts();
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // Add item to cart
  const addToCart = (productId) => {
    setCartItems((prev) => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1,
    }));
  };

  // Remove item from cart
  const removeFromCart = (productId) => {
    setCartItems((prev) => {
      if (!prev[productId]) return prev;
      const newCart = { ...prev };
      if (newCart[productId] === 1) {
        delete newCart[productId]; // remove item if qty = 1
      } else {
        newCart[productId] -= 1;
      }
      return newCart;
    });
  };

  // Get total items count
  const getTotalItems = () => {
    return Object.values(cartItems).reduce((acc, qty) => acc + qty, 0);
  };
  // Get total price (new price)
const getTotalPrice = () => {
  return Object.entries(cartItems).reduce((acc, [id, qty]) => {
    const product = products.find((p) => p._id === id); 
    return product ? acc + product.new_price * qty : acc;
  }, 0);
};

// Get total MRP (old price)
const getTotalOldPrice = () => {
  return Object.entries(cartItems).reduce((acc, [id, qty]) => {
    const product = products.find((p) => p._id === id); 
    return product ? acc + product.old_price * qty : acc;
    }, 0);
  };
  const contextValue = {
    products,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalItems,
    getTotalPrice,
    getTotalOldPrice,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
