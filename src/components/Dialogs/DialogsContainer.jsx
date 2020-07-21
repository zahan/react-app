import { addMessageActionCreator, updateMessageCreator } from '../../redux/messageReducer'
import Dialogs from './Dialogs'
import { connect } from 'react-redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'

let mapStateToProps = (state) => {
    return {
        MessagesDia: state.MessagesDia,
        newMessage: state.MessagesDia.newMessageBody,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateMessageCreator: (body) => {
            dispatch(updateMessageCreator(body))
        },
        addMessageActionCreator: () => {
            dispatch(addMessageActionCreator())
        }
    }
}

let AuthRedirectContainer = withAuthRedirect(Dialogs)


const DialogsContainer = connect (mapStateToProps, mapDispatchToProps) (AuthRedirectContainer)

export default DialogsContainer;