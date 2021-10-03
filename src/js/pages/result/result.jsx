import React from 'react';
import { useQuestionsContext } from 'context/questions-context';
import ResultAnswer from 'components/result-answer/result-answer';
import QuestionNames from 'constants/question-names';
import './result.scss';

const Result = () => {
  const { answers } = useQuestionsContext();

  return (
    <div className="results-wrapper">
      <h1 className="result-h1">Result</h1>
      <dl>
        <ResultAnswer question="What’s your name?" answer={answers[QuestionNames.Name]} />
        <ResultAnswer question="What’s your favorite color?" answer={answers[QuestionNames.FavoriteColor]} />
        <ResultAnswer
          question={`Why is ${answers[QuestionNames.FavoriteColor]} your favorite color?`}
          answer={answers[QuestionNames.ColorReason]}
        />
        <ResultAnswer
          question={`How much do you love the color ${answers[QuestionNames.ColorLoveScale]} from 1-100?`}
          answer={answers[QuestionNames.ColorLoveScale]}
        />
      </dl>
    </div>
  );
};

export default Result;
