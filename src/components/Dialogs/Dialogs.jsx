import React from 'react'
import css from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { addMessageActionCreator, updateMessageCreator } from '../../redux/messageReducer'


const Dialogs = (props) => {

    let DialogList = props.state.DialogsName
        .map(names => (<DialogItem id={names.id} name={names.name} />))

    let MessageList = props.state.Messages
        .map(text => (<Message message={text.text} time={text.time} />))

    let newMessage = props.state.newMessageBody

    let textInput = React.createRef()
    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    }

    let messageChange = (e) => {
        let body = e.currentTarget.value
        props.dispatch(updateMessageCreator(body))
    } 

    return (
        <div className={css.dialogs}>
            <div className={css.dialogs_list}>
                {DialogList}
            </div>
            <div className={css.messages_list}>
                {MessageList}
                <div className={css.inputblock}>
                    <textarea ref={textInput} value={newMessage} onChange={messageChange} placeholder="Remember, be nice!"></textarea>
                    <button onClick={addMessage}>Send message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;