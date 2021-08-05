import {
    LOGIN_FAIL,
    LOGIN_LOADING,
    LOGIN_LOGOUT,
    LOGIN_SUCCESS,
    LoginAction,
    LoginResponse
} from "../login/LoginActionType";

interface IDefaultState{
    loading:boolean,
    error?:boolean,
    login?:LoginResponse,
    loggedin?:boolean,
}
const defaultState:IDefaultState = {
    loading: false

}
const loginReducer = (state:IDefaultState = defaultState,action:LoginAction):IDefaultState => {
    switch (action.type){
        case LOGIN_LOADING:{
            return {
                loading: true,
            }
        }
        case LOGIN_FAIL: {
            return{
                loading: false,
                error: true
            }
        }
        case LOGIN_SUCCESS:{
            return{
                loading: false,
                error: false,
                login: action.payload,
                loggedin:true,
            }
        }
        case LOGIN_LOGOUT: {
            return{
                loading: false,
                error: false,
                loggedin:false,
            }
        }
        default: return state;
    }
}

export default loginReducer;
