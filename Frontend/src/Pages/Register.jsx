import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../ContextAPI/authContext";
import "../styles/Register.css";
import googleLogo from "../assets/google-logo.png";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const { setUser, setToken, setIsAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!agree) {
      alert("You must agree to the Terms & Privacy Policy");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8080/api/auth/signup", {
        name,
        email,
        password,
      });

      const { token, user } = response.data;
      localStorage.setItem("token", token);

      setUser(user);
      setToken(token);
      setIsAuthenticated(true);

      alert("Signup successful!");
      navigate("/");
    } catch (error) {
      alert(error.response?.data?.message || "Signup failed!");
    }
  };

  const handleGoogleSignup = () => {
    alert("Google Signup clicked! Implement OAuth flow here.");
    //integrate Google OAuth
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form className="needs-validation" noValidate onSubmit={handleSignup}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            id="username"
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            id="password"
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="form-check mb-3">
          <input
            id="agree"
            type="checkbox"
            className="form-check-input"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
          />
          <label htmlFor="agree" className="form-check-label">
            I agree to the <a href="/terms">Terms & Privacy Policy</a>
          </label>
        </div>

        <button type="submit" className="btn btn-success">
          Signup
        </button>
      </form>
      <p className="divider">or</p>
      {/* Google Signup */}
      <button type="button" className="btn-google" onClick={handleGoogleSignup}>
        <img src={googleLogo} alt="Google Logo" />
        Sign up with Google
      </button>
      <p className="login-link">
        Already have an account? <a href="/login">Login</a>
      </p>
    </div>
  );
}
