import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { Input } from '../Misc/formControls'
import { maxLenghtCreator, required } from '../../utilities/validators';

const maxLenghtCreator10 = maxLenghtCreator(10);

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
                <Field placeholder={'Login'} name={'login'} component={Input} validate={[required, maxLenghtCreator10]}/>
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} component={Input} validate={[required, maxLenghtCreator10]}/>
            </div>
            <div>
                <Field type={'checkbox'} name={'rememberMe'} component={Input} validate={[required, maxLenghtCreator10]}/>Remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    </>
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

export default Login