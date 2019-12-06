import React from 'react';
import {Link} from 'react-router-dom'

function Nav(){
    return (
        <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <div className="navbar-header">
                    <Link className="navbar-brand" to="#">FCT LIBRARY MANAGEMENT SYSTEM</Link>
                </div>
                <ul className="nav navbar-nav">
                    <li className="active"><Link to="#">Home</Link></li>
                    <li><Link to="#">Books</Link></li>
                    <li><Link to="#">History</Link></li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                    <li><Link to="/"><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li>
                    <li><Link to="/student_login"><span className="glyphicon glyphicon-log-in"></span> User Login</Link></li>
                    <li><Link to="/admin_login"><span className="glyphicon glyphicon-log-in"></span> Admin Login</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;