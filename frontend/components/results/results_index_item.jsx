import React from 'react';
import { withRouter, Link } from 'react-router';
import { padPrice }
        from '../helper_functions/product_details_helper';
import { formatRating } from '../helper_functions/rating_helper';


const ResultsIndexItem = ({ item, router, dispatch }) => {
  let itemName = `${item.brand} ${item.name}`;
  let paddedPrice = padPrice(item.price);
  let uniqueKey = `${item.id}-${item.name}`;
  let rating = formatRating({
    rating: parseFloat(item.rating),
    numRatings: item.num_ratings,
    className: "results-page-rating",
    key: item.id,
    displayNumRatings: true
  });
  let productUrl = `/product/${item.id}`;

  return (
    <div key={uniqueKey} className="results-index-item-container">
      <Link to={`product/${item.id}`}>
        <div className="result-image-container">
          <img className="result-image" src={item.result_image} alt={itemName}/>
        </div>
        <section className="text-and-rating">
          <section className="brand-and-name">
            <span className="brand-name">{item.brand}</span>
            <span className="item_name">{item.name}</span>
          </section>
          <span className="item_price">${paddedPrice}</span>
          {rating}
        </section>
      </Link>
    </div>
  );
};

export default withRouter(ResultsIndexItem);
