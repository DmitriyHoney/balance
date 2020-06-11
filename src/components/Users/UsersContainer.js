//Services
import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {
    getUsersListThunkCallback, goToAnotherPageThunkCallback, toggleFollowUserThunkCallback,
    setTermValueAC, setFriendFilterAC, setAnotherPageAC,
    setDefaultSettingsAC
} from "../../reducers/users-reducer";
//Components
import Users from "./Users";
import {getFriendFilter, getUsersPage, usersPagePreloader} from "../../selectors/selectors";
import {withAuthRedirect} from "../../utils/hoc";

let mapStateToProps = state => ({
    usersPage:          getUsersPage(state),
    usersPagePreloder:  usersPagePreloader(state),
    friend:             getFriendFilter(state)
});

class UsersContainer extends React.Component {
    componentDidMount() {
        this.getUsersList();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.friend !== this.props.friend) {
            this.getUsersList();
        }
    }

    componentWillUnmount() { //Сбрасывать настройки фильтров, поиска и текущей страницы
        this.props.setDefaultSettingsAC()
    }

    getUsersList = () => {
        this.props.getUsersListThunkCallback(); //Получает список пользователей
    }

    goToAnotherPage = newPageNumber => { //Переход на другую страницу
        this.props.goToAnotherPageThunkCallback(newPageNumber);
    }

    toggleFollowUser = (userId, followed) => { //Подписаться или отписаться от пользователя
        this.props.toggleFollowUserThunkCallback(userId, followed);
    }

    render() {
        return <Users
            usersPagePreloader={this.props.usersPagePreloder}
            usersPage={this.props.usersPage}
            goToAnotherPage={this.goToAnotherPage} //Переход на другую страницу
            toggleFollowUser={this.toggleFollowUser}
            setTermValueAC={this.props.setTermValueAC}
            getUsersList={this.getUsersList}
            setFriendFilterAC={this.props.setFriendFilterAC}
            friend={this.props.friend}
            setAnotherPageAC={this.props.setAnotherPageAC}
        />;
    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {getUsersListThunkCallback, goToAnotherPageThunkCallback, toggleFollowUserThunkCallback,
        setTermValueAC, setFriendFilterAC, setAnotherPageAC,
        setDefaultSettingsAC}),
)(UsersContainer);