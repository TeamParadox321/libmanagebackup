import React,{Component} from 'react';
import axios from 'axios';

export default class Signup extends Component{
    constructor(props) {
        super(props);

        this.onChangeStuId = this.onChangeStuId.bind(this);
        this.onChangeStuEmail = this.onChangeStuEmail.bind(this);
        this.onChangeStuName = this.onChangeStuName.bind(this);
        this.onChangeStuPassword = this.onChangeStuPassword.bind(this);
        this.onConfirmStuPassword = this.onConfirmStuPassword.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.state={
            stu_id:"",
            stu_email:"",
            stu_name:"",
            stu_password:"",
            stu_confirm_password:""
        }
    }
    onChangeStuId(e){
        this.setState({
            stu_id : e.target.value
        })
    }
    onChangeStuName(e){
        this.setState({
            stu_name : e.target.value
        })
    }
    onChangeStuEmail(e){
        this.setState({
            stu_email : e.target.value
        })
    }
    onChangeStuPassword(e){
        this.setState({
            stu_password : e.target.value
        })
    }

    onConfirmStuPassword(e){
        this.setState({
            stu_confirm_password:e.target.value
        })
    }


    onSubmit(e) {
        if(this.state.stu_password==this.state.stu_confirm_password){
            e.preventDefault();

            const newUser = {
                stu_id: this.state.stu_id,
                stu_name: this.state.stu_name,
                stu_email: this.state.stu_email,
                stu_password: this.state.stu_password
            }
            axios.post('http://111.223.165.203:4000/student/student_signup', newUser);
            this.setState({
                stu_id: '',
                stu_name: '',
                stu_email: '',
                stu_password: '',
                stu_confirm_password:''
            });
            alert("Registration Successful");
        }else{
            alert("Password does not match");
            e.preventDefault();
        }


    }


    render() {
        return (
            <div className="login-form">
                <form onSubmit={this.onSubmit}>
                    <h2 className="text-center">Sign up</h2>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Student ID" required="required"
                        value={this.state.stu_id} onChange={this.onChangeStuId}/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Email" required="required"
                        value={this.state.stu_email} onChange={this.onChangeStuEmail}/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Name With Initials"
                               required="required"
                        value={this.state.stu_name} onChange={this.onChangeStuName}/>
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="Password" required="required"
                        value={this.state.stu_password} onChange={this.onChangeStuPassword}/>
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="Confirm Password"
                               required="required"
                        value={this.state.stu_confirm_password} onChange={this.onConfirmStuPassword}/>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary btn-block">Sign up</button>
                    </div>
                </form>
            </div>
        );


    }

}

