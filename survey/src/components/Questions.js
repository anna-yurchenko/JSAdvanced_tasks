import React, {Component} from 'react';

class Questions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            answers: {
                q1: '',
                q2: '',
                q3: '',
                q4: ''
            }
        }

        this.handleQuestionChange = this.handleQuestionChange.bind(this);
        this.handleQuestionSubmit = this.handleQuestionSubmit.bind(this);
    }

    handleQuestionChange(event){
        var newAnswers = this.state.answers;
        if(event.target.name === 'q1'){
            newAnswers.q1 = event.target.value;
        }
        else if(event.target.name === 'q2'){
            newAnswers.q2 = event.target.value;
        }
        else if(event.target.name === 'q3'){
            newAnswers.q3 = event.target.value;
        }
        else if(event.target.name === 'q4'){
            newAnswers.q4 = event.target.value;
        }

        this.setState({
            answers: newAnswers
        })

    }

    handleQuestionSubmit(b){
        b.preventDefault();
        this.props.handleQuestionSubmit(this.state.answers);
    }

    render(){
        return(
        <div>
            <p className="label">Welcome, {this.props.name}</p>
            <span>
                <p className="labelSmaller">Survey Questions</p>
                <form>
                    <div className="question">
                        <label>What is your favorite operating system?</label><br />
                        <div className="answerBlock">
                            <div><input type="radio" name="q1" value="Windows" className="answers" onChange={this.handleQuestionChange} />Windows<br /></div>
                            <div><input type="radio" name="q1" value="OSX" className="answers" onChange={this.handleQuestionChange} />OSX<br /></div>
                            <div><input type="radio" name="q1" value="Linux" className="answers" onChange={this.handleQuestionChange} />Linux<br /></div>
                            <div><input type="radio" name="q1" value="Solaris" className="answers" onChange={this.handleQuestionChange} />Solaris<br /></div>
                            <div><input type="radio" name="q1" value="Other" className="answers" onChange={this.handleQuestionChange} />Other<br /></div>
                        </div>
                    </div>
                    <div className="question">
                        <label>What is your favorite brand of TV?</label><br />
                        <div className="answerBlock">
                            <div><input type="radio" name="q2" value="Sony" className="answers" onChange={this.handleQuestionChange} />Sony<br /></div>
                            <div><input type="radio" name="q2" value="Samsung" className="answers" onChange={this.handleQuestionChange} />Samsung<br /></div>
                            <div><input type="radio" name="q2" value="Green" className="answers" onChange={this.handleQuestionChange} />Green<br /></div>
                            <div><input type="radio" name="q2" value="Vizio" className="answers" onChange={this.handleQuestionChange} />Vizio<br /></div>
                            <div><input type="radio" name="q2" value="Other" className="answers" onChange={this.handleQuestionChange} />Other<br /></div>
                        </div>
                    </div>
                    <div className="question">
                        <label>What is your favorite Smartphone Brand?</label><br />
                        <div className="answerBlock">
                            <div><input type="radio" name="q3" value="Apple" className="answers" onChange={this.handleQuestionChange} />Apple<br /></div>
                            <div><input type="radio" name="q3" value="Samsung" className="answers" onChange={this.handleQuestionChange} />Samsung<br /></div>
                            <div><input type="radio" name="q3" value="Nexus" className="answers" onChange={this.handleQuestionChange} />Nexus<br /></div>
                            <div><input type="radio" name="q3" value="Blackberry" className="answers" onChange={this.handleQuestionChange} />Blackberry<br /></div>
                            <div><input type="radio" name="q3" value="Other" className="answers" onChange={this.handleQuestionChange} />Other<br /></div>
                        </div>
                    </div>
                    <div className="question">
                        <label>What is your favorite CPU Brand?</label><br />
                        <div className="answerBlock">
                            <div><input type="radio" name="q4" value="Intel" className="answers" onChange={this.handleQuestionChange} />Intel<br /></div>
                            <div><input type="radio" name="q4" value="AMD" className="answers" onChange={this.handleQuestionChange} />AMD<br /></div>
                            <div><input type="radio" name="q4" value="Nvidia" className="answers" onChange={this.handleQuestionChange} />Nvidia<br /></div>
                            <div><input type="radio" name="q4" value="ARM" className="answers" onChange={this.handleQuestionChange} />ARM<br /></div>
                            <div><input type="radio" name="q4" value="Other" className="answers" onChange={this.handleQuestionChange} />Other<br /></div>
                        </div>
                    </div>
                    <input type="submit" value="Submit" className="submitBtn" onClick={this.handleQuestionSubmit}/>
                </form>
            </span>
        </div>
        )
    }
}

export default Questions;