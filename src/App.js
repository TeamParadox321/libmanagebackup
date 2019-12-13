import React from 'react';
import { BrowserRouter as Router, Route,Switch} from "react-router-dom";
import "./components/Frontend/DesignComponents/style.css"
import "./components/Frontend/AdminComponents/Dashboards/simple-sidebar.css"
import './App.css';
import Home from './components/Frontend/DesignComponents/Home';
import Header from "./components/Frontend/DesignComponents/Header";
import Footer from "./components/Frontend/DesignComponents/Footer";
import UserLogin from "./components/Frontend/UserComponents/UserLogin";
import Signup from "./components/Frontend/UserComponents/Signup";
import AdminLogin from "./components/Frontend/AdminComponents/AdminLogin";
import InventoryBooks from "./components/Frontend/AdminComponents/InventoryBooks";
import AddBooks from "./components/Frontend/AdminComponents/AddBooks";
import UpdateBooks from "./components/Frontend/AdminComponents/UpdateBooks";
import AdminDashboard from "./components/Frontend/AdminComponents/Dashboards/AdminDashboard";
import Notfound from "./components/Frontend/DesignComponents/NotFoundComponent/Notfound";

function App() {
    return (
        <Router>

            <Header/>

            <div className={"section"}>
                <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/student_login" component={UserLogin} />
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
