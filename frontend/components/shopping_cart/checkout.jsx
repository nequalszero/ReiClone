import React from 'react';

const Checkout = (props) => {
  return(
    <div className="checkout-container">
      <div className="checkout-banner hiker-banner"/>
      <div className="checkout-text-container">
        <h2 className="checkout-h2">Checkout Successful!</h2>
        <p className="checkout-text">
          If this were a real shopping website, I'd probably send you an order confirmation email and keep track of your purchases.
          Instead I've just dumped your items into the void.  If you enjoyed my website and are looking for a new addition to your software team,
          I look forward to hearing from you! Regardless, get outside and never stop exploring!
        </p>
      </div>
    </div>
  );
};

export default Checkout;
