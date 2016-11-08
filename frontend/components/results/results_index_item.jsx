import React from 'react';
import { withRouter } from 'react-router';

const padPrice = (price) => {
  let priceString = price;
  if (price.split(".")[1].length === 1) {
    priceString = priceString + "0";
  }
  return priceString;
};

const ResultsIndexItem = ({ item, router }) => {
  const handleClick = url => e => router.push(url);
  let itemName = `${item.brand} ${item.name}`;
  let paddedPrice = padPrice(item.price);
  let uniqueKey = `${item.id}-${item.name}`;

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
          <span className="rating">Rating: {item.rating} ({item.num_ratings})</span>
        </section>
      </div>
    </div>
  );
};

export default withRouter(ResultsIndexItem);
