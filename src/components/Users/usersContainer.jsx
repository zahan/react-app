import { connect } from 'react-redux'
import React from 'react'
import { follow, unfollow, setUsers, setCurrentPage, setUsersTotalCount, toggleIsFetching } from '../../redux/usersReducer'
import Users from './users'
import Preloader from '../Misc/preloader'
import { usersAPI } from '../../api/api'

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching (true)
        usersAPI.getUsers (this.props.currentPage, this.props.pageSize)
            .then(response => {
                this.props.toggleIsFetching (false)
                this.props.setUsers(response.items)
                this.props.setUsersTotalCount(response.totalCount)
            })
    }
    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching (true)
        this.props.setCurrentPage(pageNumber)
        usersAPI.getUsers (pageNumber, this.props.pageSize)
            .then(response => {
                this.props.toggleIsFetching (false)
                this.props.setUsers(response.items)
            })
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
        isFetching: state.usersPage.isFetching
    }
}


export default connect(mapStateToProps, 
    {follow, unfollow, setUsers, setCurrentPage, setUsersTotalCount, toggleIsFetching})(UsersContainer)

