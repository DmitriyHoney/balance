import React from 'react';
import Header from "./Header";
import {compose} from "redux";
import {connect} from "react-redux";
import {logoutToTheSiteThunkCallback} from "../../reducers/auth-reducer";
import {getAuthState} from "../../selectors/selectors";

let mapStateToProps = state => ({
    isAuth: getAuthState(state),
});


class HeaderContainer extends React.Component {
    logoutToTheSite = () => {
        this.props.logoutToTheSiteThunkCallback()
    }

    render() {
        return <Header isAuth={this.props.isAuth} logoutToTheSite={this.logoutToTheSite}/>
    }
}

export default compose(
    connect(mapStateToProps, {logoutToTheSiteThunkCallback})
)(HeaderContainer);