import React from 'react'
import { addMessageActionCreator, updateMessageCreator } from '../../redux/messageReducer'
import Dialogs from './Dialogs'

const DialogsContainer = (props) => {

    let dispatch = props.store.dispatch.bind(props.store)
    let state2 = props.store.getState()
    let newMessage = state2.MessagesDia.newMessageBody

    let addMessage = () => {
        dispatch(addMessageActionCreator());
    }

    let messageChange = (e) => {
       dispatch(updateMessageCreator(e))
    } 

    return <Dialogs addMessageActionCreator={addMessage} updateMessageCreator={messageChange} state2 = { state2 } newMessage={newMessage} />
}
export default DialogsContainer;