import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./ContextAPI/authContext";

// Components
import NavBar from "./Components/NavBar.jsx";
import Footer from "./Components/Footer.jsx";
import SearchResults from "./Components/searchResults.jsx";

// Pages
import Home from "./Pages/Home.jsx";   
import Cart from "./Pages/Cart.jsx";
import Checkout from "./Pages/Checkout.jsx";
import Orders from "./Pages/Orders.jsx";
import Login from "./Pages/Login.jsx";
import Register from "./Pages/Register.jsx";
import Products from './Pages/Products.jsx'

// Categories
import WomenCategories from './Pages/CategoryPages/WomenCategories.jsx';
import MenCategories from './Pages/CategoryPages/MenCategories.jsx';
import KidsCategories from './Pages/CategoryPages/KidsCategories.jsx';
import Listing from "./Pages/CategoryPages/Listing.jsx";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <NavBar />

        <div className="Nav-hidden" />

        <Routes>
          {/* Landing / Home */}
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchResults />} />

          {/* Dynamic category/subcategory listing */}
          <Route path="/women" element={<WomenCategories category="women"/>} />
          <Route path="/men" element={<MenCategories category="men" />} />
          <Route path="/kids" element={<KidsCategories category="kids"/>} />
          {/* Product detail */}
          <Route path="/:category/:subcategory/:productId" element={<Products />} />
          <Route path="/:category/:subcategory?" element={<Listing />} />

          {/* Cart / Checkout / Orders */}
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/orders" element={<Orders />} />

          {/* Auth */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
