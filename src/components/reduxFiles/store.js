import { createStore } from "redux";
import reducer from "./reducer.js"; 
import {combineReducers} from "redux";

const reducers = combineReducers({ reducer });
const store = createStore(reducers);
// console.log(store);
export default store;