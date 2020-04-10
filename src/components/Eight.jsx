import React, { Component } from 'react';
import EightCard from './EightCard';

class Eight extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question: "Are you welcomed to this react app?",
            answer: "What is the answer?",
            previous: [
                {
                    Aquestion: "Old questions go here",
                    AnAnswer: "You can't change my mind!"
                }
            ]
        }
    }
    
        async componentDidMount() {
            const { question } = this.state;
            console.log({question})
            const response = await fetch(`https://8ball.delegator.com/magic/JSON/'${question}'`);
            const ballanswer = await response.json();
            console.log(ballanswer);
            console.log(ballanswer.magic.answer);
            this.setState({
                answer: ballanswer.magic.answer
            })
            
        }
    
    addEightCard = () => {
        const newEightList = [ ...this.state.previous, { question: this.state.question, answer: this.state.answer } ]
        this.setState({previous: newEightList, Aquestion: '', AnAnswer:''})
        this.componentDidMount();

    }
    changeQuestion = (event) => {
        this.setState({question: event.target.value})
    }
    render() {
        const { question, answer } = this.state;
        return (
            <div className="eight">
                <div className="dev">
                    <h1>{question}</h1>
                    <h2>{answer}</h2>
                </div>
                <div className="control-nav">
                    <input onChange={this.changeQuestion} value={this.state.question} />
                    <button onClick={this.addEightCard}/>
                </div>
                <div className="eight-body">
                    {
                        this.state.previous.map((eaEight, i) => (
                            <EightCard eightcard={eaEight} index={i}/>
                        ))
                    }
                </div>

            </div>
        )
    }
}

export default Eight;