import React, {Component} from 'react';

class Register extends Component {

    constructor() {
        super();
        this.state = {
            submitted: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(k) {
        var submittedUpdate = this.props.submitted;
        if (k.keyCode === 13) {
            submittedUpdate = true;
        }

        this.setState({submitted: submittedUpdate})
        
        this.props.handleGetNewState(submittedUpdate);
        this.props.handleNameSubmit(this.refs.name.value)
    }

    render() {
        return ( 
            <div>
                <div className = "nameField" >
                    <p className = "label" > Please, enter your name to begin </p>
                    <input className = "inputField" placeholder = "Enter name..." ref = "name" onKeyDown = {this.handleSubmit}></input>
                </div>
            </div>
        )
    }
}

export default Register;