import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { Product_Reducer } from "../producttable/producttable.reduccer";

const rootReducer = combineReducers({
    Products : Product_Reducer

})
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
