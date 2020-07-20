import { usersAPI } from '../api/api'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_FOLLOWING_IN_PROGRESS = 'TOGGLE_FOLLOWING_IN_PROGRESS'

let initialState = {
    users: [],
    pageSize: 99,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u
                })
            }

        case SET_USERS:
            { return { ...state, users: action.users } }

        case SET_USERS_TOTAL_COUNT:
            { return { ...state, totalUsersCount: action.count } }

        case SET_CURRENT_PAGE:
            { return { ...state, currentPage: action.currentPage } }

        case TOGGLE_IS_FETCHING:
            { return { ...state, isFetching: action.isFetching } }

        case TOGGLE_FOLLOWING_IN_PROGRESS:
            {
                return {
                    ...state,
                    followingInProgress: action.isFetching
                        ? [...state.followingInProgress, action.userId]
                        : state.followingInProgress.filter(id => id !== action.userId)
                }
            }

        default:
            return state
    }
}

export const follow = (userId) => { return { type: FOLLOW, userId } }
export const unfollow = (userId) => { return { type: UNFOLLOW, userId } }
export const setUsers = (users) => { return { type: SET_USERS, users } }
export const setUsersTotalCount = (count) => { return { type: SET_USERS_TOTAL_COUNT, count } }
export const setCurrentPage = (currentPage) => { return { type: SET_CURRENT_PAGE, currentPage } }
export const toggleIsFetching = (isFetching) => { return { type: TOGGLE_IS_FETCHING, isFetching } }
export const toggleFollowingInProgress = (isFetching, userId) => { return { type: TOGGLE_FOLLOWING_IN_PROGRESS, isFetching, userId } }

export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {

        dispatch(toggleIsFetching(true))
        usersAPI.getUsers(currentPage, pageSize)
            .then(response => {
                dispatch(toggleIsFetching(false))
                dispatch(setUsers(response.items))
                dispatch(setUsersTotalCount(response.totalCount))
            })
    }
}
export default usersReducer