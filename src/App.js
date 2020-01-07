import React, {Component} from 'react';
import { BrowserRouter as Router, Route,Switch, Link} from "react-router-dom";
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
import Users from "./components/Frontend/AdminComponents/Users";
import User from "./components/Frontend/DesignComponents/HeaderFooter/user.png"
import Books from "./components/Frontend/UserComponents/Books";
import AllBooks from "./components/Frontend/UserComponents/AllBooks";
import Profile from "./components/Frontend/UserComponents/Profile";
import axios from "axios";


class App extends Component{
    constructor(props){
        super(props);
        this.nullState = this.nullState.bind(this);
        this.fullState = this.fullState.bind(this);
        this.state = {
            token: localStorage.usertoken,
            id: localStorage.userid,
            role: localStorage.userrole
        };
    }
    componentDidMount(){
        this.setState({
            token: localStorage.usertoken,
            id: localStorage.userid,
            role: localStorage.userrole
        })
    }
    nullState(){
        this.setState({
            token: null,
            id: null,
            role: null
        })
    }
    fullState(){
        this.setState({
            token: localStorage.usertoken,
            id: localStorage.userid,
            role: localStorage.userrole
        })
    }
    componentDidUpdate(){
        var millisecondsToWait = 500;
        const newUser = {
            token: this.state.token
        };
        setTimeout(function() {

            axios.post('http://localhost:4000/users/check', newUser)
                .then(response=>{
                    if(response.data){
                        this.fullState();
                    }else {
                        this.nullState();
                    }

                })
                .catch(function (error) {
                    console.log(error);
                    //this.nullState();
                });
        }, millisecondsToWait);

    }
    render() {
        let log = this.state.token==null ? (<li>
            <a data-toggle="modal" data-target="#signIn"><span className="fa fa-sign-in mr-3"></span> Sign In </a>
            </li>) : ' ';
        let logout = this.state.token!=null ? (<li>
            <a onClick={()=>{
                alert('token : '+localStorage.usertoken);
                localStorage.removeItem("usertoken");
                localStorage.removeItem("userrole");
                localStorage.removeItem("userid");
            }
            }><span className="fa fa-sign-out mr-3"> </span> Sign Out</a>
            </li>) : '';
        let id = this.state.id;
        return (
            <Router>
                <Header/>
                <div className="wrapper d-flex align-items-stretch">
                    <nav id="sidebar">
                        <div className="custom-menu">

                        </div>
                        <div className="img bg-wrap text-center py-4">
                            <div className="user-logo">
                                <img src={User} height={"30px"} width={"30px"} className="img"/>
                                <h3>{id}</h3>
                            </div>
                        </div>
                        <ul className="list-unstyled components mb-5">
                            <li className="active">
                                <Link to="/"><span className="fa fa-home mr-3"></span> Home</Link>
                            </li>
                            <li>
                                <Link to="/profile"><span className="fa fa-gift mr-3"></span> Profile </Link>
                            </li>
                            <li>
                                <Link to="/books"><span className="fa fa-trophy mr-3"></span> Books </Link>
                            </li>
                            <li>
                                <a data-toggle="modal" data-target="#signUp"><span className="fa fa-sign-in mr-3"></span> Sign Up </a>
                            </li>
                            {log}
                            {logout}
                            <button onClick={()=>{
                                alert(this.state.token);
                            }}> check </button>
                        </ul>

                    </nav>

                    <div id="content" className="p-4 p-md-5 pt-5">
                        <Route path={"/"} exact={""} component={Home}/>
                        <Route path={"/books"} component={Books}/>
                        <Route path={"/all_books"} component={AllBooks}/>
                        <Route path={"/profile"} component={Profile}/>
                        <Route path={"/students"} component={Users}/>
                        <Route path={"/inventory_books"} component={InventoryBooks}/>
                    </div>
                </div>
                <div className="container">
                    <div className="modal close" id="signUp" data-dismiss="modal">
                        <div>
                            <Signup/>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="modal close" id="signIn" data-dismiss="modal">
                        <div>
                            <UserLogin/>
                        </div>
                    </div>
                </div>
                <Footer/>
            </Router>
        );
    }
}

export default App;
