import React from 'react'
import userDefaultPhoto from '../../assets/user.png'
import css from './users.module.css'
import { NavLink } from 'react-router-dom'
import { usersAPI } from '../../api/api'

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }


    return <div>
        <div className={css.pagination}>
            {pages.map(n => { return <span onClick={(e) => { props.onPageChanged(n) }} className={props.currentPage === n && css.selectPage} >{n}</span> })}
        </div>

        {props.users.map(u => <div key={u.id}>
            <NavLink to={'/profile/' + u.id}>
            <img width='40' src={u.photos.small != null ? u.photos.small : userDefaultPhoto} alt='user' />
            </NavLink>
            <span>{u.name}</span><br />
            <span>{u.status}</span><br />
            <span>{u.id}</span><br />

            {u.followed 
                ? <button onClick={() => { 
                    usersAPI.deleteUsers(u.id)
                    .then(response => {
                        if (response.data.resultCode === 0) {
                            props.follow(u.id) 
                        }
                    })
                    
                }} >Follow</button> 
                
                : <button onClick={() => { 
                    usersAPI.postUsers(u.id)
                    .then(response => {
                        if (response.data.resultCode === 0) {
                            props.unfollow(u.id) 
                        }
                    }) 
                }}>Unfollow</button>
            }

        </div>)}
    </div>
}

export default Users