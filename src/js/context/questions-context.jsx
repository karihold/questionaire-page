import React, { useContext, createContext, useState } from 'react';
import Question from 'constants/question-names';

const defaultAnswers = {
  [Question.Name]: '',
  [Question.FavoriteColor]: '',
  [Question.ColorReason]: '',
  [Question.ColorLoveScale]: 0,
};

const QuestionsContext = createContext({});

export const useQuestionsContext = () => useContext(QuestionsContext);

export const QuestionsProvider = ({ children }) => {
  const [answers, setAnswers] = useState(defaultAnswers);

  function setQuestionAnswer({ question, answer }) {
    setAnswers((prevQuestions) => ({ ...prevQuestions, [question]: answer }));
  }

  return <QuestionsContext.Provider value={{ answers, setQuestionAnswer }}>{children}</QuestionsContext.Provider>;
};
