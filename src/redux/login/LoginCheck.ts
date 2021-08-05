import jwt_decode from "jwt-decode";

const jwt = require('jsonwebtoken');

const LoginCheck = ():boolean => {
    const localToken = localStorage.getItem("access_token");
    return checkLocalStorage(localToken);
}

const checkLocalStorage = (localToken:string | null):boolean => {
    if (localToken != null) {
        return checkTokenTime(localToken);
    }else{
        return false;
    }
}
interface Jwt_decode{
    exp:number,
    sub:{
        user:string,
        group:string,
    }
}
const checkTokenTime = (localToken:string): boolean => {
    var decode:Jwt_decode;
    if (localToken != null) {
        decode = jwt_decode(localToken);
        if (Date.now() >= decode.exp * 1000) {
            return false;
        }
    }
    return true;
}


export default LoginCheck;
