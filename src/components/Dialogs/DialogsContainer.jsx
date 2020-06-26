import { addMessageActionCreator, updateMessageCreator } from '../../redux/messageReducer'
import Dialogs from './Dialogs'
import { connect } from 'react-redux'

let mapStateToProps = (state) => {
    return {
        MessagesDia: state.MessagesDia,
        newMessage: state.MessagesDia.newMessageBody
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

const DialogsContainer = connect (mapStateToProps, mapDispatchToProps) (Dialogs)

export default DialogsContainer;