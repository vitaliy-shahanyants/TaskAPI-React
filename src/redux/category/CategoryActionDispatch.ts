import {Dispatch} from "react";
import {CATEGORY_LIST_SUCCESS,CATEGORY_LIST_FAIL,CATEGORY_LIST_LOAD,CategoryType,CategoryDispatchType} from "./CategoryActionType";
import axios from "axios";
import {LINKS} from "../../util/ApiLinks";
type Response = {
    data: CategoryType[]
}
export const CategoryDispatch = () => (dispatch:Dispatch<CategoryDispatchType>) => {
    try{
        dispatch({
            type:CATEGORY_LIST_LOAD
        });

        axios.get(LINKS.category,{
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((data:Response)=>{
            console.log(data.data);
            dispatch({
                type:CATEGORY_LIST_SUCCESS,
                payload:data.data,
            });
        }).catch((error)=>{
            dispatch({
                type:CATEGORY_LIST_FAIL
            });
        });

    }catch{
        dispatch({
            type:CATEGORY_LIST_FAIL
        });
    }
}
