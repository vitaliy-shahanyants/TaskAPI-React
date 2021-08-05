import React,{useState} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import './Login.css';
import{LoginDispatch} from "../../redux/login/LoginActionDispatch";
import {AppState} from "../../redux/reducers";
export default () => {
    const dispatch = useDispatch();
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const login = useSelector((state:AppState) => state.login);
    const handleUsername = (e: React.ChangeEvent<HTMLInputElement>) => setUser(e.target.value)
    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        //dispatch(Login(username,password));
        dispatch(LoginDispatch(user,password));
    }
    console.log(login);
    return(
        <div className="container">
            {login?.login?.success ? <Redirect to="/home" />:""}
            <br /><br /><br />
            <div className="row Login-Form">
                <h4><strong>Login to Task API</strong></h4>
                <form onSubmit={handleSubmit}>
                    {login?.error ?
                        <div className="alert alert-danger" role="alert">
                            There was an issue logging in
                        </div>
                        :""}
                    {login?.login?.response.errors ?
                        <div className="alert alert-danger" role="alert">
                            There was an issue logging in
                        </div>
                        :""}

                    <div className="form-group Login-Form-Group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" value={user} onChange={handleUsername} className="form-control" placeholder="Enter email" />
                    </div>
                    <div className="form-group Login-Form-Group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" value={password} onChange={handlePassword} className="form-control"
                               placeholder="Password" />
                    </div>
                    <br />
                    <button type="submit" className="btn btn-primary Login-Button">Submit</button>
                    <div className="Login-SignUp-Link">
                        <Link to="/register">Sign Up for an account</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
