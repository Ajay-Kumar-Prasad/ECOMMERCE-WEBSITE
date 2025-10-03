import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import axios from "axios";
import "../styles/CategoryItems.css";

export default function SearchResults() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const q = queryParams.get("q");

  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!q) return;

    const fetchResults = async () => {
      setLoading(true);
      try {
        const res = await axios.get("http://localhost:8080/api/products/search", {
          params: { q },
        });
        setResults(res.data);
      } catch (err) {
        console.error("Search error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [q]);

  if (loading) return <p>Loading..</p>;

  return (
    <div className="container mt-4">
      <h3>Search results for "{q}"</h3>
      {results.length === 0 && <p>No products found</p>}
      <div className="list-category row row-cols-lg-6 row-cols-md-3 row-cols-sm-1 mt-3">
        {results.map((item) => (
          <div key={item._id} className="col-md-3 mb-3">
            <Link to={`/${item.category}/${item.subcategory}/${item._id}`} style={{ textDecoration: "none", color: "black" }}>
              <div className="card card-product">
                <img src={item.image} className="card-img-top card-image" alt={item.name} />
                <div className="card-body">
                    <p class="card-text">
                        <b>{item.name}</b><br />
                        ₹{item.new_price.toLocaleString("en-IN")}&nbsp;
                        <a style={{color:"green"}}>{item.discount}</a>&nbsp;
                        <a style={{textDecoration:"line-through",color:'red'}}>₹{item.old_price.toLocaleString("en-IN")}</a>
                    </p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
