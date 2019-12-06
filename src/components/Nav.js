import React from 'react'
import { Link } from "react-router-dom";
import Logo from "./uoklogo.png";

function Nav(){
    return (
        <div>
            <nav className="navb navbar navbar-expand-md navbar-dark bg-dark">
                <Link to={"/"} className="navbar-brand">
                    <img src={Logo} width={"45"} height={"45"} alt="CoolBrand" />

                </Link>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav">
                        <Link to={"/"}> <h4 className={"header-text"}>Library Management System </h4> </Link>
                    </div>
                    <div className="navbar-nav">
                        <Link to={"/"} className="nav-item nav-link"> Home </Link>
                        <Link to="/" className="nav-item nav-link"> Books </Link>
                        <Link to="/" className="nav-item nav-link"> AAAAAA </Link>
                        <Link to={"/"} className="nav-item nav-link disabled" tabIndex="-1"> BBBB </Link>
                    </div>
                    <div className="navbar-nav ml-auto">
                        <Link to={"/"} className="nav-item nav-link"> Sign Up </Link>
                        <Link to={"/student_login"} className="nav-item nav-link"> Student Login </Link>
                        <Link to={"/admin_login"} className="nav-item nav-link">Admin Login</Link>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Nav;