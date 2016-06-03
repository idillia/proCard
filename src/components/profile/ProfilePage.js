import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as profileActions from '../../actions/profileActions';
import ProfileList from './ProfileList';
import {browserHistory} from 'react-router';

class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
  }

  redirectToAddCoursePage() {
    browserHistory.push('/profile');
  }

  render() {
    const {profiles} = this.props;
    return (
      <div>
        <ProfileList profiles={profiles} />
      </div>
    );
  }
}

CoursesPage.propTypes = {
  profiles: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    profiles: state.profiles
  };
}

// Third way to dispatch actions.
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(profileActions, dispatch)
  };
}

// Second way to dispatch actions 

// function mapDispatchToProps(dispatch) {
//   return {
//     createCourse: profile => dispatch(profileActions.createCourse(profile))
//   };
// }

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);