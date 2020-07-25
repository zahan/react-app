const ADD_MESSAGE = 'ADD_MESSAGE'

let initialState = {
    DialogsName: [
        { id: 0, name: 'Ekaterina' },
        { id: 1, name: 'Pavel' },
        { id: 2, name: 'Eva' },
        { id: 3, name: 'User' },
        { id: 4, name: 'SuperUser' }
      ],
      Messages: [
        { id: 1, time: '12:32', text: 'Hello how are you' },
        { id: 2, time: '12:34', text: 'Fine thanks!' }
      ]
}

const messageReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_MESSAGE:
            let body = action.newMessageBody
            return {
                ...state,
                newMessageBody: '',
                Messages: [...state.Messages, {id: 13, time: 2022, text: body}] 
            }
       
        default:
            return state
    }

}

export const addMessageActionCreator = (newMessage) => {
    return { type: ADD_MESSAGE, newMessageBody: newMessage }
}

export default messageReducer
