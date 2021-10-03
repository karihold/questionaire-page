import React from 'react';
import { Link } from 'react-router-dom';
import Routes from 'routes/routes';
import './header.scss';

const Header = () => {
  return (
    <header>
      <Link to={Routes.Home} className="return-start-link">
        Return to start
      </Link>
    </header>
  );
};

export default Header;
