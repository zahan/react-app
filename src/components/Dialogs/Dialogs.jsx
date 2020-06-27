import React from 'react'
import css from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'


const Dialogs = (props) => {
    
 
    let DialogList =  props.MessagesDia.DialogsName.map(names => (<DialogItem id={names.id} key={names.id} name={names.name} />))
 
    let MessageList = props.MessagesDia.Messages
        .map(text => (<Message message={text.text} key={text.id} time={text.time} />))

    let textInput = React.createRef()
    let addMessage = () => {
        props.addMessageActionCreator();
    }

    let messageChange = (e) => {
        let body = e.currentTarget.value
        props.updateMessageCreator(body)
    } 

    return (
        <div className={css.dialogs}>
            <div className={css.dialogs_list}>
                {DialogList}
            </div>
            <div className={css.messages_list}>
                {MessageList}
                <div className={css.inputblock}>
                    <textarea ref={textInput} value={props.newMessage} onChange={messageChange} placeholder="Remember, be nice!"></textarea>
                    <button onClick={addMessage}>Send message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;