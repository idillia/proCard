import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const ProfileListRow = ({profile}) => {
  let strImages = profile.personal_archetype[0]
    console.log("prof", profile.image_url);

  return (
    <div className="row">
      <div className="col-lg-6">Photo<Link to={'/profile/' + profile.id}>{profile.id}</Link></div>
      <div className="col-lg-6">
        <div className="tile">
          <h2>Your Personas & Strengths</h2>
          <div className="line"></div>
          

        </div>
      </div>
    </div>
  );
};


ProfileListRow.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileListRow;

 