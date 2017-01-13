import React from 'react';
import { featureImageClass } from './feature_helper';

const MarmotPlasma = ({props}) => {

  const goToProduct = () => {
    props.requestItem(2);
    props.requestReviews(2);
    props.router.push('/product/2');
  };

  return (
    <div className="half-feature">
      <div className={`marmot-plasma-image ${featureImageClass}`}
           onClick={goToProduct}>
      </div>
      <div className="feature-description-container">
        <span>Marmot Plasma 15: 875-fill-power</span>
        <br/>
        <span>Maximum Warmth at Minimum Weight</span>
        <br/><br/>
        <button className="feature-button"
                onClick={goToProduct}>
            Details
        </button>
      </div>
    </div>
  );
};

export default MarmotPlasma;
