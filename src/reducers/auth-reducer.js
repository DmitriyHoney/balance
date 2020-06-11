import {authApi} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_AUTH_STATE            = 'social-app/auth-reducer/SET_AUTH_STATE';
const SET_AUTH_PRELOADER        = 'social-app/auth-reducer/SET_AUTH_PRELOADER';
const SET_AUTH_USER_DATA        = 'social-app/auth-reducer/SET_AUTH_USER_DATA';
const SET_USER_ID               = 'social-app/auth-reducer/SET_USER_ID';
const SET_CAPTCHA_URL           = 'social-app/auth-reducer/SET_CAPTCHA_URL';
const SET_DEFAULT_STATE         = 'social-app/auth-reducer/SET_DEFAULT_STATE';

let initialState = {
    data: {
        id: null,
        login: null,
        email: null
    },
    isAuth: false,
    authPreloader: true,
    captchaUrl: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_STATE:
            return {
                ...state,
                isAuth: action.bool
            }
        case SET_AUTH_PRELOADER:
            return {
                ...state,
                authPreloader: action.bool
            }
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                data: action.dataFromApi
            }
        case SET_USER_ID:
            return {
                ...state,
                data: {
                    ...state.data,
                    id: action.userId
                }
            }
        case SET_CAPTCHA_URL:
            return {
                ...state,
                captchaUrl: action.url
            }
        case SET_DEFAULT_STATE:
            return {
                ...initialState
            }
        default:
            return state;
    }
};

//ActionCreator
export const setAuthStateAC                 = bool          => ({type: SET_AUTH_STATE, bool});
export const setAuthPreloaderAC             = bool          => ({type: SET_AUTH_PRELOADER, bool});
export const setAuthUserDataAC              = dataFromApi   => ({type: SET_AUTH_USER_DATA, dataFromApi});
export const setCaptchaUrlAC                = url           => ({type: SET_CAPTCHA_URL, url});
export const setDefaultStateAC              = ()           => ({type: SET_DEFAULT_STATE});

//ThunkCallback
export const getAuthRequestThunkCallback = () => async dispatch => {
    dispatch(setAuthPreloaderAC(true));
    let response = await authApi.getAuthRequest();
    if (response.data.resultCode === 0) {
        dispatch(setAuthStateAC(true));
        dispatch(setAuthUserDataAC(response.data.data))
        dispatch(setAuthPreloaderAC(false));
    } else if (response.data.resultCode === 1) {
        dispatch(setAuthStateAC(false));
        dispatch(setAuthPreloaderAC(false));
    }
};

export const loginInTheSiteThunkCallback = formData => async dispatch => {
    let response = await authApi.loginInTheSite(formData);
    if (response.data.resultCode === 0) {
        dispatch(getAuthRequestThunkCallback());
    } else {
        let errorArray = response.data.messages.length > 0 ? response.data.messages : "Unknown Error"
        if (response.data.resultCode === 1) {
            dispatch(stopSubmit("login", {_error: errorArray}))
        } else if (response.data.resultCode === 10) {
            let response = await authApi.getCaptchaUrl();
            dispatch(setCaptchaUrlAC(response.data.url));
            dispatch(stopSubmit("login", {_error: errorArray}))
        }


    }
};

export const logoutToTheSiteThunkCallback = () => async dispatch => {
    let response = await authApi.logoutToTheSite();
    if (response.data.resultCode === 0) {
        dispatch(setDefaultStateAC());
        dispatch(getAuthRequestThunkCallback());
    }
};

export default authReducer;