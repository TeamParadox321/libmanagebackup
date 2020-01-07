import React, {Component} from 'react';
import axios from 'axios';
import { Link,NavLink } from "react-router-dom";
import AddBooks from "./AddBooks";

const ADD = () => (
    <div className="container">
        <div className="modal close" id="myModal" data-dismiss="modal">
            <div>
                <AddBooks/>
            </div>
        </div>
    </div>
);

const User = props => (
    <tr>
        <td> {props.user.user_id} </td>
        <td> {props.user.user_name} </td>
        <td> {props.user.user_email} </td>
        <td> {props.user.user_phone_number} </td>
        <td> <Link to={"/update_students"+props.user._id}> Edit </Link> </td>
    </tr>
);
export default class Users extends Component{
    constructor(props){
        super(props);
        this.state = {users: []};
    }
    componentDidMount(){
        axios.get('http://localhost:4000/users/')
            .then(response=>{
                this.setState({users: response.data})
            })
            .catch(function (error) {
                console.log(error)
            });
    }
    componentDidUpdate(){
        axios.get('http://localhost:4000/users/')
            .then(response=>{
                this.setState({users: response.data})
            })
            .catch(function (error) {
                console.log(error)
            });
    }
    studentList(){
        return this.state.users.map(function (currentUser, i) {
            return <User user={currentUser} key={i} />
        })
    }
    render(){
        return (
            <div className="container">
                <br/><br/><br/>
                <h2>All Students</h2>
                <table className="table text-light bg-secondary table-hover">
                    <thead>
                    <tr>
                        <th>Student ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Update</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.studentList()}
                    </tbody>
                </table>
                <br />
                <br />
                <ADD/>
                <center><button type="button" className="btn btn-primary bg-dark" data-toggle="modal" data-target="#myModal">Add Students</button></center>
            </div>
        )
    }
}
