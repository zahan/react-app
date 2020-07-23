import React from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'
import { getUserProfile } from '../../redux/postReducer'
import { withRouter } from 'react-router-dom'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2
        }

       this.props.getUserProfile(userId)
       this.props.getUserStatus(userId)
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile} />
    }
}


let mapStateToProps = (state) => ({
    profile: state.WallPosts.profile,
    status: state.WallPosts.status
})


export default compose (
    connect(mapStateToProps, {getUserProfile}),
    withRouter,
    withAuthRedirect
) 
(ProfileContainer);