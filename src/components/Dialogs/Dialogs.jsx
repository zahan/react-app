import React from 'react'
import css from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { reduxForm, Field } from 'redux-form'


const Dialogs = (props) => {


    let DialogList = props.MessagesDia.DialogsName.map(names => (<DialogItem id={names.id} key={names.id} name={names.name} />))

    let MessageList = props.MessagesDia.Messages
        .map(text => (<Message message={text.text} key={text.id} time={text.time} />))

    let addMessegeFromForm = (values) => {
        props.addMessageActionCreator(values.newMessageForm)
    }

    return (
        <div className={css.dialogs}>
            <div className={css.dialogs_list}>
                {DialogList}
            </div>
            <div className={css.messages_list}>
                {MessageList}
                <AddMessageFormRedux onSubmit={addMessegeFromForm}/>
            </div>
        </div>
    )
}

const addMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} >
            <div className={css.inputblock}>
                <Field component='textarea' name='newMessageForm' placeholder="Remember, be nice!" />
                <button>Send message</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({ form: 'addMessage' })(addMessageForm)

export default Dialogs;