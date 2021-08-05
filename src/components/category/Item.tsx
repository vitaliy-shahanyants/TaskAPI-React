import React, {useState} from 'react';
import {CategoryType, Items} from "../../redux/category/CategoryActionType";
import {ItemAdd, ItemUpdate} from "../../redux/category/ItemAjax";
import {useDispatch} from "react-redux";
import {CategoryDispatch} from "../../redux/category/CategoryActionDispatch";

interface IPropItem {
    category: CategoryType
}

export default ({category}: IPropItem) => {
    const [add, setAdd] = useState(false);
    const clickAdd = () => {
        setAdd(!add);
    }
    const onClickSave = () => {
        setAdd(!add);
    }
    return (
        <div className="col-md-3 col-sm-6 Cat-Card-Col">
            <div className="row">
                <span className="Cat-Card-Col-Text">{category.title}</span>
            </div>

            {category.items.map(i => {
                return <CardItem key={i.title} item={i}/>
            })}
            {
                add ? <CardItemAdd  categoryId={category.id}/> : ""
            }
            <br/>
            {add ?
                <div className="row text-left">
                    <div onClick={clickAdd}>
                        Cancel
                    </div>
                </div>
                :
                <div className="row text-left">
                    <div onClick={clickAdd}>
                        <i className="fas fa-plus"></i> <span>Add More</span>
                    </div>
                </div>
            }

        </div>
    )
}

interface IProp {
    item?: Items,
    categoryId?:number
}

const CardItem = ({item}: IProp) => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState(item?.title);
    const [desc, setDesc] = useState(item?.description);
    const [edit, setEdit] = useState<boolean>(false);

    const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)
    const handleDesc = (e: React.ChangeEvent<HTMLTextAreaElement>) => setDesc(e.target.value)

    const handleEdit = () => setEdit(!edit)
    const handleSave = () => {
        const itemId = item?.id ? item.id : 1;
        const titleTem =  title ? title: "";
        const descTemp = desc ? desc : "";
        const catIdTemp = item?.categoryId ? item.categoryId: 1;
        ItemUpdate({
            id:itemId,
            title:titleTem,
            categoryId:catIdTemp,
            done: false,
            description:descTemp
        },catIdTemp, dispatch);
        //setEdit(!edit);
    }
    return (
        <div className="row">
            <div className="Cat-Card-Col-Item">

                    <span>
                        {edit ?
                            <div>
                                <h5>Title</h5>
                                <input type="text" value={title} onChange={handleTitle}
                                       className="Cat-Item-Input-Round"/>
                            </div> :
                            <h4>{title} <i onClick={handleEdit} className="Cat-Float-Right fas fa-edit"></i></h4>}
                    </span>
                <div>

                    {edit ?
                        <div>
                            <h5>Description</h5>
                            <textarea value={desc} onChange={handleDesc} className="Cat-Item-Input-Round"/>
                        </div> : <span>{desc}</span>}
                </div>
                {edit ?
                    <div className="Cat-Item-Save">
                        <button onClick={handleSave}>
                            Save
                        </button>
                    </div>
                    : ""}
            </div>

            <br/>
        </div>
    )
}

const CardItemAdd = ({categoryId}:IProp) => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState<string>("");
    const [desc, setDesc] = useState<string>("");

    const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)
    const handleDesc = (e: React.ChangeEvent<HTMLTextAreaElement>) => setDesc(e.target.value)
    const handleSave = () => {
        const catId = categoryId ? categoryId : 1;

       ItemAdd({
            id:1,
            title:title,
            categoryId:catId,
            done: false,
            description:desc
        },catId, dispatch);
    }
    return (
        <div className="row">
            <div className="Cat-Card-Col-Item">
                    <span>
                       <div>
                           <h5>Title</h5>
                           <input type="text" value={title} onChange={handleTitle}
                                       className="Cat-Item-Input-Round"/>
                       </div>
                    </span>
                <div>
                    <div>
                        <h5>Description</h5>
                        <textarea value={desc} onChange={handleDesc} className="Cat-Item-Input-Round"/>
                    </div>
                </div>
                <div className="Cat-Item-Save">
                    <button onClick={handleSave}>
                        Add
                    </button>
                </div>
            </div>

            <br/>
        </div>
    )
}
