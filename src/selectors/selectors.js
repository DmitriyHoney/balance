//ProfilePage
export const getProfilePageSelector                 = state => state.profilePage;
export const getProfilePreloaderStateSelector       = state => state.profilePage.profilePreloader;

//UsersPage
export const getUsersPage                           = state => state.usersPage;
export const usersPagePreloader                     = state => state.usersPage.usersPagePreloder;
export const getFriendFilter                        = state => state.usersPage.friend;

//AuthPage
export const getAuthPreloader                       = state => state.authPage.authPreloader;
export const getAuthState                           = state => state.authPage.isAuth;
export const getCaptchaUrl                          = state => state.authPage.captchaUrl;
