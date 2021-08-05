import {Dispatch} from "react";
import {LOGIN_LOGOUT, LoginAction} from "../login/LoginActionType";

export const Logout = () => async (dispatch:Dispatch<LoginAction>) => {

    localStorage.clear();

    dispatch({
        type:LOGIN_LOGOUT,
    })

}
