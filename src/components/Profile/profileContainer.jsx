import React from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'
import { getUserProfile } from '../../redux/postReducer'
import { withRouter } from 'react-router-dom'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2
        }

       this.props.getUserProfile(userId)
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile} />
    }
}

let AuthRedirectContainer = withAuthRedirect(ProfileContainer)

let mapStateToProps = (state) => ({
    profile: state.WallPosts.profile,
})

let ProfileContainerWithUrl = withRouter(AuthRedirectContainer)

export default connect(mapStateToProps, {getUserProfile}) (ProfileContainerWithUrl)