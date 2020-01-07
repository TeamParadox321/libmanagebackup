import React,{Component} from 'react';
import axios from 'axios';
import Close from "../AdminComponents/close.png";

export default class UserLogin extends Component{
    constructor(props) {
        super(props);

        this.onChangeUsrId = this.onChangeUsrId.bind(this);
        this.onChangeUsrPassword = this.onChangeUsrPassword.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.state={
            user_id:"",
            user_password:""
        }
    }
    onChangeUsrId(e){
        this.setState({
            user_id : e.target.value
        })
    }
    onChangeUsrPassword(e){
        this.setState({
            user_password : e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        const newUser = {
            user_id: this.state.user_id,
            user_password: this.state.user_password
        };
        axios.post('http://localhost:4000/users/user_login', newUser)
            .then(res=>{
                if(res.data.token!=null){
                    localStorage.setItem('usertoken', res.data.token);
                    localStorage.setItem('userrole', res.data.role);
                    localStorage.setItem('userid', res.data.id);
                    alert(res.data.id+' '+res.data.role);
                    this.props.history.push('/');
                    return res.data.token
                }else{
                    alert(res.data);
                }

            }).catch(err=>{
                alert('oh')
            });
        this.setState({
            user_id: '',
            user_password: ''
        });
    }

    render() {
        return (
            <div className="login-form">
                <form onSubmit={this.onSubmit}>
                    <button type="button" className="close " data-dismiss="modal"><img height={"20px"} width={"30px"} src={Close}/></button>
                    <h2 className="text-center text-light"> Student Log in</h2> <br/>
                    <div className="form-group">
                        <p className={"txt"}>Student Id :</p>
                        <input type="text" className="form-control" placeholder="Student ID" required="required"
                               value={this.state.user_id} onChange={this.onChangeUsrId}/>
                    </div>
                    <div className="form-group">
                        <p className={"txt"}>Password :</p>
                        <input type="password" className={"form-control"} placeholder={"Password"} required={"required"}
                               value={this.state.user_password} onChange={this.onChangeUsrPassword}/>
                    </div><br/>
                    <div className="form-group">
                        <button type={"submit"} className={"btn btn-primary btn-block"}>Log in</button>
                    </div>

                </form>
            </div>
        );
    }
}

/*
<div>
                    <span className="clearfix">
                        <label className={"pull-left checkbox-inline"}><input type={"checkbox"}/> Remember me</label>
                        <span style={{}}/>
                        <Link to={"/student_registration"} className={"pull-right"}>Forgot Password?</Link>
                    </span>
                    <span className={"pull-right"}>
                        <Link to={"/student_signup"}>Create an Account</Link>
                    </span>
                </div>
 */