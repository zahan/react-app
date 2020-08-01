import React from 'react'
import css from './formControls.module.css'

export const TextArea = ({ input, meta, ...props }) => {
    const hasError = meta.error && meta.touched;
    return (
        <div className={css.formControl} >
            <textarea {...input} {...props} className={hasError && css.error} /><br/>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Input = ({ input, meta, ...props }) => {
    const hasError = meta.error && meta.touched;
    return (
        <div className={css.formControl} >
            <input {...input} {...props} className={hasError && css.error} /><br/>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}