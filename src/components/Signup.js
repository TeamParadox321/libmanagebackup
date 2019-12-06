import React from 'react'
import {Link} from "react-router-dom";

function Signup() {
    return(
        <div className="login-form">
            <form action="/examples/actions/confirmation.php" method="post">
                <h2 className="text-center">Sign up</h2>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Student ID" required="required"/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Email" required="required"/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Name" required="required"/>
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" placeholder="Password" required="required"/>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-block">Sign up</button>
                </div>
                <div className="clearfix">
                    <label className="pull-left checkbox-inline"><input type="checkbox"/> Remember me</label>
                    <Link href="#" className="pull-right">Forgot Password?</Link>
                </div>
            </form>
            <p className="text-center"><Link href="#">Create an Account</Link></p>
        </div>
    )

}

export default Signup;