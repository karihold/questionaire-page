import React from 'react';
import './result-answer.scss';

const ResultAnswer = ({ question, answer }) => {
  if (!answer) return <></>;

  return (
    <div className="result-answer-wrapper">
      <dt className="result-question">{question}</dt>
      <dd className="result-answer">{answer}</dd>
    </div>
  );
};

export default ResultAnswer;
