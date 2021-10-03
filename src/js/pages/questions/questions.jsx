import React from 'react';
import { useRouteMatch, useHistory, Link } from 'react-router-dom';
import Routes from 'routes/routes';
import { useQuestionsContext } from 'context/questions-context';
import QuestionNames from 'constants/question-names';
import Button from 'components/button/button';
import './questions.scss';

const Questions = () => {
  const history = useHistory();
  const { answers, setQuestionAnswer } = useQuestionsContext();

  const isAtNameStep = useRouteMatch(Routes.Questions.Name);
  const isAtFavoriteColorStep = useRouteMatch(Routes.Questions.FavoriteColor);
  const isAtColorReasonStep = useRouteMatch(Routes.Questions.ColorReason);
  const isAtColorLoveScaleStep = useRouteMatch(Routes.Questions.ColorLoveScale);

  function onAnswerEnteryKey(event, stepUrl) {
    if (event.key === 'Enter') {
      const nextButton = event.target.parentElement.nextElementSibling;

      if (!nextButton.disabled) nextButton.click();
    }
  }

  return (
    <form
      onKeyDown={(event) => {
        console.dir(event.target);
        if (event.key === 'Enter' && event.target.tagName !== 'BUTTON') event.preventDefault();
      }}
    >
      {isAtNameStep && (
        <>
          <label>
            What's your name?
            <input
              type="text"
              onChange={(event) => setQuestionAnswer({ question: QuestionNames.Name, answer: event.target.value })}
              onKeyDown={onAnswerEnteryKey}
            />
          </label>
          <Button
            label="NEXT"
            onClick={() => history.push(Routes.Questions.FavoriteColor)}
            isDisabled={!answers[QuestionNames.Name]}
          />
        </>
      )}
      {isAtFavoriteColorStep && (
        <>
          <label>
            What's your favourite color?
            <select
              onChange={(event) =>
                setQuestionAnswer({ question: QuestionNames.FavoriteColor, answer: event.target.value })
              }
              onKeyDown={onAnswerEnteryKey}
            >
              <option>Pick a color</option>
              <option>Dark green</option>
              <option>Electric blue</option>
              <option>Salmon</option>
              <option>Indian red</option>
              <option>Green</option>
              <option>Navy</option>
              <option>Indigo</option>
              <option>Turquoise</option>
            </select>
          </label>
          <Button
            label="NEXT"
            onClick={() => history.push(Routes.Questions.ColorReason)}
            isDisabled={
              !answers[QuestionNames.FavoriteColor] || answers[QuestionNames.FavoriteColor] === 'Pick a color'
            }
          />
        </>
      )}
      {isAtColorReasonStep && (
        <>
          <label>
            Why is {answers[QuestionNames.FavoriteColor]} your favorite color?{' '}
            <textarea
              onChange={(event) =>
                setQuestionAnswer({ question: QuestionNames.ColorReason, answer: event.target.value })
              }
              onKeyDown={onAnswerEnteryKey}
            />
          </label>
          <Button
            label="NEXT"
            onClick={() => history.push(Routes.Questions.ColorLoveScale)}
            isDisabled={!answers[QuestionNames.ColorReason]}
          />
        </>
      )}
      {isAtColorLoveScaleStep && (
        <>
          <label>
            How much do you love color {answers[QuestionNames.FavoriteColor]} from 1-100?
            <input
              type="number"
              min="1"
              max="100"
              onChange={(event) =>
                setQuestionAnswer({ question: QuestionNames.ColorLoveScale, answer: event.target.value })
              }
              onKeyDown={onAnswerEnteryKey}
            />
          </label>
          <Button
            label="NEXT"
            onClick={() => history.push(Routes.Result)}
            isDisabled={
              !answers[QuestionNames.ColorLoveScale] ||
              answers[QuestionNames.ColorLoveScale] > 100 ||
              answers[QuestionNames.ColorLoveScale] < 1
            }
          />
        </>
      )}
    </form>
  );
};

export default Questions;
