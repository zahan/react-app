import React from 'react'
import * as axios from 'axios'
import userDefaultPhoto from '../../assets/user.png'


class UsersCl extends React.Component {

    GetUsers = () => {
        if (this.props.users.length === 0) {

            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                this.props.setUsers(response.data.items)
            })
        }
    }

    render () {
    return <div>
        <button onClick={this.GetUsers}>Get users</button>
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