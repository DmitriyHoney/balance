import React from 'react';
import s from './Sidebar.module.scss';
import {NavLink} from "react-router-dom";

const Sidebar = props => {
    return (
        <div className={s.section}>
            <aside>
                <ul>
                    <li>
                        <NavLink to="/profile">Profile</NavLink>
                    </li>
                    <li>
                        <NavLink to="/users">Users</NavLink>
                    </li>
                </ul>
            </aside>
        </div>
    );
}

export default Sidebar;