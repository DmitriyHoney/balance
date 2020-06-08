import {profileApi} from "../api/api";

const SET_PROFILE_USER          = "social-app/profile-reducer/SET_PROFILE_USER";
const SET_PROFILE_PRELOADER     = "social-app/profile-reducer/SET_PROFILE_PRELOADER";
const SET_USER_STATUS           = "social-app/profile-reducer/SET_USER_STATUS";
const SET_IS_MY_PAGE            = "social-app/profile-reducer/SET_IS_MY_PAGE";
const SET_PROFILE_PHOTO         = "social-app/profile-reducer/SET_PROFILE_PHOTO";

let initialState = {
    userStatus: null,
    profilePreloader: true,
    isItMyPage: null,
    userData: {
        aboutMe: null,
        contacts: {
            facebook: null,
            website: null,
            vk: null,
            twitter: null,
            instagram: null,
            youtube: null,
            github: null,
            mainLink: null
        },
        lookingForAJob: null,
        lookingForAJobDescription: null,
        fullName: null,
        userId: null,
        photos: {
            small: null,
            large: null
        }
    }
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROFILE_USER:
            return {
                ...state,
                userData: action.userDataFromApi
            }
        case SET_PROFILE_PRELOADER:
            return {
                ...state,
                profilePreloader: action.bool
            }
        case SET_USER_STATUS:
            return {
                ...state,
                userStatus: action.userStatusFromApi
            }
        case SET_IS_MY_PAGE:
            return {
                ...state,
                isItMyPage: action.bool
            }
        case SET_PROFILE_PHOTO:
            return {
                ...state,
                userData: {
                    ...state.userData,
                    photos: action.photos
                }
            }
        default:
            return state;
    }
};

//ActionCreator
export const setProfileUserCardAC   = userDataFromApi   => ({type: SET_PROFILE_USER, userDataFromApi});
export const setProfilePreloaderAC  = bool              => ({type: SET_PROFILE_PRELOADER, bool});
export const setUserStatusAC        = userStatusFromApi => ({type: SET_USER_STATUS, userStatusFromApi});
export const setIsMyPageAC          = bool              => ({type: SET_IS_MY_PAGE, bool});
export const setProfilePhotoAC      = photos            => ({type: SET_PROFILE_PHOTO, photos});

//ThunkCallback
export const getProfileUserCardThunkCallback = userId => async (dispatch, getState) => { //Получить userCard
    dispatch(setProfilePreloaderAC(true)); //Включаем Preloader
    if (!userId) { //если id не передан, тогда вставляем id пользователя хозяина
        userId = getState().authPage.data.id;
        dispatch(setIsMyPageAC(true)); //устанавливаем что это моя страница
    } else {
        dispatch(setIsMyPageAC(false)); //устанавливаем что это не моя страница
    }

    let response = await profileApi.getProfileUserCard(userId); //Получаем userCard
    await dispatch(getUserStatusThunkCallback(userId)) //Получаем UserStatus
    dispatch(setProfilePreloaderAC(false)); //Выключаем Preloader
    dispatch(setProfileUserCardAC(response.data))
}

export const getUserStatusThunkCallback = userId => async (dispatch, getState) => { //Получить Status пользователя
    if (!userId) userId = getState().authPage.data.id; //если id не передан, тогда вставляем id пользователя хозяина
    let response = await profileApi.getUserStatus(userId);
    dispatch(setUserStatusAC(response.data))
}

export const changeUserStatusThunkCallback = newStatusString => async dispatch => { //Изменить статус
    let response = await profileApi.changeUserStatus(newStatusString);
    if(response.data.resultCode === 0) dispatch(setUserStatusAC(newStatusString));
}

export const setNewProfilePhotoThunkCallback = photoFile => async dispatch => { //Изменить фото профиля
    let formData = new FormData();
    formData.append("image", photoFile);
    let response = await profileApi.setProfilePhoto(formData);
    if (response.data.resultCode === 0) {
        dispatch(setProfilePhotoAC(response.data.data.photos))
    }
}


export default profileReducer;