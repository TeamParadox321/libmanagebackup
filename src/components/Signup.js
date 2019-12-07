import React from 'react'


function Signup() {
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

export default Signup;