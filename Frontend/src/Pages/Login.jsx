import React,{ useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { AuthContext } from '../ContextAPI/authContext';
import '../styles/Register.css';
import googleLogo from "../assets/google-logo.png";

export default function Login(){
    const { setUser, setToken } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:8080/api/auth/login', { email, password });
            setUser(res.data.user);
            setToken(res.data.token);
            localStorage.setItem('token', res.data.token);
            alert('Login successful!');
            navigate("/");
        } catch (error) {
            alert(error.response.data.message);
        }
    };
    const handleGoogleLogin = () => {
        alert("Google Login clicked! Implement OAuth flow here.");
    };
    return(
        <div className="register-container">
              <h2>Login</h2>
              <form className="needs-validation" noValidate onSubmit={handleLogin}>
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
        
                <button type="submit" className="btn btn-success">
                  Login
                </button>
              </form>
              <p className="divider">or</p>
              {/* Google Signup */}
              <button type="button" className="btn-google" onClick={handleGoogleLogin}>
                <img src={googleLogo} alt="Google Logo" />
                Login with Google
              </button>
              <p className="login-link">
                Don't have an account? <a href="/register"> Register</a>
              </p>
            </div>
    )
}