import React, { Component } from 'react';

class Eight extends Component {
    state = {
        question: "Are you welcomed to this react app?",
        answer: "What is the answer?"
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
    render() {
        const { question, answer } = this.state;
        return (
            <div>
                <h1>{question}</h1>
                <h2>{answer}</h2>
            </div>
        )
    }
}

export default Eight;