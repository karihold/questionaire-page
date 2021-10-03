import React from 'react';
import { useQuestionsContext } from 'context/questions-context';
import ResultAnswer from 'components/result-answer/result-answer';
import Question from 'constants/question-names';
import './result.scss';

const Result = () => {
  const { answers } = useQuestionsContext();

  return (
    <div className="results-wrapper">
      <h1 className="result-h1">Result</h1>
      <dl>
        <ResultAnswer question="What’s your name?" answer={answers[Question.Name]} />
        <ResultAnswer question="What’s your favorite color?" answer={answers[Question.FavoriteColor]} />
        <ResultAnswer
          question={`Why is ${answers[Question.FavoriteColor]} your favorite color?`}
          answer={answers[Question.ColorReason]}
        />
        <ResultAnswer
          question={`How much do you love the color ${answers[Question.ColorLoveScale]} from 1-100?`}
          answer={answers[Question.ColorLoveScale]}
        />
      </dl>
    </div>
  );
};

export default Result;
