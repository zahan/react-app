const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let initialState = {
    users: [
        { id: 1, followed: true, fullName: 'Ekaterina', status: 'Hello everybody', age: 27, location: { city: 'Saint-Petersburg', country: 'Russia' } },
        { id: 2, followed: true, fullName: 'Eva', status: 'Where is my milk', age: 0, location: { city: 'Saint-Petersburg', country: 'Russia' } },
        { id: 3, followed: false, fullName: 'Pavel', status: 'Get to the choppa', age: 31, location: { city: 'Saint-Petersburg', country: 'Russia' } },
    ]
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
                    users: state.users.map (u => {
                        if (u.id === action.userId) {
                            return {...u, followed: false}
                        }
                        return u
                    })
                }

            case SET_USERS:
                return { ...state, users: [...state.users, ...action.users] }

        default:
            return state
    }
}

export const followAC = (userId) => { return { type: FOLLOW, userId } }
export const unfollowAC = (userId) => { return { type: UNFOLLOW, userId } }
export const setUsersAC = (users) => {return{type: SET_USERS, users} }

export default usersReducer