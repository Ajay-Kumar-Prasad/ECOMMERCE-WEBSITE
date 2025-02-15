import React,{ useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { AuthContext } from '../ContextAPI/authContext';
import '../Pages/CSS/SignIn.css';
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

    return(
        <div class="row mt-3">
            <h2 class="col-6 offset-3">Login!</h2>
            <div class="col-6 offset-3">
                <form class="needs-validation" onSubmit={handleLogin} novalidate>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email</label>
                        <input name="email" id="email" value={email} type="email" class="form-control" onChange={(e) => setEmail(e.target.value)} required/>
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Password</label>
                        <input name="password" id="password" value={password} type="password" class="form-control" onChange={(e) => setPassword(e.target.value)} required/>
                    </div>
                    <button class="btn btn-success">Login</button>
                </form>
            </div>
        </div>
    )
}