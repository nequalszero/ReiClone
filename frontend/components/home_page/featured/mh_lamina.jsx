import React from 'react';
import { featureImageClass } from './feature_helper';

const MHLamina = ({props}) => {

  const goToProducts = () => {
    const pathName = '/search';

    let url = props.router.createPath({
      pathname: pathName,
      query: { keywords: "Mountain Hardwear Lamina" }
    });

    let currentURL = props.router.location.pathname +
                     props.router.location.search;

    props.router.push(url);
  };

  return (
    <div className="half-feature">
      <div className={`mh-lamina-image ${featureImageClass}`}
           onClick={goToProducts}>
      </div>
      <div className="feature-description-container">
        <span>The Mountain Hardwear Lamina series: </span>
        <br/>
        <span>Warm, Affordable, Water Repellent</span>
        <br/><br/>
        <button className="feature-button"
                onClick={goToProducts}>
            Lamina Series
        </button>
      </div>
    </div>
  );
};

export default MHLamina;
