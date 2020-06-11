//Services
import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {getProfileUserCardThunkCallback, changeUserStatusThunkCallback, setNewProfilePhotoThunkCallback,
    setNewUserInfoThunkCallback} from "../../reducers/profile-reducer";
import {getProfilePageSelector, getProfilePreloaderStateSelector} from "../../selectors/selectors";
import {withRouter} from "react-router-dom";
//Components
import Profile from "./Profile";
import Preloader from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../../utils/hoc";


let mapStateToProps = state => ({
    profilePage: getProfilePageSelector(state),
    profilePreloader: getProfilePreloaderStateSelector(state)
});

class ProfileContainer extends React.PureComponent {
    componentDidMount() {
        this.requestUserProfile()
    }

    requestUserProfile() {
        let userId = +this.props.match.params.userId;
        if (!userId) userId = undefined;
        this.props.getProfileUserCardThunkCallback(userId); //Получить профиль пользователя, если параметр id не задан тогда получаем свой профиль
    }

    componentDidUpdate(prevProps, prevState) { //Когда на странице другого пользователя и переходим на свою страницу тогда необходимо чтобы переход выполнился
        if (prevProps.match.params.userId !== this.props.match.params.userId) {
            this.requestUserProfile();
        }
    }

    changeUserStatus = (statusString) => {
        this.props.changeUserStatusThunkCallback(statusString); //Установить новый статус
    }
    setNewProfilePhoto = (photoFile) => {
        this.props.setNewProfilePhotoThunkCallback(photoFile); //Установить новое фото профиля
    }
    setNewUserInfo = (formData) => {
        this.props.setNewUserInfoThunkCallback(formData); //Установить новые данные пользователя (имя, обо мне, контакты)
    }

    render() {
        if (this.props.profilePreloader) return <Preloader/> //Если данные в процессе загрузки
        return (
            <Profile
                profilePage={this.props.profilePage}
                changeUserStatus={this.changeUserStatus}
                setNewProfilePhoto={this.setNewProfilePhoto}
                setNewUserInfo={this.setNewUserInfo}
            />
        );
    }
}

export default compose(
    withAuthRedirect,
    withRouter,
    connect(mapStateToProps, {getProfileUserCardThunkCallback, changeUserStatusThunkCallback, setNewProfilePhotoThunkCallback, setNewUserInfoThunkCallback})
)(ProfileContainer);