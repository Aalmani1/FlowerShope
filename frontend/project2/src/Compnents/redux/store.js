import { createStore, combineReducers } from "redux";
import cartitem from "./cart/cartitem";


const reducers = combineReducers({cartitem,})

const store = createStore(reducers, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;