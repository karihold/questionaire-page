import React from 'react';
import { useRouteMatch, useHistory, Link } from 'react-router-dom';
import Routes from 'routes/routes';
import { useQuestionsContext } from 'context/questions-context';
import Question from 'constants/question-names';
import Button from 'components/button/button';
import './questions.scss';

const Questions = () => {
  const history = useHistory();
  const { answers, setQuestionAnswer } = useQuestionsContext();

  const isAtNameStep = useRouteMatch(Routes.Questions.Name);
  const isAtFavoriteColorStep = useRouteMatch(Routes.Questions.FavoriteColor);
  const isAtColorReasonStep = useRouteMatch(Routes.Questions.ColorReason);
  const isAtColorLoveScaleStep = useRouteMatch(Routes.Questions.ColorLoveScale);

  function onAnswerEnteryKey(event) {
    if (event.key === 'Enter') {
      const nextButton = event.target.parentElement.nextElementSibling;

      if (!nextButton.disabled) nextButton.click();
    }
  }

  return (
    <form
      onKeyDown={(event) => {
        console.dir(event.target);
        if (event.key === 'Enter' && event.target.tagName !== 'BUTTON' && event.target.tagName !== 'TEXTAREA')
          event.preventDefault();
      }}
    >
      {isAtNameStep && (
        <div className="question-wrapper">
          <label className="question-label">
            What's your name?
            <input
              type="text"
              onChange={(event) => setQuestionAnswer({ question: Question.Name, answer: event.target.value })}
              onKeyDown={onAnswerEnteryKey}
            />
          </label>
          <Button
            label="Next"
            onClick={() => history.push(Routes.Questions.FavoriteColor)}
            isDisabled={!answers[Question.Name]}
          />
        </div>
      )}
      {isAtFavoriteColorStep && (
        <div className="question-wrapper">
          <label className="question-label">
            What's your favourite color?
            <select
              onChange={(event) => setQuestionAnswer({ question: Question.FavoriteColor, answer: event.target.value })}
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
            label="Next"
            onClick={() => history.push(Routes.Questions.ColorReason)}
            isDisabled={!answers[Question.FavoriteColor] || answers[Question.FavoriteColor] === 'Pick a color'}
          />
        </div>
      )}
      {isAtColorReasonStep && (
        <div className="question-wrapper">
          <label className="question-label">
            Why is {answers[Question.FavoriteColor]} your favorite color?
            <textarea
              maxLength="250"
              rows={5}
              onChange={(event) => {
                const answer = event.target.value;
                const isAnswerWhiteSpace = /^\s+$/gm.test(answer);

                if (!isAnswerWhiteSpace) {
                  setQuestionAnswer({ question: Question.ColorReason, answer: event.target.value });
                }
              }}
            />
          </label>
          <Button
            label="Next"
            onClick={() => history.push(Routes.Questions.ColorLoveScale)}
            isDisabled={!answers[Question.ColorReason]}
          />
        </div>
      )}
      {isAtColorLoveScaleStep && (
        <div className="question-wrapper">
          <label className="question-label">
            How much do you love color {answers[Question.FavoriteColor]} from 1-100?
            <input
              type="number"
              min="1"
              max="100"
              onChange={(event) => setQuestionAnswer({ question: Question.ColorLoveScale, answer: event.target.value })}
              onKeyDown={onAnswerEnteryKey}
            />
          </label>
          <Button
            label="Next"
            onClick={() => history.push(Routes.Result)}
            isDisabled={
              !answers[Question.ColorLoveScale] ||
              answers[Question.ColorLoveScale] > 100 ||
              answers[Question.ColorLoveScale] < 1
            }
          />
        </div>
      )}
    </form>
  );
};

export default Questions;
