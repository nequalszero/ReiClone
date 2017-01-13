import React from 'react';
import { featureImageClass } from './feature_helper';

const NemoVeda = ({props}) => {

  const goToProduct = () => {
    props.requestItem(18);
    props.requestReviews(18);
    props.router.push('/product/18');
  };

  return (
    <div className="full-feature">
      <div className={`nemo-veda-image ${featureImageClass}`}
           onClick={goToProduct}>
      </div>
      <div className="feature-description-container">
        <span>Introducing the Nemo Veda 1P: Why carry 2 sets of poles?</span>
        <br/><br/>
        <button className="feature-button"
                onClick={goToProduct}>
            Details
        </button>
      </div>
    </div>
  );
};

export default NemoVeda;
