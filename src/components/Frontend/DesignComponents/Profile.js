import React, {Component} from 'react';
import axios from 'axios';
import { Link,NavLink } from "react-router-dom";

export default class Profile extends Component{
    constructor(props){
        super(props);
        this.state = {
            user_id : '',
            user_name: '',
            user_email: '',
            user_phone_number: '',
            user_role: '',
            _id: ''
        };
    }
    componentDidMount(){
        var usertoken = localStorage.usertoken;
        if(usertoken!=null){
            axios.post('http://localhost:4000/users/profile', {token: usertoken})
                .then(response=>{
                    this.setState({
                        user_id: response.data.user_id,
                        user_name: response.data.user_name,
                        user_email: response.data.user_email,
                        user_phone_number: response.data.user_phone_number,
                        user_role: response.data.user_role,
                        _id: response.data._id
                    })
                })
                .catch(function (error) {
                    console.log(error)
                });
        }
    }
    render(){
        return (
            <div className="container">
                <br/><br/><br/>
                <h2>{this.state.user_role}</h2>
            </div>
        )
    }
}
