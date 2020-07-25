import { addPostActionCreator } from '../../../redux/postReducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        WallPost: state.WallPosts
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPostActionCreator: (newPostText) => {
            dispatch(addPostActionCreator(newPostText))
        }
    }
}

const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps) (MyPosts)

export default MyPostsContainer;