import {usersApi} from "../api/api";

const SET_USERS_DATA                    = "social-app/users-reducer/SET_USERS_DATA";
const SET_ANOTHER_PAGE                  = "social-app/users-reducer/SET_ANOTHER_PAGE";
const SET_USERS_PAGE_PRELOADER          = "social-app/users-reducer/SET_USERS_PAGE_PRELOADER";
const SET_FOLLOW_ON_USER_STATE          = "social-app/users-reducer/SET_FOLLOW_ON_USER_STATE";
const TOGGLE_USER_TO_STACK_SUBSCRIBE    = "social-app/users-reducer/TOGGLE_USER_TO_STACK_SUBSCRIBE";
const SET_TERM_VALUE                    = "social-app/users-reducer/SET_TERM_VALUE";
const SET_FRIEND_FILTER                 = "social-app/users-reducer/SET_FRIEND_FILTER";

let initialState = {
    count: 10,                          //Кол-во пользователей на странице
    page: 1,                            //Текущая страница
    term: "",                           //Имя для поиска
    friend: "",                         //если true ищем только друзей, false всех кроме друзей, emty ищем всех
    items: [],                          //Массив пользователей
    totalCount: 4697,                   //Всего пользователей,
    usersPagePreloder: true,
    usersInProcessOfSubscribing: [],    //Пользователи на которых идёт подписка
    error: null
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS_DATA:
            return {
                ...state,
                ...action.dataFromApi
            }
        case SET_ANOTHER_PAGE:
            return {
                ...state,
                page: action.newPageNumber
            }
        case SET_USERS_PAGE_PRELOADER:
            return {
                ...state,
                usersPagePreloder: action.bool
            }
        case SET_FOLLOW_ON_USER_STATE:
            return {
                ...state,
                items: state.items.map(oneUser => {

                    if (oneUser.id === action.userId) {

                        return {...oneUser, followed: !oneUser.followed}
                    }
                    return {...oneUser}
                })
            }
        case TOGGLE_USER_TO_STACK_SUBSCRIBE:
            return {
                ...state,
                usersInProcessOfSubscribing: action.bool
                    ? [...state.usersInProcessOfSubscribing, action.userId]
                    : state.usersInProcessOfSubscribing.filter(u => u !== action.userId)
            }
        case SET_TERM_VALUE:
            return {
                ...state,
                term: action.string
            }
        case SET_FRIEND_FILTER:
            return {
                ...state,
                friend: action.value
            }
        default:
            return state;
    }
};

//ActionCreators
export const setUsersPageDataFromApiAC      = dataFromApi       => ({type: SET_USERS_DATA, dataFromApi});
export const setAnotherPageAC               = newPageNumber     => ({type: SET_ANOTHER_PAGE, newPageNumber});
export const setUsersPagePreloaderAC        = bool              => ({type: SET_USERS_PAGE_PRELOADER, bool});
export const setFollowOnUserStateAC         = userId            => ({type: SET_FOLLOW_ON_USER_STATE, userId});
export const toggleUserToStackSubscribeAC   = (userId, bool)    => ({type: TOGGLE_USER_TO_STACK_SUBSCRIBE, userId, bool});
export const setTermValueAC                 = string            => ({type: SET_TERM_VALUE, string}); //Поиск по имени
export const setFriendFilterAC              = value             => ({type: SET_FRIEND_FILTER, value}); //Поиск по фильтру
//ThunkCallback
export const getUsersListThunkCallback = () => async (dispatch, getState) => {
    dispatch(setUsersPagePreloaderAC(true)); //Пока запрос пошёл включаем прелоадер
    let usersPage = {
        count: getState().usersPage.count,
        page: getState().usersPage.page,
        term: getState().usersPage.term,
        friend: getState().usersPage.friend
    };
    let {count, page, term, friend} = usersPage;
    let response = await usersApi.getUsers(count, page, term, friend);
    dispatch(setUsersPageDataFromApiAC(response.data));
    dispatch(setUsersPagePreloaderAC(false)); //Запрос пришёл и скрыли прелоадер
}

export const goToAnotherPageThunkCallback = newPageNumber => async dispatch => {
    dispatch(setAnotherPageAC(newPageNumber));
    await dispatch(getUsersListThunkCallback());
}

export const toggleFollowUserThunkCallback = (userId, followed) => async dispatch => {
    dispatch(toggleUserToStackSubscribeAC(userId, true)); //Добавить пользователя в очередь на подписку
    let response;
    if (followed) response = await usersApi.unFollowOnUser(userId); //Отписка если подписаны
    else response = await usersApi.followOnUser(userId); //Подписка если отписанны

    if (response.data.resultCode === 0) {
        dispatch(setFollowOnUserStateAC(userId));
        dispatch(toggleUserToStackSubscribeAC(userId, false)); //Удалить пользователя из очереди на подписку
    }
}

export default usersReducer;