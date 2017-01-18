import React from 'react';
import { withRouter, Link } from 'react-router';

import { pickBanner } from '../helper_functions/misc_helpers';

const backgrounds = [
  // {class: 'hiker-banner', route: '/'},
  // {class: 'osprey-banner', route: '/'},
  {class: 'heimplanet-banner-1', route: '/search?keywords=Heimplanet'},
  {class: 'heimplanet-banner-2', route: '/search?keywords=Heimplanet'},
  {class: 'tnf-banner', route: '/search?keywords=The+North+Face'},
  {class: 'checkout-marmot-banner', route: '/search?keywords=Marmot'},
];

const Checkout = (props) => {
  let banner = pickBanner();

  return(
    <div className="checkout-container">
      <Link to={banner.route}>
        <div className={`checkout-banner ${banner.class}`}/>
      </Link>
      <div className="checkout-text-container">
        <h2 className="checkout-h2">Checkout Successful!</h2>
        <p className="checkout-text">
          If this were a real shopping website and not just a demo, I'd probably send you an order confirmation email and keep track of your purchases.
          Instead I've just dumped your items into the void.  If you enjoyed my website and are looking for a new addition to your software team,
          I look forward to hearing from you!
        </p>
      </div>
    </div>
  );
};

export default withRouter(Checkout);
