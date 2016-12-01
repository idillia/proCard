import React, {PropTypes} from 'react';
import _ from 'underscore';



const Avatar = ({profile}) => {
  return (
    <div>
      <div className="twitter-avatar tile">
        <div className = "ProfileAvatar">
          <img src= {profile.image_url} className="ProfileAvatar-image"/>
        </div>  
        <div className="twitter-name">{profile.name}</div>
        <div className="twitter-handler">@{profile["screen_name"]}</div>
      </div>
    </div>
  )


}
  Avatar.propTypes = {
    profile: PropTypes.object.isRequired
  };

  export default Avatar;  