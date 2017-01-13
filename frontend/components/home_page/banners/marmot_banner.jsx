import React from 'react';
import { withRouter } from 'react-router';

import { homepageBannerClass } from './helper_classes';

const MarmotBanner = (props) => {
  const marmotLogoUrl = "http://res.cloudinary.com/nequalszero/image/upload/c_scale,w_200/v1484334755/REI_Clone/Home_Page/marmot-logo2_nmxk3z.png";

  const goToMarmot = () => {
    const pathName = '/search';

    let url = props.router.createPath({
      pathname: pathName,
      query: { keywords: "Marmot" }
    });

    let currentURL = props.router.location.pathname +
                     props.router.location.search;

    props.router.push(url);
  };

  return (
    <div className={`${homepageBannerClass} marmot-banner`}
         onClick={goToMarmot}>
      <div className="marmot-title">
        Marmot Technology: Engineered for the Elements
      </div>
      <div className="banner-blurb marmot-blurb">
        <div className="marmot-text">
          <span className="strong-red">WATER. WIND. COLD. HEAT. </span>
            Whatever conditions come your way, our high performance
            clothing and equipment is designed for all of your outdoor
            adventures.
            Our 40 years of experience in the construction and fabrication
            of premium outdoor gear will give you the confidence to keep
            enjoying the outdoors longer and more comfortably.
            So go out and have fun knowing that our products can be trusted
            to perform.
          <br/><br/>
          <span>
            We've got your back, whatever the element.
          </span>
        </div>
        <button className="marmot-banner-button">
          <img src={marmotLogoUrl}></img>
        </button>
      </div>
    </div>
  );
};

export default MarmotBanner;
