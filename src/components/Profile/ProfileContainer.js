//Services
import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {getProfileUserCardThunkCallback, changeUserStatusThunkCallback, setNewProfilePhotoThunkCallback} from "../../reducers/profile-reducer";
import {getProfilePageSelector, getProfilePreloaderStateSelector} from "../../selectors/selectors";
//Components
import Profile from "./Profile";
import Preloader from "../common/Preloader/Preloader";

let mapStateToProps = state => ({
    profilePage: getProfilePageSelector(state),
    profilePreloader: getProfilePreloaderStateSelector(state)
});

class ProfileContainer extends React.PureComponent {
    componentDidMount() {
        this.props.getProfileUserCardThunkCallback(); //Получить профиль пользователя, если параметр id не задан тогда получаем свой профиль
    }
    changeUserStatus = (statusString) => {
        this.props.changeUserStatusThunkCallback(statusString); //Установить новый статус
    }
    setNewProfilePhoto = (photoFile) => {
        this.props.setNewProfilePhotoThunkCallback(photoFile); //Установить новое фото профиля
    }

    render() {
        if (this.props.profilePreloader) return <Preloader/> //Если данные в процессе загрузки
        console.log("ProfileContainer Render")
        return (
            <Profile
                profilePage={this.props.profilePage}
                changeUserStatus={this.changeUserStatus}
                setNewProfilePhoto={this.setNewProfilePhoto}
            />
        );
    }
}

export default compose(
    connect(mapStateToProps, {getProfileUserCardThunkCallback, changeUserStatusThunkCallback, setNewProfilePhotoThunkCallback})
)(ProfileContainer);