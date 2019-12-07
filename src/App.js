import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./components/style.css"
import './App.css';
import Home from './components/Home';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Signup from "./components/Signup";
import AdminLogin from "./components/AdminLogin";
import InventoryBooks from "./components/InventoryBooks";
import AddBooks from "./components/AddBooks";
import UpdateBooks from "./components/UpdateBooks";
function App() {
    return (
        <Router>
            <Header/>
            <div className={"section"}>
                <Route path="/" exact component={Home} />
                <Route path="/student_login" component={Login} />
                <Route path="/admin_login" component={AdminLogin}/>
                <Route path="/student_signup" component={Signup}/>
                <Route path="/inventory_books" component={InventoryBooks}/>
                <Route path="/add_books" component={AddBooks}/>
                <Route path="/update_books:id" component={UpdateBooks}/>
            </div>
            <Footer />
        </Router>
    );
}

export default App;
