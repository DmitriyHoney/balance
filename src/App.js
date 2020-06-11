//Services
import React, {Suspense} from "react";
import {Redirect, Route} from "react-router-dom";
import {compose} from "redux";
import {connect} from "react-redux";
//Styles
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
//Components
import Sidebar from "./components/Sidebar/Sidebar";
import {getAuthRequestThunkCallback} from "./reducers/auth-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import HeaderContainer from "./components/Header/HeaderContainer";
import {getAuthPreloader, getAuthState} from "./selectors/selectors";

const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer")); //Ленивая загрузка
const UsersContainer = React.lazy(() => import("./components/Users/UsersContainer")); //Ленивая загрузка
const LoginContainer = React.lazy(() => import("./components/Login/LoginContainer")); //Ленивая загрузка


let mapStateToProps = state => ({
    authPreloader: getAuthPreloader(state),
    isAuth: getAuthState(state),
});

class App extends React.Component {
    componentDidMount() {
        this.props.getAuthRequestThunkCallback()
    }

    render() {
        console.log("App Render")
        if (this.props.authPreloader) return <Preloader/>
        return (
            <div className="App">
                <HeaderContainer />
                <Sidebar/>
                <div className="content">
                    <Suspense fallback={<div>Загрузка...</div>}>
                        <Redirect from={"/"} to={"/profile"} />
                        <Route path={"/profile/:userId?"} render={() => <ProfileContainer/>}/>
                        <Route path={"/users"} render={() => <UsersContainer/>}/>
                        <Route path={"/login"} render={() => <LoginContainer/>}/>
                    </Suspense>
                </div>
            </div>
        );
    }
}

export default compose(
    connect(mapStateToProps, {getAuthRequestThunkCallback})
)(App);
