import React, {createContext, useState, useEffect} from 'react';
import {login, signup} from '../services/auth';

export const AuthContext = createContext();

const AuthContextProvider = ({children}) => {
    const [token, setToken] = useState(sessionStorage.getItem('jwtToken'));

    useEffect(() => {
        sessionStorage.setItem('jwtToken', token);

    }, [token]);

    const handleLogin = async (email, password) => {
        try {
            const response = await login(email, password);
            setToken(response.token);
        } catch (error) {
            console.log(error);
        }
    };

    const handleSignup = async (name, email, password) => {
        try {
            const response = await signup(name, email, password);
            setToken(response.token);

        } catch (error) {
            console.log(error);
        }
    };

    const handleLogout = () => {
        setToken(null);
        sessionStorage.removeItem('jwtToken');
    };

    const value = {
        token,
        handleLogin,
        handleSignup,
        handleLogout,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
