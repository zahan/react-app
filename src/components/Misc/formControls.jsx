import React from 'react'
import css from './formControls.module.css'

export const TextArea = ({input, meta, ...props}) => {
    return <div className={css.formControl} >
        <textarea {...input} {...props}  className={css.error}/>
    </div>
}