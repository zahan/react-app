import React from 'react'
import css from './../Dialogs.module.css'
import { NavLink } from 'react-router-dom'

const DialogItem= (props) => {
    return (
        <div className={css.dialogs_item}>
            <NavLink exact to={'/dialogs/' + props.id} activeClassName={css.active}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;