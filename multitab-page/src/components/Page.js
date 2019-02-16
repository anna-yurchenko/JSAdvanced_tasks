import React, { Component } from 'react';

class Page extends Component {
    render(){
        var pageContent;
        if(this.props.currentPage == 'home'){
          pageContent = 'This is the home page';
        } else if(this.props.currentPage == 'about'){
          pageContent = 'This is the about page';
        } else if(this.props.currentPage == 'contact'){
          pageContent = 'This is the contact page';
        } else if(this.props.currentPage == 'register'){
          pageContent = '';
        }
        else if(this.props.currentPage == 'login'){
          pageContent = '';
        }
        else {
          pageContent = 'This is the home page';
        }

        if(this.props.currentPage != 'register' && this.props.currentPage != 'login'){
          return(
            <div>
              <div className="container">
                <h2>{this.props.currentPage.charAt(0).toUpperCase() + this.props.currentPage.slice(1)}</h2>
                {pageContent}
              </div>
            </div>
          );
        }
        else{
          return(
            <div>
              <div className="container">
                {pageContent}
              </div>
            </div>
          );
        }
      }
}

export default Page;