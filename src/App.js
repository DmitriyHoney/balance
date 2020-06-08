//Services
import React from "react";
import {Route} from "react-router-dom";
//Styles
import "./App.scss";
//Components
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Users from "./components/Users/Users";
import ProfileContainer from "./components/Profile/ProfileContainer";

const App = props => {
  return (
    <div className="App">
        <Header />
        <Sidebar/>
        <div className="content">
            <Route path={"/profile"} render={() => <ProfileContainer />}/>
            <Route path={"/users"} render={() => <Users/>}/>
        </div>
    </div>
  );
}

export default App;
