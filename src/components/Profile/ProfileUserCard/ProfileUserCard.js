//Services
import React from "react";
//Styles
import s from "./ProfileUserCard.module.scss";
//Components
import LargeAvatar from "../../common/LargeAvatar/LargeAvatar";
import UserStatus from "../UserStatus/UserStatus";
import SocialBlock from "../SocialBlock/SocialBlock";
import EditProfile from "../EditProfile/EditProfile";

const ProfileUserCard = props => {
    let {aboutMe, contacts: {...contacts}, lookingForAJob, lookingForAJobDescription, fullName, photos} = props.userData;

    return (
        <div className={s.profileCardWrap}>
           <LargeAvatar
               src={photos.large}
               isItMyPage={props.isItMyPage}
               setNewProfilePhoto={props.setNewProfilePhoto}
           />
           <div className={s.info}>
               <UserStatus
                   userStatus={props.userStatus}
                   changeUserStatus={props.changeUserStatus}
                   isItMyPage={props.isItMyPage}
               />
               <p>{fullName}</p>
               <p>Обо мне: {aboutMe}</p>
               <p>Ищу работу: {lookingForAJob ? <span className={s.jobTrue}>Yes</span> : <span className={s.jobFalse}>No</span>}</p>
               <p>Навыки моей работы: {lookingForAJobDescription ? lookingForAJobDescription : 'Пока не указал'}</p>
               <EditProfile
                   isItMyPage={props.isItMyPage}
                   setNewUserInfo={props.setNewUserInfo}
                   initialValues={props.userData}
               />
           </div>
            <SocialBlock contacts={contacts}/>
        </div>
    );
}

export default ProfileUserCard;