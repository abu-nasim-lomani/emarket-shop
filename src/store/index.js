import { createStore, combineReducers } from "redux";
import ProductReducers from './reducers/ProductReducers';
import { devToolsEnhancer } from "redux-devtools-extension";
import CartReducer from './reducers/CartReducer';
import AuthReducer from './reducers/AuthReducer';
import OrderReducer from './reducers/OrderReducer';


const root =combineReducers({
    ProductReducers,
    CartReducer,
    AuthReducer,
    OrderReducer
});
const strore= createStore(root, devToolsEnhancer());
export default strore;