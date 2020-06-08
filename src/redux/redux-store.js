import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import profileReducer from "../reducers/profile-reducer";
import authReducer from "../reducers/auth-reducer";

const reducers = combineReducers({
    profilePage: profileReducer,
    authPage: authReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunkMiddleware)
));



export default store;