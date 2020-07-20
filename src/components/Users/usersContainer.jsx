import { connect } from 'react-redux'
import React from 'react'
import { follow, unfollow, setCurrentPage, toggleFollowingInProgress, getUsers } from '../../redux/usersReducer'
import Users from './users'
import Preloader from '../Misc/preloader'


class UsersContainer extends React.Component {
    
    componentDidMount() {
        
        this.props.getUsers(this.props.currentPage, this.props.pageSize)

    }
    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }



    render() {

        return <> 
        { this.props.isFetching ? <Preloader /> : null}
        <Users totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            users={this.props.users}
            unfollow={this.props.unfollow}
            follow={this.props.follow}
            followingInProgress={this.props.followingInProgress}
            toggleFollowingInProgress={this.props.toggleFollowingInProgress}
        />
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}


export default connect(mapStateToProps, 
    {follow, unfollow,  
        setCurrentPage, 
        toggleFollowingInProgress, getUsers})(UsersContainer)

