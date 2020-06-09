import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import { reducer as formReducer } from 'redux-form'
import thunkMiddleware from 'redux-thunk';
import profileReducer from "../reducers/profile-reducer";
import authReducer from "../reducers/auth-reducer";
import usersReducer from "../reducers/users-reducer";

const reducers = combineReducers({
    profilePage: profileReducer,
    authPage: authReducer,
    usersPage: usersReducer,
    form: formReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunkMiddleware)
));


window.store = store;
export default store;