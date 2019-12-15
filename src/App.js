import React, {Component} from 'react';
import { BrowserRouter as Router, Route,Switch} from "react-router-dom";
import "./components/Frontend/DesignComponents/style.css"
import "./components/Frontend/AdminComponents/Dashboards/simple-sidebar.css"
import './App.css';
import Home from './components/Frontend/DesignComponents/Home';
import Header from "./components/Frontend/DesignComponents/HeaderFooter/Header";
import Footer from "./components/Frontend/DesignComponents/HeaderFooter/Footer";
import UserLogin from "./components/Frontend/UserComponents/UserLogin";
import Signup from "./components/Frontend/UserComponents/Signup";
import AdminLogin from "./components/Frontend/AdminComponents/AdminLogin";
import InventoryBooks from "./components/Frontend/AdminComponents/InventoryBooks";
import AddBooks from "./components/Frontend/AdminComponents/AddBooks";
import UpdateBooks from "./components/Frontend/AdminComponents/UpdateBooks";
import Notfound from "./components/Frontend/DesignComponents/NotFoundComponent/Notfound";
import SideDrawer from './components/Frontend/DesignComponents/HeaderFooter/SideDrawer'
import BackDrop from './components/Frontend/DesignComponents/HeaderFooter/BackDrop'
import IssueBooks from "./components/Frontend/AdminComponents/IssueBooks";
import Students from "./components/Frontend/AdminComponents/Students";

class App extends Component{
    state = {
        sideDrawerOpen:  false
    }
    drawerToggleClickHandler = () => {
        this.setState((prevState)=>{
            return {sideDrawerOpen: !prevState.sideDrawerOpen}
        });
    };
    backDropClickHandler = () => {
        this.setState({sideDrawerOpen: false});
    };
    render() {
        let sideDrawer;
        let backDrop;

        if(this.state.sideDrawerOpen){
            sideDrawer = <SideDrawer click={this.backDropClickHandler}/>
            backDrop = <BackDrop click={this.backDropClickHandler}/>
        }
        return (
            <Router>
                <Header click={this.drawerToggleClickHandler}/>
                {sideDrawer}
                {backDrop}
                <div className={"section"}>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/student_login" component={UserLogin} />
                        <Route path="/admin_login" component={AdminLogin}/>
                        <Route path="/student_signup" component={Signup}/>
                        <Route path="/inventory_books" component={InventoryBooks}/>
                        <Route path="/add_books" component={AddBooks}/>
                        <Route path="/update_books:id" component={UpdateBooks}/>
                        <Route path="/issue_books" component={IssueBooks}/>
                        <Route path="/all_students" component={Students}/>
                        <Route path="*" component={Notfound}/>
                    </Switch>
                </div>
                <Footer/>
            </Router>
        );
    }
}

export default App;
