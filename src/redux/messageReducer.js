const ADD_MESSAGE = 'ADD_MESSAGE'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'

let initialState = {
    DialogsName: [
        { id: 1, name: 'Ekaterina' },
        { id: 2, name: 'Pavel' },
        { id: 3, name: 'Eva' },
        { id: 4, name: 'User' },
        { id: 5, name: 'SuperUser' }
      ],
      Messages: [
        { id: 1, time: '12:32', text: 'Hello how are you' },
        { id: 2, time: '12:34', text: 'Fine thanks!' }
      ],
      newMessageBody: ''
}

const messageReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:{
            let stateCopy = {...state}
            stateCopy.newMessageBody = action.body
            return stateCopy
        }
        case ADD_MESSAGE:{
            let stateCopy = {...state}
            stateCopy.Messages = [...state.Messages]
            let body = stateCopy.newMessageBody
            stateCopy.newMessageBody = ''
            let newPost = {
                id: 0,
                time: 2022,
                text: body
            }
            stateCopy.Messages.push(newPost)
            return stateCopy
        }
        default:
            return state
    }

}

export const addMessageActionCreator = () => {
    return { type: ADD_MESSAGE }
}

export const updateMessageCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: text
    }
}

export default messageReducer
