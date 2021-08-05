import React,{useState} from "react";
import {Link, Redirect} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import './Login.css';
import {AppState} from "../../redux/reducers";
import {RegisterDispatch} from "../../redux/register/RegisterDispatch";


export default () => {
    const dispatch = useDispatch();
    const [username,setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const register = useSelector((state:AppState) => state.register);
    const handleUsername = (e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)
    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)
    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(RegisterDispatch(email,username,password))
    }
    console.log(register);

    return(
        <div className="container">
            {register?.login?.success ? <Redirect to="/home" />:""}
            <br /><br /><br />
            <div className="row Login-Form">
                <h4><strong>Register to Task API</strong></h4>
                <form onSubmit={handleSubmit}>
                    {register?.error ?
                        <div className="alert alert-danger" role="alert">
                            Issue Registering
                        </div>
                        :""}
                    {register?.login?.response.success == false ?
                        <div className="alert alert-danger" role="alert">
                            {register.login?.response.errors != null ?
                                <ul>
                                    {register.login?.response.errors.map(e=>{
                                        return<li>{e}</li>
                                    })}
                                </ul>

                                :""
                            }
                        </div>
                        :""}
                    <div className="form-group Login-Form-Group">
                        <label htmlFor="exampleInputEmail1">Username</label>
                        <input type="text" value={username} onChange={handleUsername} className="form-control" placeholder="Username" />
                    </div>

                    <div className="form-group Login-Form-Group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" value={email} onChange={handleEmail} className="form-control" placeholder="Enter email" />
                    </div>
                    <div className="form-group Login-Form-Group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" value={password} onChange={handlePassword} className="form-control"
                               placeholder="Password" />
                    </div>
                    <br />
                    <button type="submit" className="btn btn-primary Login-Button">Register</button>

                </form>
            </div>
        </div>
    );
}
