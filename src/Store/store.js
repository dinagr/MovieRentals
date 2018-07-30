import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import rootReducer from "../Reducers";

const initialState = {
    user: {},
    movies: [],
    errorMessage: ""
}
const middleWeware = [thunk];
const store = createStore(
    rootReducer, 
    initialState, 
    compose(
        applyMiddleware(...middleWeware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;