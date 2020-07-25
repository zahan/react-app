import React from 'react'
import { reduxForm, Field } from 'redux-form'

const Login = (props) => {
    const onSubmit = (FormData) => {
        console.log(FormData)
    }

    return <div>
        <h1>Login page</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>

}

const LoginForm = (props) => {
    return <>
        <form onSubmit={props.handleSubmit} >
            <div>
                <Field placeholder={'Login'} name={'login'} component={'input'} />
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} component={'input'} />
            </div>
            <div>
                <Field type={'checkbox'} name={'rememberMe'} component={'input'} />Remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    </>
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

export default Login