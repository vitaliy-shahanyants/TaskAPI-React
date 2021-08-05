import {Dispatch} from "react";
import {REGISTER_SUCCESS,REGISTER_FAIL,REGISTER_LOADING,RegisterActionDispatch,RegisterResponse} from "./RegisterActionType";
import axios from "axios";
import {LINKS} from "../../util/ApiLinks";
import {LoginResponse} from "../login/LoginActionType";
type Response = {
    data: {
        token?:string|null,
        success:boolean|null,
        errors:[]|null,
    }

}
export const RegisterDispatch = (email:string,user:string,password:string) => (dispatch:Dispatch<RegisterActionDispatch>) =>{
    try{
        dispatch({
            type:REGISTER_LOADING
        });

        axios.post(LINKS.register, {
            password:password,
            username:user,
            email:email,
        },{
            params:{
                password:password,
                username:user,
                email:email,
            },
            headers: {
                'Content-Type': 'application/json'
            }

        }).then((data:Response)=>{

            const res:RegisterResponse = {
                response: {
                    errors:data.data.errors,
                    success: data.data.success,
                    token: data.data.token},
                success: true
            }
            if (res.response.token != null)
                localStorage.setItem('access_token',res.response.token);
            dispatch({
                type:REGISTER_SUCCESS,
                payload:res
            });
        }).catch((error)=>{
            console.log(error.response.data);
            const res:RegisterResponse = {
                response: {
                    errors:error.response.data.errors,
                    success: error.response.data.success,
                    token: error.response.data.token},
                success: false
            }
            dispatch({
                type:REGISTER_FAIL,
                payload:res,
            });
        });
    }catch{
        const res:RegisterResponse = {
            response: {
                errors:null,
                success: false,
                token:null},
            success: false
        }
        dispatch({
            type:REGISTER_FAIL,
            payload:res,
        });
    }
}
