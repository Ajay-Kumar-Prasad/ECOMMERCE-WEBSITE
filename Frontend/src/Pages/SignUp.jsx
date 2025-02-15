import React,{ useState ,useContext}  from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { AuthContext } from "../ContextAPI/authContext";
import '../Pages/CSS/SignIn.css';

export default function SignUp(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setUser, setToken, setIsAuthenticated } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/auth/signup', { name, email, password });
            const { token, user } = response.data;
            localStorage.setItem("token", token);
            setUser(user);
            setToken(token);
            setIsAuthenticated(true);
            alert('Signup successful!');
            navigate("/");
        } catch (error) {
            alert(error.response.data.message);
        }
    };

    return(
        <div class="row mt-3">
        <h2 class="col-6 offset-3">Signup</h2>
        <div class="col-6 offset-3">
            <form class="needs-validation" novalidate onSubmit={handleSignup}>
                <div class="mb-3">
                    <label for="username" class="form-label">Username</label>
                    <input name="username" id="username" value={name} type="text" class="form-control" onChange={(e) => setName(e.target.value)} required />
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input name="email" id="email" value={email} type="email" class="form-control" onChange={(e) => setEmail(e.target.value)} required/>
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input name="password" id="password" value={password} type="password" class="form-control" onChange={(e) => setPassword(e.target.value)} required/>
                </div>
                <button type="submit" class="btn btn-success">Signup</button>
            </form>
        </div>
    </div>
    )
}