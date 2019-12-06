import React from 'react'
import { Link } from "react-router-dom";
import Logo from "./uoklogo.png";

function Nav(){
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <a href="#" className="navbar-brand">
                <img src={Logo} width={"28"} height="28" alt="CoolBrand" />
            </a>
            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav">
                    <a href="#" className="nav-item nav-link active">Home</a>
                    <a href="#" className="nav-item nav-link">Books</a>
                    <a href="#" className="nav-item nav-link"> AAAAAA </a>
                    <a href="#" className="nav-item nav-link disabled" tabIndex="-1"> BBBB </a>
                </div>
                <div className="navbar-nav ml-auto">
                    <a href="#" className="nav-item nav-link"> Sign Up </a>
                    <a href="#" className="nav-item nav-link"> Student Login </a>
                    <a href="#" className="nav-item nav-link">Admin Login</a>
                </div>



            </div>
        </nav>

    );
}

export default Nav;