import React from 'react';

import { roundToDecimal, emptyObject } from './misc_helpers';

const starClass = (baseClass, large = false) => {
  return large ? `${baseClass} fa-lg` : baseClass;
};

// Returns appropriate star icons.
// Takes a key to appease React's need for unique keys.
export const star = (key, large = false) => {
  const baseClass = "fa fa-star full";

  return <i key={key}
            className={starClass(baseClass, large)}
            aria-hidden="true">
          </i>;
};
export const emptyStar = (key, large = false) => {
  const baseClass = "fa fa-star empty";

  return <i key={key}
            className={starClass(baseClass, large)}
            aria-hidden="true">
         </i>;
};
export const halfStar = (key, large = false) => {
  const baseClass = "fa fa-star-half-o";

  return <i key={key}
            className={starClass(baseClass, large)}
            aria-hidden="true">
         </i>;
};

export const formatRating = (ratingObject) => {
  if (typeof ratingObject !== 'object' || emptyObject(ratingObject)) {
    throw "ERROR in product_details_helper#formatRating - invalid ratingObject";
  }
  let rating = ratingObject.rating;
  let large = ratingObject.large;
  let numRatings, ratingText;

  if (ratingObject.numRatings && ratingObject.numRatings > 0) {
    if (ratingObject.displayRatingText) {
      ratingText = <span className="rating-text">{rating}</span>;
    }
    if (ratingObject.displayNumRatings){
      numRatings = ratingObject.numRatings;
      numRatings = <span className="rating-text">({numRatings})</span>;
    }
  }

  let starArray = [];

  if (rating === 0.0) {
    for (let i = 1; i <= 5; i++) starArray.push(emptyStar(i, large));
  } else {
    let numStars = Math.floor(rating);
    let residualStar = roundToDecimal((rating - numStars), 1);
    let count = 0;
    for (let i = 0; i < numStars; i++) {
      starArray.push(star(i, large));
      count += 1;
    }
    if (residualStar >= 0.3 && residualStar < 0.8) {
      starArray.push(halfStar(count, large));
      count += 1;
    } else if (residualStar >= 0.8) {
      starArray.push(star(count, large));
      count += 1;
    }
    while (starArray.length < 5) {
      starArray.push(emptyStar(count, large));
      count += 1;
    }
  }

  return (
    <span key={ratingObject.key} className={ratingObject.className}>
      {starArray} {ratingText} {numRatings}
    </span>
  );
};
