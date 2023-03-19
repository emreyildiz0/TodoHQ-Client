import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import TodoContextProvider from './context/TodoContext';
import App from './components/App';
import "./styles/index.css"
import AuthContextProvider from "./context/AuthContext";

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <AuthContextProvider>
                <TodoContextProvider>
                    <App/>
                </TodoContextProvider>
            </AuthContextProvider>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);
