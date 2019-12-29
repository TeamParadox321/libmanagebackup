import React from 'react';
import {Link} from "react-router-dom";
import User from './user.png';
import Signup from "../../UserComponents/Signup";
const SSignUp = () => (
    <div className="container">
        <div className="modal close" id="myModal2" data-dismiss="modal">
            <div>
                <Signup/>
            </div>
        </div>
    </div>
);

function Header(props) {
    return (
        <header>
            <div>
                <nav className="navb navbar navbar-expand-md navbar-dark bg-dark">
                    <span className="icon navbar-brand navbar-toggler-icon" onClick={props.click}></span>
                    <Link to={"/"} className={""}> <h5 className={"header-text navbar-brand"}>Library Management System </h5> </Link>
                    <div className={"navbar-brand spacer"}></div>
                    <li className="navbar-brand nav-item nav-link">
                        <a data-toggle="modal" data-target="#myModal2" className="lg nav-link text-light" href={""}>Sign Up</a>
                    </li>
                </nav>
            </div>
            <SSignUp/>
        </header>
    );
}

export default Header;


