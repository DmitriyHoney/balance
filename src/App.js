//Services
import React from "react";
import {Route} from "react-router-dom";
//Styles
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
//Components
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Users/UsersContainer";

const App = props => {
  return (
    <div className="App">
        <Header />
        <Sidebar/>
        <div className="content">
            <Route path={"/profile/:userId?"} render={() => <ProfileContainer />}/>
            <Route path={"/users"} render={() => <UsersContainer/>}/>
        </div>
    </div>
  );
}

export default App;
