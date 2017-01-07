import React from 'react';
import { withRouter, Link } from 'react-router';
import { padPrice, formatRating }
        from '../helper_functions/product_details_helper';

const ResultsIndexItem = ({ item, router, dispatch }) => {
  let itemName = `${item.brand} ${item.name}`;
  let paddedPrice = padPrice(item.price);
  let uniqueKey = `${item.id}-${item.name}`;
  let rating = formatRating(parseFloat(item.rating));
  let productUrl = `/product/${item.id}`;

  return (
    <div key={uniqueKey}>
      <Link to={`product/${item.id}`}
            className="results-index-item">
        <div className="result-image-container">
          <img className="result-image" src={item.result_image} alt={itemName}/>
        </div>
        <section className="text-and-rating">
          <section className="brand-and-name">
            <span className="brand-name">{item.brand}</span>
            <span className="item_name">{item.name}</span>
          </section>
          <span className="item_price">${paddedPrice}</span>
          <span className="rating">
            {rating}
            {item.num_ratings > 0 ? `(${item.num_ratings})` : ""}
          </span>
        </section>
      </Link>
    </div>
  );
};

export default withRouter(ResultsIndexItem);
