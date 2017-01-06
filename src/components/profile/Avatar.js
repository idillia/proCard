import React, {PropTypes} from 'react';
import _ from 'underscore';

export class Avatar extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      imageStatus: null 
    };
  }

  handleImageLoaded() {
    this.setState({ imageStatus: 'loaded' });
  }

  render(){
    let hideImg = {display: 'none'};
    const profile = this.props.profile;

    if(this.state.imageStatus == null) {
      hideImg = {display: 'none'};
      console.log("props", this.state)

    } else {
      hideImg = {display: 'block'};
      console.log("props", this.state)

    }
    return (
      <div>
        <div className="twitter-avatar tile">
          <div className = "ProfileAvatar" style = {hideImg} onLoad={this.handleImageLoaded.bind(this)}>
            <img src= {profile.image_url} className="ProfileAvatar-image"/>
          </div>  
          <div className="twitter-name">{profile.name}</div>
          <div className="twitter-handler">@{profile["screen_name"]}</div>
        </div>
      </div>
    );
  }  
}
  Avatar.propTypes = {
    profile: PropTypes.object.isRequired
  };
 
  export default Avatar; 