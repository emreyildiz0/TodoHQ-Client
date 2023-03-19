import React, {useContext, useState} from 'react';
import {AuthContext} from '../../context/AuthContext';
import {useHistory} from "react-router-dom";
import { ReactComponent as Check } from '../../assets/group.svg';

const Signup = () => {
    const {handleSignup} = useContext(AuthContext);
    const history = useHistory();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        handleSignup(name, email, password);
    };

    return (
        <div className="container">
            <Check/>
            <div className="title p-margin-top-2 ">Welcome!</div>
            <div className="subtitle p-margin-top-1">Sign up to start using Simpledo today.</div>
            <div>
                <input type="text"
                       className="input p-margin-top-3"
                       placeholder="Full Name"
                       value={name}
                       onChange={(e) => setName(e.target.value)}/>
            </div>
            <div>
                <input type="email"
                       className="input"
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
                history.push("login")
            }}>Do have an account? Sign in.
            </div>
            <div className="button" onClick={() => {
                handleSubmit()
            }}>Sign Up
            </div>
        </div>
    );
};

export default Signup;
