import { createStore, combineReducers } from "redux";
import day from "./modules/day";

const rootReducer = combineReducers({ day });

const store = createStore(rootReducer);

export default store;
