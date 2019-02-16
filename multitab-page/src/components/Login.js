import React, { Component } from 'react';
class Login extends Component{
    render(){
        return(
            <div className="regLoginForm">
                <div className="regLoginInput">
                    <p className="labelText">Email</p>
                    <input type="text" placeholder="Enter email..." className="form-control" />
                    <p className="labelText">Password</p>
                    <input type="text" placeholder="Enter password..." className="form-control" />
                </div>
                <p><a className="btn btn-primary btn-lg" href="#" role="button">Log in</a></p>
            </div>
        )
    }
}

export default Login;