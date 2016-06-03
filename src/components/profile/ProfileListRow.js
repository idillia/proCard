import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const ProfileListRow = ({profile}) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Handler</th>
          <th>Name</th>
        </tr>
      </thead>
    <tr>
      <td><Link to={'/profile/' + profile.id}>{profile.id}</Link></td>
      <td>{profile.name}</td>
      <td>{profile.screen_name}</td>
    </tr>
    </table>

  );
};


ProfileListRow.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileListRow;