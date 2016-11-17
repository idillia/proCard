import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import _ from 'underscore';


const ProfileListRow = ({profile}) => {
  let strImages = profile.personal_archetype[0]
  console.log("prof", profile.image_url);

  let pickGender = function(arr) {
    let genderArray = [];
    for(var i =0; i<3; i++) {
      genderArray.push(_.sample(arr, 1)[0]);
    }
    return genderArray;
  }

  let theGender = pickGender(["_m", "_f"]);

  console.log(theGender);


    let a = "the_advocate";
    let b = "the_go_getter";
    let c = "the_maverick"; 
    const archImageStyle = {
      'the_advocate': {'backgroundImage':'url(' + require("./../../images/new_personas/186/" + a + theGender[0] + ".png") +')','height': '80px' },
      'the_go_getter': {'backgroundImage':'url(' + require("./../../images/new_personas/186/" + b + theGender[1] + ".png") +')','height': '80px'},
      'the_maverick': {'backgroundImage':'url(' + require("./../../images/new_personas/186/" + c + theGender[2] +  ".png") +')', 'height': '80px'}, 
      'the_dreamer': {'backgroundImage':'url(' + require("./../../images/new_personas/186/" + a + theGender[0] + ".png") +')','height': '80px' },
      'the_caretaker': {'backgroundImage':'url(' + require("./../../images/new_personas/186/" + a + theGender[1] + ".png") +')','height': '80px' },
      'the_straight_shoooter': {'backgroundImage':'url(' + require("./../../images/new_personas/186/" + a + theGender[2] + ".png") +')','height': '80px' },
      'the_socialite': {'backgroundImage':'url(' + require("./../../images/new_personas/186/" + a + theGender[0] + ".png") +')','height': '80px' },
      'the_humanitarian': {'backgroundImage':'url(' + require("./../../images/new_personas/186/" + a + theGender[1] + ".png") +')','height': '80px' },
      'the_idealist': {'backgroundImage':'url(' + require("./../../images/new_personas/186/" + a + theGender[2] + ".png") +')','height': '80px' },
      'the_inventor': {'backgroundImage':'url(' + require("./../../images/new_personas/186/" + a + theGender[0] + ".png") +')','height': '80px' },
      'the_mastermind': {'backgroundImage':'url(' + require("./../../images/new_personas/186/" + a + theGender[1] + ".png") +')','height': '80px' },
      'the_protector': {'backgroundImage':'url(' + require("./../../images/new_personas/186/" + a + theGender[2] + ".png") +')','height': '80px' },
      'the_rock': {'backgroundImage':'url(' + require("./../../images/new_personas/186/" + a + theGender[0] + ".png") +')','height': '80px' },
      'the_strategist':{'backgroundImage':'url(' + require("./../../images/new_personas/186/" + a + theGender[1] + ".png") +')','height': '80px' },
      'the_technician': {'backgroundImage':'url(' + require("./../../images/new_personas/186/" + a + theGender[2] + ".png") +')','height': '80px' },
      'the_visionary': {'backgroundImage':'url(' + require("./../../images/new_personas/186/" + a + theGender[0] + ".png") +')','height': '80px' }
    }

  const archNameStyle = {
    'the_advocate': {'backgroundColor': '#bb51e2'},
    'the_go_getter': {'backgroundColor': '#81c850'},
    'the_maverick': {'backgroundColor': '#14dfce'},
    'the_dreamer': {'backgroundColor': '#14dfce'},
    'the_caretaker':{'backgroundColor': '#14dfce'},
    'the_straight_shoooter': {'backgroundColor': '#14dfce'},
    'the_socialite': {'backgroundColor': '#14dfce'},
    'the_humanitarian': {'backgroundColor': '#14dfce'},
    'the_idealist': {'backgroundColor': '#14dfce'},
    'the_inventor': {'backgroundColor': '#14dfce'},
    'the_mastermind': {'backgroundColor': '#14dfce'},
    'the_protector': {'backgroundColor': '#14dfce'},
    'the_rock': {'backgroundColor': '#14dfce'},
    'the_strategist': {'backgroundColor': '#14dfce'},
    'the_technician': {'backgroundColor': '#14dfce'},
    'the_visionary': {'backgroundColor': '#14dfce'}
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
              <div className="col-lg-4 archCol">
                <div style={archImageStyle["the_advocate"]} className="archetype-image"></div>
                <div className="archetype-name" style={archNameStyle["the_advocate"]}>ADVOCATE</div>
              </div>
              <div className="col-lg-4 archCol">
                <div className="archetype-image" style={archImageStyle["the_go_getter"]}></div>
                <div className="archetype-name" style={archNameStyle["the_go_getter"]}>GO GETTER</div>
              </div>
              <div className="col-lg-4 archCol">
                <div className="archetype-image" style={archImageStyle["the_maverick"]}>
                </div>
                <div className="archetype-name" style={archNameStyle["the_maverick"]}>MAVERICK</div>
              </div>
            </div>
            <span className="strength">Empathic</span>
            <span className="strength">Empathic</span>
            <span className="strength">Empathic</span>
            <span className="strength">Empathic</span>
            <span className="strength">Empathic</span>
            <span className="strength">Empathic</span>
          </div>
          <div>
            <div className="tile tagline-title">
              <h2>Tagline</h2>
              <div className="line"></div>

            <div className="tagline-body">
            You are an energetic and enthusiastic multi-tasker who is able to take an innovative but organized approach to synthesizing across perspectives on an idea or situation.
            </div>
            </div>
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

 