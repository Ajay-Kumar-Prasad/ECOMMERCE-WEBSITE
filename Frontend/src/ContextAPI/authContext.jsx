import { createContext, useState, useEffect } from 'react';
export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        if (token) {
            setIsAuthenticated(true);
            // Fetch user details if needed
        } else {
            setIsAuthenticated(false);
        }
    }, [token]);

    const login = (newToken) => {
        setToken(newToken);
        localStorage.setItem("token", newToken);
        setIsAuthenticated(true);
    };
    const logout = () => {
        setToken(null);
        setUser(null);
        localStorage.removeItem("token");
        setIsAuthenticated(false);
    };
    return (
        <AuthContext.Provider value={{ user, setUser, token, setToken,login, logout, isAuthenticated  }}>
            {children}
        </AuthContext.Provider>
    );
};