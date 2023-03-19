import React, {useContext, useState} from 'react';
import {AuthContext} from '../../context/AuthContext';
import {useHistory} from "react-router-dom";
import { ReactComponent as Check } from '../../assets/group.svg';

const Login = () => {
    const {handleLogin} = useContext(AuthContext);
    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        handleLogin(email, password);
    };

    return (
        <div className="container">
            <Check/>
            <div className="p-margin-top-2 title">Welcome back!</div>
            <div className="subtitle p-margin-top-1">Log in to continue.</div>
            <div>
                <input type="email"
                       className="input p-margin-top-3"
                       placeholder="Email"
                       value={email}
                       onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div>
                <input type="password"
                       className="input"
                       placeholder="Password"
                       value={password}
                       onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <div className="nav" onClick={() => {
                history.push("signup")
            }}>Don't have an account? Sign up
            </div>
            <div className="button" onClick={() => {
                handleSubmit()
            }}>Log In
            </div>
        </div>
    );
};

export default Login;
