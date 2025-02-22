import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import { thunk } from "redux-thunk";
import { productReducer } from "./productReducer";
import { cartReducer } from "./cartReducer";


const rootReducer = combineReducers({
    products : "productReducer",
    cart : "cartReducer"
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
