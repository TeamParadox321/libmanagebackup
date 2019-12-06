import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./components/style.css"
import './App.css';
import Home from './components/Home';
import Header from "./components/Header";
import Footer from "./components/Footer";
import StudentLogin from "./components/StudentLogin";
function App() {
    return (
        <Router>
            <Header/>
            <Route path="/" exact component={Home} />
            <Route path="/student_login" exact component={StudentLogin} />
            <Footer />
        </Router>
    );
}

export default App;
