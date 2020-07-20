import React from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'
import { getUserProfile } from '../../redux/postReducer'
import { withRouter, Redirect } from 'react-router-dom'

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2
        }

       this.props.getUserProfile(userId)
    }

    render() {

        if (!this.props.isAuth) return <Redirect to={'/login'} />

        return <Profile {...this.props} profile={this.props.profile} />
    }
}

const mapStateToProps = (state) => ({
    profile: state.WallPosts.profile,
    isAuth: state.auth.isAuth
})

let ProfileContainerWithUrl = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getUserProfile}) (ProfileContainerWithUrl)