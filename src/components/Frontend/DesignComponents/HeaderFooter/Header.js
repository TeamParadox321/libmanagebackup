import React from 'react';
import {Link} from "react-router-dom";
function Header(props) {
    return (
        <header>
            <div>
                <nav className="navb navbar navbar-expand-md navbar-dark">
                    <button type="button" id="sidebarCollapse" className="btn btn-primary">
                    </button>
                    <div className={"navbar-brand spacer"}></div>
                    <Link to={"/"} className={""}> <h2 className={"header-text"}>Library Management System </h2> </Link>
                    <div className={"navbar-brand spacer"}></div>
                </nav>
            </div>
        </header>
    );
}

export default Header;


