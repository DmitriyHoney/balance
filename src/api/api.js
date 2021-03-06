import * as axios from "axios";

let instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '27511a9e-459f-4e9b-aa8d-12472434ae94'
    }
});

export const profileApi = {
    getProfileUserCard(userId) {
        return instance.get(`profile/${userId}`)
    },
    getUserStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },
    changeUserStatus(statusString) {
        return instance.put(`profile/status`, {status: statusString})
    },
    setProfilePhoto(photoFileObj) {
        return instance.put(`profile/photo`, photoFileObj, {
            headers: { 'content-type': 'multipart/form-data' }
        })
    },
    setUserInfo(formData) {
        return instance.put(`profile`, formData)
    }
};

export const usersApi = {
    getUsers(count, page, term, friend) {
        if (term === "" && friend === "")  return instance.get(`users?count=${count}&page=${page}&term=&friend=`)
        if (term === "")  return instance.get(`users?count=${count}&page=${page}&term=&friend=${friend}`)
        if (friend === "")  return instance.get(`users?count=${count}&page=${page}&term=${term}&friend=`)
        return instance.get(`users?count=${count}&page=${page}&term=${term}&friend=${friend}`)
    },
    followOnUser(userId) {
        return instance.post(`/follow/${userId}`, {userId})
    },
    unFollowOnUser(userId) {
        return instance.delete(`/follow/${userId}`, {userId})
    }
};

export const authApi = {
    getAuthRequest() {
        return instance.get(`auth/me`)
    },
    loginInTheSite(formData) {
        return instance.post(`auth/login`, formData)
    },
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`)
    },
    logoutToTheSite() {
        return instance.delete(`auth/login`)
    }
};