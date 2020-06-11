//Services
import React from "react";
//Styles
//import s from "./Profile.module.scss";
//Components
import ProfileUserCard from "./ProfileUserCard/ProfileUserCard";

const Profile = props => {

    return (
        <div>
            <ProfileUserCard
                userData={props.profilePage.userData}
                userStatus={props.profilePage.userStatus}
                isItMyPage={props.profilePage.isItMyPage}
                changeUserStatus={props.changeUserStatus}
                setNewProfilePhoto={props.setNewProfilePhoto}
                setNewUserInfo={props.setNewUserInfo}
            />
        </div>
    );
}

export default Profile;