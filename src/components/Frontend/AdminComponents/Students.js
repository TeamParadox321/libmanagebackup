import React, {Component} from 'react';
import axios from 'axios';
import { Link,NavLink } from "react-router-dom";

const Student = props => (
    <tr>
        <td> {props.book.book_id} </td>
        <td> {props.book.book_title} </td>
        <td> {props.book.book_category} </td>
        <td> {props.book.book_author} </td>
        <td> <Link to={"/update_students"+props.student._id}> Edit </Link> </td>
    </tr>
);

export default class Students extends Component{
    constructor(props){
        super(props);
        this.state = {students: []};
    }

    componentDidMount(){
        axios.get('http://localhost:4000/students/')
            .then(response=>{
                this.setState({students: response.data})
            })
            .catch(function (error) {
                console.log(error)
            });
    }
    componentDidUpdate(){
        axios.get('http://localhost:4000/students/')
            .then(response=>{
                this.setState({students: response.data})
            })
            .catch(function (error) {
                console.log(error)
            });
    }
    studentList(){
        return this.state.students.map(function (currentStudent, i) {
            return <Student student={currentStudent} key={i} />
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
            </div>
        )
    }
}
