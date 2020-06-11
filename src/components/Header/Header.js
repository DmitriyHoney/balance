import React from 'react';
import s from './Header.module.scss';
import {NavLink} from "react-router-dom";

const Header = props => {
    let handleLogoutBtn = () => {
        props.logoutToTheSite()
    }
    return (
        <div className={s.section}>
            <header>
                <NavLink to={"/profile"}>Social App</NavLink>
                {props.isAuth
                    && <button onClick={handleLogoutBtn}>Logout</button>
                }
            </header>
        </div>
    );
}

export default Header;