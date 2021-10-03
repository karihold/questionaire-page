import React from 'react';
import { useQuestionsContext } from 'context/questions-context';
import QuestionNames from 'constants/question-names';
import './result.scss';

const Result = () => {
  const { answers } = useQuestionsContext();

  return (
    <>
      <h1>Result</h1>
      <p>{answers[QuestionNames.Name]}</p>
      <p>{answers[QuestionNames.FavoriteColor]}</p>
      <p>{answers[QuestionNames.ColorReason]}</p>
      <p>{answers[QuestionNames.ColorLoveScale]}</p>
    </>
  );
};

export default Result;
