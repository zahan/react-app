import React from 'react';
import css from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <header className={css.header}>
          <h3>Social.42</h3>
          <div>
            { props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
          </div>
        </header>
        )
    };

export default Header;