import React from "react";
import {Link} from "react-router-dom";
import './SideDrawer.css';
import User from './user.png'

const sideDrawer = props => (
        <div className="side-drawer bg-dark border-right">
            <div className="list-group list-group-flush">
                <center><img src={User} className={"img"} width={"100px"} height={"100px"}/><br/>
                <h1 className={"text-light"}>Username</h1></center>
                <Link href="/" className="list-group-item list-group-item-action bg-dark">Home</Link>
                <Link href="/all_students" className="list-group-item list-group-item-action bg-dark">All Students</Link>
                <Link href="/add_students" className="list-group-item list-group-item-action bg-dark">Add Students</Link>
                <Link href="/book_status" className="list-group-item list-group-item-action bg-dark">Book Status</Link>
                <Link href="/all_fines" className="list-group-item list-group-item-action bg-dark">Fines</Link>
                <Link href="/inventory_books" className="list-group-item list-group-item-action bg-dark">All Books</Link>
                <Link href="/add_books" className="list-group-item list-group-item-action bg-dark">Add Books</Link>
            </div>

        </div>
);

export default sideDrawer;