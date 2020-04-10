import React from 'react';

const EightCard = ({ eightcard, index }) => {
    return (
        <div className="eight-card">
            <div className="question">
                {eightcard.question}
            </div>
            <div className="answer">
                {eightcard.answer}
            </div>
            <div>{index}</div>
        </div>
    )
}

export default EightCard;