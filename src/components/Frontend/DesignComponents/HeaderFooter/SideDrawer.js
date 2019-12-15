import React from "react";
import {Link} from "react-router-dom";
import './SideDrawer.css';
import User from './user.png'

const sideDrawer = props => (
        <div className="side-drawer bg-dark border-right">
            <div className="list-group list-group-flush">
                <center><img src={User} className={"img"} width={"100px"} height={"100px"}/><br/>
                <h1 className={"text-light"}>Username</h1></center>
                <Link to="/" className="list-group-item list-group-item-action bg-dark" onClick={props.click}>Home</Link>
                <Link to="/all_students" className="list-group-item list-group-item-action bg-dark" onClick={props.click}>All Students</Link>
                <Link to="/add_students" className="list-group-item list-group-item-action bg-dark" onClick={props.click}>Add Students</Link>
                <Link to="/book_status" className="list-group-item list-group-item-action bg-dark" onClick={props.click}>Book Status</Link>
                <Link to="/all_fines" className="list-group-item list-group-item-action bg-dark" onClick={props.click}>Fines</Link>
                <Link to="/inventory_books" className="list-group-item list-group-item-action bg-dark" onClick={props.click}>All Books</Link>
                <Link to="/add_books" className="list-group-item list-group-item-action bg-dark" onClick={props.click}>Add Books</Link>
            </div>

        </div>
);

export default sideDrawer;