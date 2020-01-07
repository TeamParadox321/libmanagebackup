import React from 'react';
import {Link} from "react-router-dom";
function Books() {
    return (
        <div>
            <Link to={"/all_books"}>
                <div className="container bg-primary p-3 my-3 text-white">
                    <h2 className={"text-light"}>All Books</h2>
                    <p>This container has a border and some extra padding and margins.</p>
                </div>
            </Link>
            <div className="container p-3 my-3 bg-primary text-white">
                <h2 className={"text-light"}>Reserved Books</h2>
                <p>This container has a dark background color and a white text, and some extra padding and margins.</p>
            </div>

            <div className="container p-3 my-3 bg-primary text-white">
                <h2 className={"text-light"}>Recently Borrowed Books</h2>
                <p>This container has a blue background color and a white text, and some extra padding and margins.</p>
            </div>
            <div className="container p-3 my-3 bg-primary text-white">
                <h2 className={"text-light"}>History</h2>
                <p>This container has a blue background color and a white text, and some extra padding and margins.</p>
            </div>
            <div className="container p-3 my-3 bg-primary text-white">
                <h2 className={"text-light"}>Fines</h2>
                <p>This container has a blue background color and a white text, and some extra padding and margins.</p>
            </div>
            <br/>
        </div>
    );
}

export default Books;
