import React from 'react';
import { Link, useRouteMatch, useParams } from 'react-router-dom';
import Routes from 'routes/routes';
import { useQuestionsContext } from 'context/questions-context';
import questionNames from 'constants/question-names';
import './questions.scss';

const Questions = () => {
  const { step } = useParams();

  const { setQuestionAnswer } = useQuestionsContext();
  const isAtNameStep = useRouteMatch(Routes.Questions.Name);
  const isAtFavoriteColorStep = useRouteMatch(Routes.Questions.FavoriteColor);
  const isAtColorReasonStep = useRouteMatch(Routes.Questions.ColorReason);
  const isAtColorLoveScaleStep = useRouteMatch(Routes.Questions.ColorLoveScale);

  return (
    <>
      {isAtNameStep && (
        <>
          <h1>{step}</h1>
          <input
            type="text"
            onChange={(event) => setQuestionAnswer({ question: questionNames.Name, answer: event.target.value })}
          />
          <Link to={Routes.Questions.FavoriteColor}>NEXT</Link>
        </>
      )}
      {isAtFavoriteColorStep && (
        <>
          <h1>{step}</h1>
          <Link to={Routes.Questions.ColorReason}>NEXT</Link>
        </>
      )}
      {isAtColorReasonStep && (
        <>
          <h1>{step}</h1>
          <Link to={Routes.Questions.ColorLoveScale}>NEXT</Link>
        </>
      )}
      {isAtColorLoveScaleStep && (
        <>
          <h1>{step}</h1>
          <Link to={Routes.Result}>NEXT</Link>
        </>
      )}
    </>
  );
};

export default Questions;
