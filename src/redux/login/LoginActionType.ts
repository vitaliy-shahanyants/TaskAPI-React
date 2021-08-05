export const LOGIN_SUCCESS= 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOGIN_LOADING = 'LOGIN_LOADING';
export const LOGIN_LOGOUT = 'LOGIN_LOGOUT';


export type UserDetail = {
    username:string,
    password:string,
    email:string
}
export type LoginResponse = {
    response: {
        token?: string|null,
        success: boolean|null,
        errors:[]|null
    },
    success: boolean|string
}

export interface ILoginSuccess {
    type:typeof LOGIN_SUCCESS
    payload:LoginResponse
}
export interface ILoginFail {
    type:typeof LOGIN_FAIL
}
export interface ILoginLogout {
    type:typeof LOGIN_LOGOUT
}
export interface ILoginLoading {
    type:typeof LOGIN_LOADING
}
export type LoginAction = ILoginSuccess | ILoginFail | ILoginLogout | ILoginLoading;
