import { authAPI } from "../api/api"

const SET_USER_DATA = 'SET_USER_DATA'


let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }

        default:
            return state
    }
}

export const setAuthUserData = (userId, login, email, isAuth) => { return { type: SET_USER_DATA, payload: { userId, login, email, isAuth } } }

export const getAuthUserData = () => (dispatch) => {
    authAPI.getAuth()
        .then(response => {
            if (response.resultCode === 0) {
              let {id, login, email} = response.data
              dispatch(setAuthUserData (id, login, email, true))
            }
        })
}

export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe)
        .then(response => {

            if (response.data.resultCode === 0) {
              dispatch(getAuthUserData ())
            }
        })
}

export const logout = () => (dispatch) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData (null, null, null, false))
                dispatch(getAuthUserData ())
            }
        })
}

export default authReducer