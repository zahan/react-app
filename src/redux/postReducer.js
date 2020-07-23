import { usersAPI, profileAPI } from "../api/api"

const ADD_POST = 'ADD_POST'
const UPDATE_POST = 'UPDATE_POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_USER_STATUS = 'SET_USER_STATUS'


let initialState = {
    PostData: [
        { id: 1, likecount: 25, message: 'Hi my name is Evpatyi' },
        { id: 2, likecount: 4, message: 'How are you?' },
        { id: 3, likecount: 8, message: 'Ok, fine' },
        { id: 4, likecount: 0, message: 'Good, bye' }
    ],
    newPost: 'Yo',
    profile: null,
    status: ''
}

const postReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_POST:
            return {
                ...state,
                newPost: action.postText
            }

        case ADD_POST:
            let newPostMessage = state.newPost
            return {
                ...state,
                newPost: '',
                PostData: [...state.PostData, { id: 13, likecount: 3, message: newPostMessage }]
            }

        case SET_USER_PROFILE:
            return { ...state, profile: action.profile }

        case SET_USER_STATUS:
            return { ...state, status: action.status }


        default:
            return state
    }


}
export const addPostActionCreator = () => { return { type: ADD_POST }}
export const updatePostCreator = (text) => {return {type: UPDATE_POST, postText: text}}

export const setUserProfile = (profile) => { return { type: SET_USER_PROFILE, profile } }
export const setUserStatus = (status) => { return { type: SET_USER_STATUS, status } }

export const getUserProfile = (userId) => {
    return (dispatch) => {
        usersAPI.getProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data))
            })
    }
}

export const getUserStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
            .then(response => {
                dispatch(setUserStatus(response.data))
            })
    }
}

export const updateUserStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setUserStatus(status))
                }
                else {console.warn('No login to update status')}
            })
    }
}


export default postReducer