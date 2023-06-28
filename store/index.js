import { createStore } from "redux";
import thunkMiddleware  from "redux-thunk";
import { applyMiddleware } from "redux";
import rootReducer from '../reducer'
import thunk from "redux-thunk";

const store= createStore(rootReducer, {}, applyMiddleware(thunkMiddleware));
export default store;