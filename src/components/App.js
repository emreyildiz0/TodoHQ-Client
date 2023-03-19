import React, {useContext} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {AuthContext} from '../context/AuthContext';
import Login from './auth/Login';
import Signup from './auth/Signup';
import Todos from './todos/TodoApp';
const isLoggedIn = (token) => token && token !== "null"

function App() {
    const {token} = useContext(AuthContext);

    return (
        <Switch>
            <Route exact path="/">
                {isLoggedIn(token) ? <Redirect to="/todos"/> : <Redirect to="/login"/>}
            </Route>
            <Route exact path="/login">
                {isLoggedIn(token) ? <Redirect to="/todos"/> : <Login/>}
            </Route>
            <Route exact path="/signup">
                {isLoggedIn(token) ? <Redirect to="/todos"/> : <Signup/>}
            </Route>
            <Route exact path="/todos">
                {isLoggedIn(token) ? <Todos/> : <Redirect to="/login"/>}
            </Route>
            <Redirect to="/"/>
        </Switch>
    );
}


export default App;
