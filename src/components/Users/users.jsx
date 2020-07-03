import React from 'react'

const Users = (props) => {
    return(
        <div>
            {props.users.map(u => <div key={u.id}>
            <span>{u.fullName}</span><br/>
            <span>{u.status}</span><br/>
            <span>{u.age}</span><br/>
            <span>{u.location.city}</span><br/>
            <span>{u.location.country}</span><br/>
            {u.followed ? <button onClick={() => {props.unfollow(u.id)}} >Follow</button> : <button onClick={() => {props.follow(u.id)}}>Unfollow</button>}
            </div>)}
        </div>
    )
}

export default Users