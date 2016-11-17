import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const ProfileListRow = ({profile}) => {
  let strImages = profile.personal_archetype[0]
  console.log("prof", profile.image_url);

  // img1 = require("./../../images/new_personas/186/Advocate-m.png");
  const archImageStyle = {
    'Advocate': {'background-image':'url(' +   require("./../../images/new_personas/186/Advocate-m.png") +')','height': '80px' },
    'Go-Getter': {'background-image':'url(' +   require("./../../images/new_personas/186/Go-Getter-m.png") +')','height': '80px'},
    'Maverick': {'background-image':'url(' +   require("./../../images/new_personas/186/Maverick-m.png") +')', 'height': '80px'} 
  }

  const archNameStyle = {
    'Advocate': {'backgroundColor': '#bb51e2'},
    'Go-Getter': {'backgroundColor': '#81c850'},
    'Maverick': {'backgroundColor': '#14dfce'}
  }

  return (
    <div className="row">
      <div className="col-lg-6">
        <div className="tile">
          <h2><Link to={'/profile/' + profile.id}>{profile.id}</Link></h2>
          <h2>PHOTO_HERE</h2>
          <h2>TWITTER_HANDLER_HERE</h2>
          <h2>NAME_HERE</h2>
          <h2>BIO_HERE</h2>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="tile">
          <h2>Your Personas & Strengths</h2>
          <div className="line"></div>
          <div className="archetype-container">
            <div className="row three-arch">
              <div className="col-lg-2 archCol">
                <div style={archImageStyle.Advocate} className="archetype-image"></div>
                <div className="archetype-name" style={archNameStyle.Advocate}>ADVOCATE</div>
              </div>
              <div className="col-lg-2 archCol">
                <div className="archetype-image" style={archImageStyle["Go-Getter"]}></div>
                <div className="archetype-name" style={archNameStyle["Go-Getter"]}>GO GETTER</div>
              </div>
              <div className="col-lg-2 archCol">
                <div className="archetype-image" style={archImageStyle["Maverick"]}>
                </div>
                <div className="archetype-name" style={archNameStyle.Maverick}>MAVERICK</div>
              </div>
            </div>
            <span className="strength">Empathic</span>
            <span className="strength">Empathic</span>
            <span className="strength">Empathic</span>
            <span className="strength">Empathic</span>
            <span className="strength">Empathic</span>
            <span className="strength">Empathic</span>

          </div>



        </div>
      </div>
    </div>
  );
};


ProfileListRow.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileListRow;

 