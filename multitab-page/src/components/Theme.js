import React, { Component } from 'react';
import Jumbotron from './Jumbotron';
import Page from './Page';
import Navbar from './Navbar';
import Registration from './registration';
import Login from './Login';

class Theme extends Component {
    constructor() {
        super();
        this.state = {
            currentPage: 'home'
        }
        this.handleChange = this.handleChange.bind( this );
    }

    handleChange(page) {
        this.setState({
            currentPage: page
        });
    }

    render(){
        var jumbotron;
        if(this.state.currentPage == 'home'){
          jumbotron = <Jumbotron heading={this.props.heading} text={this.props.text} />;
        } else {
          jumbotron = '';
        }

        var register;
        if(this.state.currentPage == 'register'){
          register = <Registration heading={this.props.heading} text={this.props.text} />;
        }

        var login;
        if(this.state.currentPage == 'login'){
          register = <Login heading={this.props.heading} text={this.props.text} />;
        }

        return(
          <div>
            <Navbar currentPage={this.state.currentPage} brand={this.props.brand} change={this.handleChange} />
            {jumbotron}
            {register}
            {login}
            <Page currentPage={this.state.currentPage} />
          </div>
        );
      }
}

Theme.defaultProps = {
    brand:'React.JS - Logos',
    heading:'Hello, world!',
    text:'This is demo application created by me'
}

export default Theme;