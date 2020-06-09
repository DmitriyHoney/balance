//Services
import React from "react";
import defaultUser from "../../../assets/images/default-user.jpg";
//Styles
import s from "./SmallAvatar.module.scss";
import {NavLink} from "react-router-dom";

const SmallAvatar = props => {
    let userUrl = `/profile/${props.id}`
    return (
        <div className={s.avatarWrap}>
            <NavLink to={userUrl}>
                <img src={props.src || defaultUser} alt="Avatar-sm"/>
            </NavLink>

        </div>
    );
}

export default SmallAvatar;