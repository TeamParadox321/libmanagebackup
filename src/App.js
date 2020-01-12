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
import InventoryBooks from "./components/Frontend/AdminComponents/InventoryBooks";
import Notfound from "./components/Frontend/DesignComponents/NotFoundComponent/Notfound";
import Users from "./components/Frontend/AdminComponents/Users";
import User from "./components/Frontend/DesignComponents/HeaderFooter/user.png"
import Books from "./components/Frontend/UserComponents/Books";
import AllBooks from "./components/Frontend/UserComponents/AllBooks";
import Profile from "./components/Frontend/DesignComponents/Profile";
import axios from "axios";
import Book from "./components/Frontend/UserComponents/Book";
import ReservedBooks from "./components/Frontend/UserComponents/ReservedBooks";
import AllReservedBooks from "./components/Frontend/AdminComponents/AllReservedBooks";
import AllIssuedBooks from "./components/Frontend/AdminComponents/AllIssuedBooks";


class App extends Component{
    constructor(props){
        super(props);
        this.nullState = this.nullState.bind(this);
        this.fullState = this.fullState.bind(this);
        if(localStorage.usertoken!=null) {
            axios.post('http://localhost:4000/users/check', {
                token: localStorage.usertoken
            })
                .then(response => {
                    if (response.data) {
                        this.fullState();
                    } else {
                        this.nullState();
                    }

                })
                .catch(function (error) {
                    localStorage.removeItem("usertoken");
                    localStorage.removeItem("userrole");
                    localStorage.removeItem("userid");
                    alert(error);
                });
        }
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
    render() {
        let id = localStorage.userid;
        return (
            <Router>
                <switch>
                    <Header/>
                    <div className="wrapper d-flex align-items-stretch">
                        <nav id="sidebar">
                            <div className="custom-menu">
                            </div>
                            <div className="img bg-wrap text-center py-4">
                                <div className="user-logo">
                                    <img src={User} height={"30px"} width={"30px"} className="img"/>
                                    <h3>{id!=null ? id : 'Unknown'}</h3>
                                </div>
                            </div>
                            <ul className="list-unstyled components mb-5">
                                <li className="active">
                                    <Link to="/"><span className="fa fa-home mr-3"></span> Home</Link>
                                </li>
                                {localStorage.usertoken!=null ? <li className="active">
                                    <Link to="/profile"><span className="fa fa-gift mr-3"></span> Profile </Link>
                                </li> : '' }
                                <li className="active">
                                    <Link to="/books"><span className="fa fa-trophy mr-3"></span> Books </Link>
                                </li>
                                {localStorage.usertoken!=null ? <li className="active">
                                    <Link to="/students"><span className="fa fa-gift mr-3"></span> Students </Link>
                                </li> : '' }
                                {localStorage.usertoken==null ? (<wrapper>
                                    <li className="active">
                                        <a data-toggle="modal" data-target="#signUp"><span className="fa fa-sign-in mr-3"></span> Sign Up </a>
                                    </li>
                                    <li  className="active">
                                    <a data-toggle="modal" data-target="#signIn"><span className="fa fa-sign-in mr-3"></span> Sign In </a>
                                </li></wrapper>) : ' '}
                                {this.state.token!=null ? (<li className="active">
                                    <a onClick={()=>{
                                        localStorage.removeItem("usertoken");
                                        localStorage.removeItem("userrole");
                                        localStorage.removeItem("userid");
                                        this.nullState();
                                    }
                                    }><span className="fa fa-sign-out mr-3"> </span> Sign Out</a>
                                </li>) : ''}
                                <button onClick={()=>{
                                    alert(localStorage.userrole+'  '+this.state.token);
                                }}> check </button>
                            </ul>

                        </nav>

                        <div id="content" className="">

                            <Route path={"/"} exact={""} component={Home}/>
                            <Route path={"/all_books"} component={AllBooks}/>
                            <Route path={"/book/:id"} component={Book}/>
                            <Route path={"/books"} component={Books}/>
                            {localStorage.usertoken!=null ? <wrapper>
                                <Route path={"/profile"} component={Profile}/>
                                <Route path={"/students"} component={Users}/>
                                <Route path={"/inventory_books"} component={InventoryBooks}/>
                                <Route path={"/reserved_books"} component={ReservedBooks}/>
                                <Route path={"/all_reserved_books"} component={AllReservedBooks}/>
                                <Route path={"/all_issued_books"} component={AllIssuedBooks}/>
                                </wrapper> : '' }

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
                                <UserLogin fs={this.fullState}/>
                            </div>
                        </div>
                    </div>
                    <Footer/>
                </switch>
            </Router>
        );
    }
}

export default App;
