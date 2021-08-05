export const TRANSFER_PROTOCOL = "https://"
export const URL = "localhost:5001"
export const MAIN_API_LINK = TRANSFER_PROTOCOL+URL+"/";

export const LINKS = {
    auth: MAIN_API_LINK+"api/auth",
    login: MAIN_API_LINK+"api/auth/login",
    register: MAIN_API_LINK+"api/auth/register",
    category: MAIN_API_LINK+"api/category",
    task: MAIN_API_LINK+"api/task"
}
