const ADD_POST = 'ADD_POST'
const UPDATE_POST = 'UPDATE_POST'

let initialState = {
    PostData: [
        { id: 1, likecount: 25, message: 'Hi my name is Evpatyi' },
        { id: 2, likecount: 4, message: 'How are you?' },
        { id: 3, likecount: 8, message: 'Ok, fine' },
        { id: 4, likecount: 0, message: 'Good, bye' }
    ],
    newPost: 'Yo'
}

const postReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_POST: {
            let stateCopyU = { ...state }
            stateCopyU.newPost = action.postText
            return stateCopyU
        }
        case ADD_POST: {
            let stateCopyU = { ...state }
            stateCopyU.PostData = [...state.PostData]
            let newPostMessage = stateCopyU.newPost
            stateCopyU.newPost = ''
            let newPost2 = {
                id: 5,
                likecount: 3,
                message: newPostMessage
            }
            stateCopyU.PostData.push(newPost2)
            return stateCopyU
        }
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

export default postReducer