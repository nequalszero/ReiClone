import React from 'react';
import { withRouter } from 'react-router';

const padPrice = (price) => {
  let priceString = price;
  if (price.split(".")[1].length === 1) {
    priceString = priceString + "0";
  }
  return priceString;
};

const formatRating = (rating) => {
  const star = (key) => <i key={key} className="fa fa-star" aria-hidden="true"></i>;
  const emptyStar = (key) => <i key={key} className="fa fa-star-o" aria-hidden="true"></i>;
  const halfStar = key => <i key={key} className="fa fa-star-half-o" aria-hidden="true"></i>;

  if (rating === 0.0) {
    return [emptyStar, emptyStar, emptyStar, emptyStar, emptyStar];
  } else {
    let starArray = [];
    let numStars = Math.floor(rating);
    let residualStar = Math.round((rating - numStars)*10)/10;
    let count = 0;
    for (let i = 0; i < numStars; i++) {
      starArray.push(star(i));
      count += 1;
    }
    if (residualStar >= 0.3 && residualStar <= 0.8) {
      starArray.push(halfStar(count));
      count += 1;
    }
    while (starArray.length < 5) {
      starArray.push(emptyStar(count));
      count += 1;
    }
    return starArray;
  }
};

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
