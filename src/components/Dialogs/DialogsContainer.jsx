import { addMessageActionCreator } from '../../redux/messageReducer'
import Dialogs from './Dialogs'
import { connect } from 'react-redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'

let mapStateToProps = (state) => {
    return {
        MessagesDia: state.MessagesDia,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessageActionCreator: (newMessage) => {
            dispatch(addMessageActionCreator(newMessage))
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)
    (Dialogs);