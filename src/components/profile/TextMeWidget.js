import React, {PropTypes} from 'react';

const TextMeWidget = () => {
  return (
    <div className = "row text-widget">
        <div className = "col-lg-6"><iframe frameBorder="0" height="80" marginheight="0" marginwidth="0" src="https://api.linktexting.com/linkEmbed/6257b294-41ee-4546-a802-098bce68f1ea?autoIp=true" width="420"></iframe></div>
        <div className = "col-lg-3">
          <div className="btn btn-primary gc-btn-red" id="apple-link">
            <a target="_blank" href= "https://itunes.apple.com/app/apple-store/id892559034?pt=89312809&ct=auto-twitter-strengthcards&mt=8">
              <div className="dnld-icon icon-social-apple"></div>
              <div><i className="fa fa-apple" aria-hidden="true"></i>iOS</div>
            </a>
          </div>
        </div>

        <div className= "col-lg-3">
          <div className="btn btn-primary gc-btn-orange" id="android-link">
            <a target="_blank" href= "https://play.google.com/store/apps/details?id=co.good.android&referrer=utm_source%3Dgoodco.company%26utm_medium%3Dstore-button%26utm_campaign%3Dauto-twitter-strengthcards">
              <div className="dnld-icon icon-play"></div>
              <div><i className="fa fa-android" aria-hidden="true"></i>Google</div>
            </a>  
          </div>
        </div>
    </div>
  );
};


export default TextMeWidget;



