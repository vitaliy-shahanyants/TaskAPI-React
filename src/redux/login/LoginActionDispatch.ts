import {Dispatch} from "react";
import {
    LOGIN_FAIL,
    LOGIN_LOADING,
    LOGIN_SUCCESS,
    LoginAction,
    LoginResponse,
    UserDetail
} from "../login/LoginActionType";
import axios from "axios";
import {LINKS} from "../../util/ApiLinks";
type Response = {
    data: {
        token?:string|null,
        success:boolean|null,
        errors:[]|null,
    }

}
export const LoginDispatch = (user:string,password:string) => (dispatch:Dispatch<LoginAction>) =>{
    try{
        dispatch({
            type:LOGIN_LOADING
        });

        axios.post(LINKS.login, {
            password:password,
            email:user
        },{
            params:{
                password:password,
                email:user
            },
            headers: {
                'Content-Type': 'application/json'
            }

        }).then((data:Response)=>{
            const res:LoginResponse = {
                response: {
                    errors:data.data.errors,
                    success: data.data.success,
                    token: data.data.token},
                success: true
            }
            if (res.response.token != null)
                localStorage.setItem('access_token',res.response.token);
            dispatch({
                type:LOGIN_SUCCESS,
                payload:res
            });
        }).catch(()=>{
            dispatch({
                type:LOGIN_FAIL
            });
        });
    }catch{
        dispatch({
            type:LOGIN_FAIL
        });
    }
}
