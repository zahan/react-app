import React from 'react'
import * as axios from 'axios'
import userDefaultPhoto from '../../assets/user.png'
import css from './users.module.css'

class UsersCl extends React.Component {

        componentDidMount() {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setUsersTotalCount(response.data.totalCount)
            })
        }
        onPageChanged = (pageNumber) => {
            this.props.setCurrentPage(pageNumber)
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
        }



    render() {

        

        let pagesCount =  Math.ceil(this.props.totalUsersCount / this.props.pageSize)

        let pages = []
        for (let i=1; i <= pagesCount; i++) {
            pages.push(i)
        }
        return <div>
            <div className={css.pagination}>
              {pages.map(n => {return <span onClick={ (e) => {this.onPageChanged(n)}} className={this.props.currentPage === n && css.selectPage} >{n}</span>} )}
            </div>

            {this.props.users.map(u => <div key={u.id}>
                <img width='40' src={u.photos.small != null ? u.photos.small : userDefaultPhoto} alt='user' />
                <span>{u.name}</span><br />
                <span>{u.status}</span><br />
                <span>{u.id}</span><br />
                {/* <span>{u.location.city}</span><br />
                <span>{u.location.country}</span><br /> */}
                {u.followed ? <button onClick={() => { this.props.unfollow(u.id) }} >Follow</button> : <button onClick={() => { this.props.follow(u.id) }}>Unfollow</button>}
            </div>)}
        </div>
    }
}

export default UsersCl