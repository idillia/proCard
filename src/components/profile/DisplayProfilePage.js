import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as profileActions from '../../actions/profileActions';
import toastr from 'toastr';
import ProfileListRow from './ProfileListRow';

export class DisplayProfilePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      profile: Object.assign({}, this.props.profile)
    };
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.profile.id != nextProps.profile.id) {
      this.setState({profile: Object.assign({}, nextProps.profile)});
    }
  }

  render() {
    return (
        <ProfileListRow 
          profile={this.state.profile}
        />
    );
  }
}

DisplayProfilePage.propTypes = {
  profile: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

DisplayProfilePage.contextTypes = {
  router: PropTypes.object
};

// function mapStateToProps(state, ownProps) {
//   return {
//     profiles: state.profiles
//   };
// }

// // Third way to dispatch actions.
// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators(profileActions, dispatch)
//   };
// }




function getProfileById(profiles, id) {
  const profile = profiles.filter(profile => profile.id == id);
  if(profile) return profile[0];
  return null;
}

function mapStateToProps(state, ownProps) {
  const profileId = ownProps.params.id;// from the path '/profile/:id'
  let profile = {id: '1', name: 'wq', screen_name: 'das'};

  if(profileId && state.profiles.length > 0) {
    profile = getProfileById(state.profiles, profileId);
  }

  return {
    profile: profile
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(profileActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayProfilePage);