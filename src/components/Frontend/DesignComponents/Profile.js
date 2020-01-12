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
        const modal = document.getElementById('id01');

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        };

        return (
            <div className="container">
                <br/><br/><br/>
                <h2>{this.state.user_role}</h2>
                <div className="text-center">
                    <a href="#myModal" className="trigger-btn" data-toggle="modal">Click to Open Confirm Modal</a>
                </div>

                <div id="myModal" className="modal">
                    <div className="modal-dialog modal-confirm">
                        <div className="modal-content">
                            <div className="modal-header">
                                <div className="icon-box">
                                    <i className="material-icons">&#xE876;</i>
                                </div>
                                <h4 className="modal-title">Awesome!</h4>
                            </div>
                            <div className="modal-body">
                                <p className="text-center">Your booking has been confirmed. Check your email for
                                    detials.</p>
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-success btn-block" data-dismiss="modal">OK</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
