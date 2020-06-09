//Services
import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {
    getUsersListThunkCallback, goToAnotherPageThunkCallback, toggleFollowUserThunkCallback,
    setTermValueAC, setFriendFilterAC, setAnotherPageAC
} from "../../reducers/users-reducer";
//Components
import Users from "./Users";
import {getFriendFilter, getUsersPage, usersPagePreloader} from "../../selectors/selectors";

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
        console.log("UsersContainer Render")
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
    connect(mapStateToProps, {getUsersListThunkCallback, goToAnotherPageThunkCallback, toggleFollowUserThunkCallback,
        setTermValueAC, setFriendFilterAC, setAnotherPageAC}),
)(UsersContainer);