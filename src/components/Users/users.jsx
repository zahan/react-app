import React from 'react'

const Users = (props) => {
    
    if (props.users.length === 0) {
    props.setUsers(
        [
            { id: 1, followed: true, fullName: 'Ekaterina', status: 'Hello everybody', age: 27, location: { city: 'Saint-Petersburg', country: 'Russia' } },
            { id: 2, followed: true, fullName: 'Eva', status: 'Where is my milk', age: 0, location: { city: 'Saint-Petersburg', country: 'Russia' } },
            { id: 3, followed: false, fullName: 'Pavel', status: 'Get to the choppa', age: 31, location: { city: 'Saint-Petersburg', country: 'Russia' } }
        ]
    )
 } 

    return (
        <div>
            {props.users.map(u => <div key={u.id}>
                <span>{u.fullName}</span><br />
                <span>{u.status}</span><br />
                <span>{u.age}</span><br />
                <span>{u.location.city}</span><br />
                <span>{u.location.country}</span><br />
                {u.followed ? <button onClick={() => { props.unfollow(u.id) }} >Follow</button> : <button onClick={() => { props.follow(u.id) }}>Unfollow</button>}
            </div>)}
        </div>
    )
}

export default Users