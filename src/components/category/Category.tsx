import React, {useState,useEffect} from 'react';

import './Category.css';
import Item from "./Item";
import {useDispatch, useSelector} from "react-redux";
import {AppState} from "../../redux/reducers";
import {CategoryDispatch} from "../../redux/category/CategoryActionDispatch";

export default () => {
    const dispatch = useDispatch();
    const category = useSelector((state:AppState) => state.category);
    const [add, setAdd] = useState<boolean>(false);
    const added = () =>{
        setAdd(!add)
    }

    useEffect(() =>{
        if (!category?.category){
            dispatch(CategoryDispatch());
        }
    },[dispatch]);

    return(
        <div className="container-fluid">
            <br /><br /><br />
            <div className="Cat-Card">
                <div className="row">
                    {category?.category?.map(c=>{
                        return <Item key={c.title} category={c} />
                    })}
                </div>
            </div>
        </div>
    )
}
