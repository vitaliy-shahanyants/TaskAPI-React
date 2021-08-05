import {combineReducers} from "redux";
import loginReducer from "./loginReducer";
import categoryReducer from "./categoryReducer";
import registerReducer from "./registerReducer";
const rootReducer = combineReducers({
    login:loginReducer,
    category:categoryReducer,
    register:registerReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
