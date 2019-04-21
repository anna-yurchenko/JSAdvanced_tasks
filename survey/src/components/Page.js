import React, { Component } from 'react';
import Header from './Header';
import Register from './Register';
import Questions from './Questions';

class Page extends Component {
    constructor() {
        super();
        this.state = {
            submitted: false,
            id:'',
            name:'',
            answers: {
            q1:'',
            q2:'',
            q3:'',
            q4:''
            },
            completed: false
        }
        this.handleGetNewState = this.handleGetNewState.bind(this);
        this.handleNameSubmit = this.handleNameSubmit.bind(this);
        this.handleQuestionSubmit = this.handleQuestionSubmit.bind(this);
    }

    handleNameSubmit(name){
        this.setState({
            name: name,
            id: Math.random()
        })
      }

    handleGetNewState(k){
        this.setState({
            submitted: k
        })
    }

    handleQuestionSubmit(a){
        this.setState({
            answers: a,
            completed: true
        })
    }

    render(){
        if(this.state.submitted !== true){
        return(
            <div>
                <Header />
                <Register submitted={this.props.submitted} handleGetNewState={this.handleGetNewState} handleNameSubmit={this.handleNameSubmit}/>
            </div>
        )}
        else if(this.state.completed === false){
            return(
                <div>
                    <Header />
                    <Questions name={this.state.name} handleQuestionSubmit={this.handleQuestionSubmit} />
                </div>
            )}
        else{
            console.log(this.state.answers)
            return(
                <div>
                    <Header />
                    <p className="label1">Thank you {this.state.name}, for comleting this survey</p>
                </div>
            )
        }
    }
}

export default Page;