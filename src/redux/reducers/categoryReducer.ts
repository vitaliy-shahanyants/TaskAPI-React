import {CATEGORY_LIST_SUCCESS,CATEGORY_LIST_FAIL,CATEGORY_LIST_LOAD,CategoryType,CategoryDispatchType} from "../category/CategoryActionType";

interface ICategoryState {
    loading:boolean,
    error?:boolean,
    category?:CategoryType[]
}
const defaultState:ICategoryState = {
    loading: false

}

const categoryReducer = (state:ICategoryState = defaultState,action:CategoryDispatchType) :ICategoryState => {
    switch(action.type){
        case CATEGORY_LIST_LOAD:{
            return{
                loading:true,
            }
        }
        case CATEGORY_LIST_FAIL: {
            return {
                loading: false,
                error: true,
            }
        }
        case CATEGORY_LIST_SUCCESS: {
            return{
                loading: false,
                error: false,
                category: action.payload
            }
        }
        default: return state;
    }
}

export default categoryReducer;
