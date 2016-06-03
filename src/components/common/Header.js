import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import LoadingDots from './LoadingDots';

const Header = ({loading}) => {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
      <Link to="/profiles" activeClassName="active">Profiles</Link>
      <div id="navbar" className="navbar-collapse collapse"></div>
      </div>
    </nav>  
  );
} ;

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;