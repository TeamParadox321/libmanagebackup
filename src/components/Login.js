import React from 'react';
import {Link} from  'react-router-dom'



function Login() {
    return(
        <div className="login-form">
            <form>
                <h2 className="text-center"> Student Log in</h2>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Student ID" required="required"/>
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" placeholder="Password" required="required"/>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-block">Log in</button>
                </div>
                <div>
                    <span className="clearfix">
                        <label className="pull-left checkbox-inline"><input type="checkbox"/> Remember me</label>
                        <Link to={"/student_registration"} className="pull-right">Forgot Password?</Link>
                    </span>
                    <span className={"pull-right"}>
                        <Link to="/student_signup">Create an Account</Link>
                    </span>
                </div>
            </form>

        </div>
    )

}

export default Login;