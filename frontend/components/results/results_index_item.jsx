import React from 'react';
import { withRouter } from 'react-router';
import { padPrice, formatRating }
        from '../helper_functions/product_details_helper';

const ResultsIndexItem = ({ item, router, dispatch }) => {
  const handleClick = url => e => router.push(url);
  let itemName = `${item.brand} ${item.name}`;
  let paddedPrice = padPrice(item.price);
  let uniqueKey = `${item.id}-${item.name}`;
  let rating = formatRating(parseFloat(item.rating));

  return (
    <div key={uniqueKey}>
      <div className="results-index-item"
           onClick={handleClick(`/product/${item.id}`)}>
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
            {rating} {item.rating} ({item.num_ratings})
          </span>
        </section>
      </div>
    </div>
  );
};

export default withRouter(ResultsIndexItem);
