import React from 'react';
import IM from "./i1.jpg";
import IM2 from "./i2.jpg";
import IM3 from "./i3.jpg"

function Home() {
    return (
        <div id="demo" className="carousel slide" data-ride="carousel">

            <ul className="carousel-indicators">
                <li data-target="#demo" data-slide-to="0" className="active"></li>
                <li data-target="#demo" data-slide-to="1"> </li>
                <li data-target="#demo" data-slide-to="2"></li>
            </ul>

            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={IM} alt="Los Angeles" />
                </div>
                <div className="carousel-item">
                    <img src={IM2} alt="Chicago" />
                </div>
                <div className="carousel-item">
                    <img src={IM3} alt="New York" />
                </div>
            </div>
            <a className="carousel-control-prev" href="#demo" data-slide="prev">
                <span className="carousel-control-prev-icon" />
            </a>
            <a className="carousel-control-next" href="#demo" data-slide="next">
                <span className="carousel-control-next-icon" />
            </a>
            <center>
                <h1> Welcome to Library Management System </h1>
                <p> You are welcome to library management system. </p>
            </center>

        </div>
    );
}

export default Home;


