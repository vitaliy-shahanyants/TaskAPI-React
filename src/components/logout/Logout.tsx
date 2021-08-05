import React,{useState,useEffect} from "react";
import {useSelector,useDispatch} from "react-redux";

import {Redirect} from "react-router-dom";
import {Logout} from '../../redux/logout/LogoutDispatch';
import LoginCheck from "../../redux/login/LoginCheck";
import {AppState} from "../../redux/reducers";


export default () =>{
    const dispatch = useDispatch();
    const login = useSelector((state:AppState) => state.login);
    useEffect(() =>{
        if(LoginCheck()){

            dispatch(Logout());
        }
    })
    return(
        <div className="container">
            {(LoginCheck()) ? "" : <Redirect to="/" />}
        </div>
    )
}
