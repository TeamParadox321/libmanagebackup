import React from 'react';
import {Link} from  'react-router-dom'



function AdminLogin() {
    return(
        <div className="login-form">
            <form action="/examples/actions/confirmation.php" method="post">
                <h2 className="text-center">Admin Log in</h2>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Username" required="required"/>
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" placeholder="Password" required="required"/>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-block">Log in</button>
                </div>
                <div className="clearfix">
                    <label className="pull-left checkbox-inline"><input type="checkbox"/> Remember me</label>
                    <Link href="#" className="pull-right">Forgot Password?</Link>
                </div>
            </form>
        </div>
    )

}

export default AdminLogin;