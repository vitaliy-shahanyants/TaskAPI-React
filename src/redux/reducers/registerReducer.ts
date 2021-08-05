import {REGISTER_SUCCESS,REGISTER_LOADING,REGISTER_FAIL,RegisterResponse,RegisterActionDispatch} from "../register/RegisterActionType";

interface IDefaultState{
    loading:boolean,
    error?:boolean,
    login?:RegisterResponse,
}
const defaultState:IDefaultState = {
    loading: false

}
const registerReducer = (state:IDefaultState = defaultState,action:RegisterActionDispatch):IDefaultState => {
    switch (action.type){
        case REGISTER_LOADING:{
            return {
                loading: true,
            }
        }
        case REGISTER_FAIL: {
            return{
                loading: false,
                error: true,
                login: action.payload
            }
        }
        case REGISTER_SUCCESS:{
            return{
                loading: false,
                error: false,
                login: action.payload
            }
        }
        default: return state;
    }
}

export default registerReducer;
