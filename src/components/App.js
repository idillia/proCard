import React , {PropTypes}  from 'react';
import Header from './common/Header.js';
import {connect} from 'react-redux';


class App extends React.Component {
  render() {
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){ +
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o), m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m) 
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-39725983-11', 'auto');
    ga('send', 'pageview');
    
    return (
      <div className="container-fluid">
        <Header />
        {this.props.children}
      </div>  
    );
  }
}

App.propTypes = {
  children: PropTypes.object
};

function mapStateToProps(state, ownPros) {
  return {
    // loading: state.numAjaxCallsInProgress > 0
  };
}

export default connect(mapStateToProps)(App);