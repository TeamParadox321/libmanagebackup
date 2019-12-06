import React from 'react';

function Nav(){
    return (
        <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#">FCT LIBRARY MANAGEMENT SYSTEM</a>
                </div>
                <ul className="nav navbar-nav">
                    <li className="active"><a href="#">Home</a></li>
                    <li><a href="#">Books</a></li>
                    <li><a href="#">History</a></li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                    <li><a href="/"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
                    <li><a href="/student_login"><span className="glyphicon glyphicon-log-in"></span> User Login</a></li>
                    <li><a href="/admin_login"><span className="glyphicon glyphicon-log-in"></span> Admin Login</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;