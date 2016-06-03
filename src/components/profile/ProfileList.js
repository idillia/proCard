import React, {PropTypes} from 'react';
import ProfileListRow from './ProfileListRow';

const ProfileList = ({profiles}) => {
  return (
    <div>
        {profiles.map(profile => 
          <ProfileListRow key={profile.id} profile={profile} />
        )}
    </div>
  );
};

ProfileList.propTypes = {
  profiles: PropTypes.array.isRequired
};

export default ProfileList;