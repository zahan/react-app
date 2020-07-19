import * as axios from 'axios'


const instance = axios.create ({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': 'aad4f96f-be6e-42b4-a927-9edcc8581dff'}
})

export const usersAPI = {

    getUsers (currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    },

    postUsers (userId) {
        return instance.post(`follow/${userId}`)
    },
    
    deleteUsers (userId) {
        return instance.delete(`follow/${userId}`)
    }
}

