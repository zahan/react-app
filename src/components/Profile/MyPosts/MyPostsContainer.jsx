import { addPostActionCreator, updatePostCreator } from '../../../redux/postReducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        WallPost: state.WallPosts
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updatePostCreator: (body) => {
            dispatch(updatePostCreator(body))
        },
        addPostActionCreator: () => {
            dispatch(addPostActionCreator())
        }
    }
}

const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps) (MyPosts)

export default MyPostsContainer;