import {CategoryDispatchType, Items} from "./CategoryActionType";
import axios from "axios";
import {LINKS} from "../../util/ApiLinks";
import {Dispatch} from "react";
import {CategoryDispatch} from "./CategoryActionDispatch";

export const ItemAdd = (item: Items, categoryId:number,dispatch:any) => {
    axios.post(LINKS.task,{
        title:item.title,
        categoryId:categoryId,
        done:false,
        description:item.description
    },{
        params: {
            title:item.title,
            categoryId:categoryId,
            done:false,
            description:item.description
        },
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(data=>{
        console.log(data.data);
        dispatch(CategoryDispatch());
    }).catch(error=>{

    })
}
export const ItemUpdate = (item: Items, categoryId:number,dispatch:any) => {
    axios.put(LINKS.task+"/"+item.id,{
        id: item.id,
        title:item.title,
        categoryId:categoryId,
        done:false,
        description:item.description
    },{
        params: {
            title:item.title,
            categoryId:categoryId,
            done:false,
            description:item.description
        },
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(data=>{
        console.log(data.data);
        dispatch(CategoryDispatch());
    }).catch(error=>{



    })
}
