import React,{Component} from 'react';
import axios from 'axios';

class Signup extends Component() {
    constructor(props) {
        super(props);
        this.state={
            stu_id:"",
            stu_email:"",
            stu_name:"",
            stu_password:"",
            stu_confirm_password:""
        }
    }
    render() {
        return(
            <div className="login-form">
                <form>
                    <h2 className="text-center">Sign up</h2>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Student ID" required="required"/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Email" required="required"/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Name With Initials" required="required"/>
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="Password" required="required"/>
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="Confirm Password" required="required"/>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary btn-block">Sign up</button>
                    </div>
                </form>
            </div>
        )

    }


}

export default Signup;