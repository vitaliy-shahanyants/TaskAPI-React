export const CATEGORY_LIST_LOAD = 'VIEW_LIST_LOAD';
export const CATEGORY_LIST_FAIL = 'VIEW_LIST_FAIL';
export const CATEGORY_LIST_SUCCESS = 'VIEW_LIST_SUCCESS';

export type Items = {
    id: number,
    title:string,
    description:string,
    done: boolean,
    categoryId:number
}
export type CategoryType ={
    id:number,
    title:string,
    items:Items[]
}

export interface ICategoryListLoad  {
    type: typeof CATEGORY_LIST_LOAD
}
export interface ICategoryListFail  {
    type: typeof CATEGORY_LIST_FAIL
}
export interface ICategoryListSuccess  {
    type: typeof CATEGORY_LIST_SUCCESS,
    payload:CategoryType[]
}

export type CategoryDispatchType = ICategoryListLoad | ICategoryListFail | ICategoryListSuccess;
