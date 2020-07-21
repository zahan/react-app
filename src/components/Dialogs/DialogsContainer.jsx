import { addMessageActionCreator, updateMessageCreator } from '../../redux/messageReducer'
import Dialogs from './Dialogs'
import { connect } from 'react-redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'

let mapStateToProps = (state) => {
    return {
        MessagesDia: state.MessagesDia,
        newMessage: state.MessagesDia.newMessageBody,
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

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)
    (Dialogs);