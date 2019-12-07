import React from 'react'
import { Link,NavLink } from "react-router-dom";
import Logo from "./uoklogo.png";

function Nav(){
    return (
        <div>
            <nav className="navb navbar navbar-expand-md navbar-dark bg-dark">
                <Link to={"/"} className="navbar-brand">
                    <img src={Logo} width={"45"} height={"45"} alt="CoolBrand" />
                </Link>
                <div className="navbar-nav">
                    <Link to={"/"} className={"navbar-nav"}> <h5 className={"header-text"}>Library Management System </h5> </Link>
                </div>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                &nbsp; &nbsp; &nbsp;
                <div className="collapse navbar-collapse" id="navbarCollapse">

                    <div className="navbar-nav">
                        <Link to={"/"} className="nav-item nav-link"> Home </Link>
                        <div className="nav-item dropdown nav-link dropdown-toggle" id="navbardrop" data-toggle="dropdown">
                            Books
                            <div className="dropdown-menu">
                                <Link to={"/inventory_books"} className="dropdown-item"> Inventory Books </Link>
                                <Link to={"/online_search"} className="dropdown-item"> Online Search </Link>
                            </div>
                        </div>
                        <Link to="/about_us" className="nav-item nav-link"> About Us </Link>
                    </div>
                    <div className="navbar-nav">
                        <div className="nav-item dropdown nav-link dropdown-toggle" id="navbardrop" data-toggle="dropdown">
                            Admin
                            <div className="dropdown-menu">
                                <Link to={"/students"} className="dropdown-item"> Students </Link>
                                <Link to={"/add_books"} className="dropdown-item"> Add Books </Link>
                                <Link to={"/update_books"} className="dropdown-item"> Update Books </Link>
                                <Link to={"/books_issue"} className="dropdown-item"> Books Issue </Link>
                            </div>
                        </div>
                    </div>
                    <div className="navbar-nav ml-auto">

                        <div className="nav-item dropdown nav-link dropdown-toggle" id="navbardrop" data-toggle="dropdown">
                            Sign In
                            <div className="dropdown-menu">
                                <Link to={"/student_login"} className="dropdown-item"> Student Login </Link>
                                <Link to={"/admin_login"} className="dropdown-item">Admin Login</Link>
                            </div>
                        </div>
                        <Link to={"/student_signup"} className="nav-item nav-link"> Sign Up </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Nav;