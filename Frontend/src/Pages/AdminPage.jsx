import { React, useState, useEffect, useContext } from "react";
import axios from "axios";
import "../styles/adminPanel.css";
import { AuthContext } from "../ContextAPI/authContext";

export default function AdminPage(){
    const { user } = useContext(AuthContext); 
    const [products, setProducts] = useState([]);
    const [form, setForm] = useState({ full_name: "", brand_name:"", description:"", new_price: "", old_price: "", category: "", subcategory: "", image: "", discount: "", rating: "" });
    console.log("Logged-in user:", user);
    const config = {
        headers: {
          Authorization: `Bearer ${user?.token}`, // send token in headers
        },
    };
    useEffect(() => {
        if (user?.isAdmin) {
          fetchProducts();
        }
    }, [user]);
    
    useEffect(() => {
        fetchProducts();
    }, []);
    // GET
    const fetchProducts = async () => {
        const res = await axios.get("http://localhost:8080/api/products", config);
        setProducts(res.data);
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };
    // POST
    const addProduct = async (e) => {
        e.preventDefault();
        const payload = {
            ...form,
            new_price: Number(form.new_price),
            old_price: form.old_price ? Number(form.old_price) : 0,
            rating: form.rating ? Number(form.rating) : 0
        };
        await axios.post("http://localhost:8080/api/products", payload, config);
        setForm({ full_name: "", brand_name:"", description:"", new_price: "", old_price: "", category: "", subcategory: "", image: "", discount: "", rating: "" });
        fetchProducts();
    };
    // DELETE
    const deleteProduct = async (id) => {
        await axios.delete(`http://localhost:8080/api/products/${id}`, config);
        fetchProducts();
    };
    // PUT
    const updateProduct = async (id, updated) => {
        await axios.put(`http://localhost:8080/api/products/${id}`, updated, config);
        fetchProducts();
    };

    if (!user || !user.isAdmin) {
        return <p style={{ color: "red" }}>You are not authorized to view this page.</p>;
    }

    return (
        <div className="container mt-4 admin-container">
          <h2>Admin Panel - Products</h2>
    
          {/* Add Product Form */}
          <form onSubmit={addProduct} className="admin-form">
            <div className="form-row">
                <label>Name:</label>
                <input type="text" name="name" value={form.name} onChange={handleChange} required />
            </div>
            <div className="form-row">
                <label>Full Name:</label>
                <input type="text" name="full_name" value={form.full_name} onChange={handleChange} />
            </div>
            <div className="form-row">
                <label>Brand:</label>
                <input type="text" name="brand_name" value={form.brand_name} onChange={handleChange} />
            </div>
            <div className="form-row">
                <label>Category:</label>
                <input type="text" name="category" value={form.category} onChange={handleChange} required />
            </div>
            <div className="form-row">
                <label>SubCategory:</label>
                <input type="text" name="subcategory" value={form.subcategory} onChange={handleChange} />
            </div>
            <div className="form-row">
                <label>Description:</label>
                <textarea name="description" value={form.description} onChange={handleChange}></textarea>
            </div>
            <div className="form-row">
                <label>Image URL:</label>
                <input type="text" name="image" value={form.image} onChange={handleChange} />
            </div>
            <div className="form-row">
                <label>New Price:</label>
                <input type="number" name="new_price" value={form.new_price} onChange={handleChange} required />
            </div>
            <div className="form-row">
                <label>Old Price:</label>
                <input type="number" name="old_price" value={form.old_price} onChange={handleChange} />
            </div>
            <div className="form-row">
                <label>Discount:</label>
                <input type="text" name="discount" value={form.discount} onChange={handleChange} />
            </div>
            <div className="form-row">
                <label>Rating:</label>
                <input type="number" name="rating" value={form.rating} step="0.1" onChange={handleChange} />
            </div>
            <button type="submit" className="btn btn-success">Add Product</button>
        </form>

    
          {/* Product List */}
          <table className="table admin-table" border="1" cellPadding="8">
            <thead>
              <tr>
                <th>Name</th><th>Price</th><th>Category</th><th>Image</th><th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p) => (
                <tr key={p._id}>
                  <td>{p.full_name}</td>
                  <td>₹{p.new_price}</td>
                  <td>{p.category}</td>
                  <td><img src={p.image} alt={p.name} width="60" /></td>
                  <td>
                    <button type="button" className="btn btn-outline-primary btn-sm" onClick={() => deleteProduct(p._id)}>Delete</button>
                    <button type="button" className="btn btn-outline-secondary btn-sm" onClick={() => updateProduct(p._id, { ...p, price: p.price + 10 })}>
                      +₹10
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
}