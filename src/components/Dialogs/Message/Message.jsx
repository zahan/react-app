import React from 'react'
import css from './../Dialogs.module.css'

const Message = (props) => {
    return (
        <div className={css.messages_item}>
            <p>{props.message} </p>
            <span>{props.time} </span>
        </div>
    )
}

export default Message;