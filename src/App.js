import React from 'react';
import { BrowserRouter as Router, Route,Switch} from "react-router-dom";
import "./components/style.css"
import "./components/Dashboards/simple-sidebar.css"
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
import AdminDashboard from "./components/Dashboards/AdminDashboard";
import Notfound from "./components/Notfound";

function App() {
    return (
        <Router>

            <Header/>

            <div className={"section"}>
                <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/student_login" component={Login} />
                <Route path="/admin_login" component={AdminLogin}/>
                <Route path="/student_signup" component={Signup}/>
                <Route path="/inventory_books" component={InventoryBooks}/>
                <Route path="/add_books" component={AddBooks}/>
                <Route path="/update_books:id" component={UpdateBooks}/>
                <Route path="/admin_dashboard" component={AdminDashboard}/>
                <Route path="*" component={Notfound}/>
                </Switch>
            </div>
            <Footer/>

        </Router>
    );
}
export default App;
