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
    const profile = this.state.profile;
    return (
      <div>
        <ProfileListRow profile = {profile}/>
      </div>
    );
  }
}

DisplayProfilePage.propTypes = {
  profile: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};



function getProfileById(profiles, id) {
  const profile = profiles.filter(profile => profile.id == id);
  if(profile) return profile[0];
  return null;
}

function mapStateToProps(state, ownProps) {
  const profileId = ownProps.params.id;// from the path '/profile/:id'
  let profile = {
    "id":"",
    "screen_name": "",
    "name": "",
    "followers": 0,
    "creation_date": "",
    "personal_archetype": [["Maverick", "Maverick", "Maverick"]],
    "strength_words": [["the_maverick","the_maverick","the_maverick","the_maverick","the_maverick","the_maverick"]],
    "personal_archetype_blend_sentences": [["the_maverick"]],
    "image_url": "",
    "tweets": ""
  };

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