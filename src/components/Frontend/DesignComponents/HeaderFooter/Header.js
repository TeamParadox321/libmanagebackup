import React from 'react';
import {Link} from "react-router-dom";
import User from './user.png';
function Header(props) {
    return (
        <header>
            <div>
                <nav className="navb navbar navbar-expand-md navbar-dark bg-dark">
                    <span className="icon navbar-brand navbar-toggler-icon" onClick={props.click}></span>


                    <Link to={"/"} className={""}> <h5 className={"header-text navbar-brand"}>Library Management System </h5> </Link>

                    <div className={"navbar-brand spacer"}></div>

                    <li className="dr navbar-brand nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/" id="navbardrop" data-toggle="dropdown">
                            <img src={User} height={"25px"} width={"25px"}/>
                        </a>
                        <div className="dropdown-menu">
                            <Link className="dr dropdown-item bg-dark text-light" to={"/student_signup"}>Student Sign Up</Link>
                            <Link className="dr dropdown-item bg-dark text-light" to={"/student_login"}>Student Sign In</Link>
                            <Link className="dr dropdown-item bg-dark text-light" to={"/admin_login"}>Admin Log In</Link>
                            <Link className="dr dropdown-item bg-dark text-light" to={"/"}>Sign Out</Link>
                        </div>
                    </li>
                </nav>
            </div>
        </header>
    );
}

export default Header;


