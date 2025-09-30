import React, { useState, useContext } from "react";
import "../styles/NavBar.css";
import { Link } from "react-router-dom";
import { ShopContext } from "../ContextAPI/ShopContext";
import { AuthContext } from "../ContextAPI/authContext";

export default function NavBar() {
  const [menu, setMenu] = useState("");
  const [search, setSearch] = useState("");

  const { getTotalCartItem, cartProduct } = useContext(ShopContext);
  const { isAuthenticated, logout } = useContext(AuthContext);

  const onSearch = (searchItem) => {
    setSearch(searchItem);
    console.log("search", searchItem);
  };

  const navStyles = {
    textDecoration: "none",
    color: "black",
  };

  return (
    <>
      {/* Top Navbar */}
      <nav className="navbar navbar-expand-md bg-body-tertiary bottom-border sticky-top">
        <div className="container-fluid">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <i className="fa-solid fa-scale-unbalanced-flip me-2"></i>
            <h6 className="m-0">Shopify</h6>
          </Link>

          {/* Mobile Toggle */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Nav Items */}
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              {/* Search Bar */}
              <form
                className="d-flex flex-grow-1 position-relative"
                role="search"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  className="form-control me-3 search-inp flex-grow-1"
                  type="search"
                  placeholder="Search For Products"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  aria-label="Search"
                />
                <button
                  className="btn btn-search"
                  type="submit"
                  onClick={() => onSearch(search)}
                >
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>

                {/* Search Dropdown */}
                {search.trim() !== "" && cartProduct.length > 0 && (
                  <div className="search-dropdown">
                    {cartProduct
                      .filter((item) => {
                        const input = search.toLowerCase();
                        const name = item.full_name.toLowerCase();
                        return (
                          input &&
                          name.startsWith(input) &&
                          name !== input
                        );
                      })
                      .slice(0, 10)
                      .map((item) => (
                        <Link
                          key={item.id}
                          to={`/product/${item.id}`}
                          style={{ textDecoration: "none", color: "black" }}
                          onClick={() => onSearch(item.full_name)}
                        >
                          <li className="dropdown-list">{item.full_name}</li>
                        </Link>
                      ))}
                  </div>
                )}
              </form>
            </div>

            {/* Main Links */}
            <div className="navbar-nav nav-list">
              <Link
                className="nav-link"
                to="/"
                onClick={() => setMenu("Home")}
                style={navStyles}
              >
                Home {menu === "Home" && <i className="fa-solid fa-caret-down"></i>}
              </Link>
              <Link
                className="nav-link"
                to="/men"
                onClick={() => setMenu("Men")}
                style={navStyles}
              >
                Men {menu === "Men" && <i className="fa-solid fa-caret-down"></i>}
              </Link>
              <Link
                className="nav-link"
                to="/women"
                onClick={() => setMenu("Women")}
                style={navStyles}
              >
                Women {menu === "Women" && <i className="fa-solid fa-caret-down"></i>}
              </Link>
              <Link
                className="nav-link"
                to="/kids"
                onClick={() => setMenu("Kids")}
                style={navStyles}
              >
                Kids {menu === "Kids" && <i className="fa-solid fa-caret-down"></i>}
              </Link>

              {/* Auth Buttons */}
              {isAuthenticated ? (
                <button className="btn btn-signin" onClick={logout}>
                  Logout
                </button>
              ) : (
                <>
                  <Link to="/register">
                    <button className="btn btn-signin">
                      SignUp
                    </button>
                  </Link>
                  <Link to="/login">
                    <button className="btn btn-signin">Login</button>
                  </Link>
                </>
              )}

              {/* Cart Icon */}
              <Link to="/cart" className="nav-link cart-logo position-relative">
                <i className="fa-solid fa-cart-shopping"></i>
                {getTotalCartItem() > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
                    {getTotalCartItem()}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Bottom Navbar */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div className="collapse navbar-collapse nav-bottom" id="navbarNav">
            <ul className="navbar-nav">
              <Link style={navStyles} to="/Best-Deals">
                <li className="nav-item nav-link">Today's Deals</li>
              </Link>
              <Link style={navStyles} to="/bestsellers">
                <li className="nav-item nav-link">BestSellers</li>
              </Link>
              <Link style={navStyles} to="/smartphones">
                <li className="nav-item nav-link">Mobiles</li>
              </Link>
              <Link style={navStyles} to="/fashion">
                <li className="nav-item nav-link">Fashion</li>
              </Link>
              <Link style={navStyles} to="/electronics">
                <li className="nav-item nav-link">Electronics</li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
