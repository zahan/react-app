const ADD_POST = 'ADD_POST'
const UPDATE_POST = 'UPDATE_POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE' 

let initialState = {
    PostData: [
        { id: 1, likecount: 25, message: 'Hi my name is Evpatyi' },
        { id: 2, likecount: 4, message: 'How are you?' },
        { id: 3, likecount: 8, message: 'Ok, fine' },
        { id: 4, likecount: 0, message: 'Good, bye' }
    ],
    newPost: 'Yo',
    profile: null
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
                PostData: [...state.PostData, {id: 13, likecount: 3, message: newPostMessage}]
            }

            case SET_USER_PROFILE:
                return {...state, profile: action.profile}
            
        
        default:
            return state
    }





}
export const addPostActionCreator = () => {
    return { type: ADD_POST }
}

export const updatePostCreator = (text) => {
    return {
        type: UPDATE_POST,
        postText: text
    }
}

export const setUserProfile = (profile) => {return{type:SET_USER_PROFILE, profile}}

export default postReducer