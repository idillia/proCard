import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as profileActions from '../../actions/profileActions';
import toastr from 'toastr';
import ProfileListRow from './ProfileListRow';
import Tagline from './Tagline';
import Avatar from './Avatar';

export class ProfilePage extends React.Component {
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
      <div >
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12"><Avatar profile = {profile}/></div>
        </div>     
        <div className="row sc-wrapper">
          <div className="col-lg-7 col-md-7 col-sm-7"><ProfileListRow profile = {profile}/></div>
          <div className="col-lg-5 col-md-5 col-sm-5"><Tagline profile = {profile}/></div>
        </div>  
      </div>
    );
  }
}

ProfilePage.propTypes = {
  profile: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

function getProfileById(profiles, id) {
  const profile = profiles.filter(profile => profile["screen_name"] == id);
  if(profile) return profile[0];
  return null;
}

function mapStateToProps(state, ownProps) {
  const profileId = ownProps.params.id;// from the path '/profile/:id'
  // console.log("profileId", profileId)
  let profile = {
    "id":"",
    "screen_name": "",
    "name": "",
    "followers": 0,
    "creation_date": "",
    "pa": [["Maverick", "Maverick", "Maverick"]],
    "sw": [["the_maverick","the_maverick","the_maverick","the_maverick","the_maverick","the_maverick"]],
    "pabs": [["the_maverick"]],
    "image_url": "",
    "tweets": "",
    "time_zone": "",
    "creation_date_filter": "",
    "is_everyday_filter": "",
    "folowers_count_filter": ""
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

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);