export const REGISTER_SUCCESS= 'LOGIN_SUCCESS';
export const REGISTER_FAIL = 'REGISTER_FAIL';
export const REGISTER_LOADING = 'REGISTER_LOADING';


export type UserDetail = {
    username:string,
    password:string,
    email:string
}
export type RegisterResponse = {
    response: {
        token?: string|null,
        success: boolean|null,
        errors:[]|null
    },
    success: boolean|string
}

export interface IRegisterSuccess {
    type:typeof REGISTER_SUCCESS
    payload:RegisterResponse
}
export interface IRegisterFail {
    type:typeof REGISTER_FAIL,
    payload:RegisterResponse
}
export interface IRegisterLoading {
    type:typeof REGISTER_LOADING
}
export type RegisterActionDispatch = IRegisterSuccess | IRegisterFail | IRegisterLoading;
