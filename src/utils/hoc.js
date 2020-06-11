import React from "react";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";



export const withAuthRedirect = Component => {
    let mapStateToProps = state => ({
        isAuth: state.authPage.isAuth
    });

    class WithRedirect extends React.Component {
        render() {
            if(this.props.isAuth) return <Component {...this.props}/>
            else return <Redirect to={"/login"} />
        }
    }

    return connect(mapStateToProps, {})(WithRedirect)
}