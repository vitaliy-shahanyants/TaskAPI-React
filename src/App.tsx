import React, {Dispatch} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";

import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Category from "./components/category/Category";
import Login from "./components/login/Login";
import LoginCheck from "./redux/login/LoginCheck";
import Logout from "./components/logout/Logout";
import {LoginAction} from "./redux/login/LoginActionType";
import {useDispatch, useSelector} from "react-redux";
import {AppState} from "./redux/reducers";
import Register from "./components/register/Register";
const App = () => {
    const dispatch = useDispatch<Dispatch<LoginAction>>();
    const login = useSelector((state: AppState) => state.login);
    return (
        <Router>
            <div className="App App-Container container-fluid">
                <nav className="navbar navbar-expand-lg navbar-light  App-NavBar">
                    <Link to="/" className="navbar-brand" href="#">
                        <img src="./logo.png" width="100" />
                    </Link>
                    <div className="App-Nav-Div-Right" >
                        {LoginCheck() ?
                            <Link to="/logout" className="nav-link App-Nav-Text">
                                Logout
                            </Link>
                            :
                            <Link to="/login" className="nav-link App-Nav-Text">
                                Login&nbsp; <i className="fas fa-user-circle"></i>
                            </Link>}



                    </div>
                </nav>

                <Switch>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/register">
                        <Register />
                    </Route>
                    <Route path="/logout">
                        <Logout />
                    </Route>
                    <Route path="/category">
                        <Category />
                    </Route>
                    <Route path="/">
                        <Category />
                    </Route>
                </Switch>
            </div>
        </Router>

    );
}

export default App;
