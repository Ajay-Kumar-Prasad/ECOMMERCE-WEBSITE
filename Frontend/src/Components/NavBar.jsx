import React, { useState, useContext, useEffect } from "react";
import "../styles/NavBar.css";
import { Link, useNavigate } from "react-router-dom";
import { ShopContext } from "../ContextAPI/ShopContext";
import { AuthContext } from "../ContextAPI/authContext";
import axios from "axios";

export default function NavBar() {
  const [menu, setMenu] = useState("");
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  const { getTotalCartItem, cartProduct } = useContext(ShopContext);
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");

  const handleSelectCategory = (category, subcategory) => {
    setSelectedCategory(category);
    setSelectedSubcategory(subcategory);
  };
  
  useEffect(() => {
    if (!search.trim()) {
      setResults([]);
      return;
    }

    const fetchResults = async () => {
      try {
        const res = await axios.get("http://localhost:8080/api/products/search", {
          params: {
            q: search,
            category: selectedCategory,
            subcategory: selectedSubcategory
          }
        });
        setResults(res.data);
      } catch (err) {
        console.error("Search error:", err);
      }
    };

    const debounce = setTimeout(fetchResults, 300);
    return () => clearTimeout(debounce);
  }, [search, selectedCategory, selectedSubcategory]);

  const onSearchClick = (searchItem) => {
    if (!searchItem.trim()) return;
    navigate(`/search?q=${searchItem}`);
    setResults([]);
    setSearch(searchItem);
  };

  const navStyles = { textDecoration: "none", color: "black" };

  const handleLogout = () => {
    logout();
    navigate("/login");
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
              <form
                className="d-flex flex-grow-1 position-relative"
                role="search"
                onSubmit={(e) => {
                  e.preventDefault();
                  onSearchClick(search);
                }}
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
                  onClick={() => onSearchClick(search)}
                >
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>

                {/* Search Dropdown */}
                {/* Dropdown */}
                {search.trim() !== "" && (
                  <div className="search-dropdown">
                    {results.length > 0 ? (
                      results.map((item) => (
                        <Link
                          key={item._id}
                          to={`/${item.category}/${item.subcategory}/${item._id}`}
                          style={navStyles}
                          onClick={() => setSearch("")}
                        >
                          <div className="dropdown-item d-flex align-items-center">
                            <img
                              src={item.image}
                              alt={item.name}
                              width="40"
                              height="40"
                              style={{ objectFit: "cover", marginRight: "10px" }}
                            />
                            <div>
                              <p className="m-0">{item.full_name}</p>
                              <small className="text-muted">₹{item.new_price}</small>
                            </div>
                          </div>
                        </Link>
                      ))
                    ) : (
                      <p className="p-2 text-muted">No products found</p>
                    )}
                  </div>
                )}
              </form>
            </div>


            {/* Main Links */}
            <div className="navbar-nav nav-list">
              <Link className="nav-link" to="/" onClick={() => setMenu("Home")} style={navStyles}>
                Home {menu === "Home" && <i className="fa-solid fa-caret-down"></i>}
              </Link>
              <Link className="nav-link" to="/men" onClick={() => setMenu("Men")} style={navStyles}>
                Men {menu === "Men" && <i className="fa-solid fa-caret-down"></i>}
              </Link>
              <Link className="nav-link" to="/women" onClick={() => setMenu("Women")} style={navStyles}>
                Women {menu === "Women" && <i className="fa-solid fa-caret-down"></i>}
              </Link>
              <Link className="nav-link" to="/kids" onClick={() => setMenu("Kids")} style={navStyles}>
                Kids {menu === "Kids" && <i className="fa-solid fa-caret-down"></i>}
              </Link>

              {/* Auth Buttons */}
              {user ? (
                <>
                  <i class="fa-solid fa-circle-user" style={{fontSize:"25px",fontWeight:"bold",color:"#064D75"}}></i> <p><a style={{fontSize:"small"}}>Welcome!</a><br /><span className="navbar-user">{user.name}</span></p>
                  <button className="btn btn-outline-danger" onClick={handleLogout}>
                    Sign Out
                  </button>
                </>
              ) : (
                <>
                  <Link to="/register">
                    <button className="btn btn-signin">SignUp</button>
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
              {["Best-Deals", "bestsellers", "smartphones", "fashion", "electronics"].map((link) => (
                <Link key={link} style={navStyles} to={`/${link.toLowerCase()}`}>
                  <li className="nav-item nav-link">{link.replace("-", " ")}</li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
