import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { Product_Reducer } from "../producttable/producttable.reduccer";



const persistConfig = {
    key: 'root',
    storage,
  }
const rootReducer = combineReducers({
    Products : Product_Reducer

})



const persistedReducer = persistReducer(persistConfig, rootReducer)

// let store = createStore(persistedReducer)
export const store = legacy_createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store)