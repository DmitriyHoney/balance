import React from "react";
import Login from "./Login";
import {compose} from "redux";
import {connect} from "react-redux";
import {loginInTheSiteThunkCallback} from "../../reducers/auth-reducer";
import {Redirect} from "react-router-dom";
import {getAuthState, getCaptchaUrl} from "../../selectors/selectors";

let mapStateToProps = state => ({
    isAuth: getAuthState(state),
    captchaUrl: getCaptchaUrl(state)
});


class LoginContainer extends React.Component {
    sendLoginFormData = (formData) => {
        this.props.loginInTheSiteThunkCallback(formData);
    }
    render() {
        if (this.props.isAuth) return <Redirect to={"/profile"}/>
        return (
            <Login
                captchaUrl={this.props.captchaUrl}
                sendLoginFormData={this.sendLoginFormData}
            />
        )
    }
}

export default compose(
    connect(mapStateToProps, {loginInTheSiteThunkCallback})
)(LoginContainer);