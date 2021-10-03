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

  return (
    <form>
      {isAtNameStep && (
        <>
          <label>
            What's your name?
            <input
              type="text"
              onChange={(event) => setQuestionAnswer({ question: QuestionNames.Name, answer: event.target.value })}
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
          <label>Why is selected color your favorite color?</label>
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
            How much do you love color yellow from 1-100?
            <Link className="next-step-link" to={Routes.Result}>
              NEXT
            </Link>
          </label>
          <Button
            label="NEXT"
            onClick={() => history.push(Routes.Result)}
            isDisabled={!answers[QuestionNames.ColorLoveScale]}
          />
        </>
      )}
    </form>
  );
};

export default Questions;
