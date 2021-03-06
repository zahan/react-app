import React from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'
import { getUserProfile, getUserStatus, updateUserStatus } from '../../redux/postReducer'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.autorizedUserId
        }

       this.props.getUserProfile(userId)
       this.props.getUserStatus(userId)
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateUserStatus={this.props.updateUserStatus} />
    }
}


let mapStateToProps = (state) => ({
    profile: state.WallPosts.profile,
    status: state.WallPosts.status,
    autorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
})


export default compose (
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus}),
    withRouter,
    withAuthRedirect
) 
(ProfileContainer);