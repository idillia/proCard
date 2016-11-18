import React, {PropTypes} from 'react';

const TextMeWidget = () => {
  return (
    <div className = "row text-widget">
        <div className = "col-lg-6"><iframe frameBorder="0" height="80" marginheight="0" marginwidth="0" src="https://api.linktexting.com/linkEmbed/6257b294-41ee-4546-a802-098bce68f1ea?autoIp=true" width="420"></iframe></div>
        <div className = "col-lg-2"><button className="btn btn-primary gc-btn-red" id="fitscore-apple-link" data-link="">
          <div className="dnld-icon icon-social-apple"></div>
          <div><i class="fa fa-apple" aria-hidden="true"></i>
          iOS</div>
        </button></div>

       <div className= "col-lg-1"><button className="btn btn-primary gc-btn-orange" id="fitscore-android-link" data-link="">
          <div className="dnld-icon icon-play"></div>
          <div>Google</div>
        </button></div>
    </div>
  );
};


export default TextMeWidget;



