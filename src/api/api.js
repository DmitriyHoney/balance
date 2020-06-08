import * as axios from "axios";

let instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '2aa95529-03f3-4e18-bb22-995bc7fdf5db'
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
    }
};