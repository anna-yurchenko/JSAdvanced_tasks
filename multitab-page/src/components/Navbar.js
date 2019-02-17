import React, { Component } from 'react';

class Navbar extends Component {
    constructor() {
        super();
        this.change = this.change.bind(this);
    }

    change(page) {
        this.props.change(page);
    }

    render(){
        return(
          <nav className="navbar navbar-default">
            <div className="container">
              <div className="navbar-header">
                <a className="navbar-brand" href="#">{this.props.brand}</a>
              </div>
              <div id="navbar">
                <ul className="nav navbar-nav">
                  <li className={(this.props.currentPage === 'home') ? 'active': ''}>
                    <a onClick={this.change.bind(this,'home')} href="#">Home</a></li>
                  <li className={(this.props.currentPage === 'about') ? 'active': ''}>
                    <a onClick={this.change.bind(this,'about')} href="#">About</a></li>
                  <li className={(this.props.currentPage === 'contact') ? 'active': ''}>
                    <a onClick={this.change.bind(this,'contact')} href="#">Contact</a></li>
                  <li className={(this.props.currentPage === 'register') ? 'active': ''}>
                    <a onClick={this.change.bind(this,'register')} href="#">Register</a></li>
                  <li className={(this.props.currentPage === 'login') ? 'active': ''}>
                    <a onClick={this.change.bind(this,'login')} href="#">Log in</a></li>
                </ul>
              </div>
            </div>
          </nav>
        );
      }
}

export default Navbar;