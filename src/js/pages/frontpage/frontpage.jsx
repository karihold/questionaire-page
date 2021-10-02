import React from 'react';
import { Link } from 'react-router-dom';
import Routes from 'routes/routes';
import './frontpage.scss';

const Frontpage = () => {
  return (
    <>
      <Link to={Routes.Questions.Name}>START</Link>
    </>
  );
};

export default Frontpage;
