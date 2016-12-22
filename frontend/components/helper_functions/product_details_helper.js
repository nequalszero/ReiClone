// Need to import React because functions are returning HTML that must be parsed
//   by React.
import React from 'react';

// Rounds a number to a specified number of decimal places.
const roundToDecimal = (value, numDecimals) => {
  let factor = Math.pow(10, numDecimals);
  return Math.round(value * factor) / factor;
};

// Pads prices that are even dollars with an extra 0 for display
export const padPrice = (price) => {
  let priceString = price;
  if (price.split(".")[1].length === 1) {
    priceString = priceString + "0";
  }
  return priceString;
};

export const formatRating = (rating) => {
  // Returns appropriate star icons.
  // Takes a key to appease React's need for unique keys.
  const star = (key) => <i key={key} className="fa fa-star"
                           aria-hidden="true"></i>;
  const emptyStar = (key) => <i key={key} className="fa fa-star-o"
                                aria-hidden="true"></i>;
  const halfStar = key => <i key={key} className="fa fa-star-half-o"
                             aria-hidden="true"></i>;

  if (rating === 0.0) {
    return [emptyStar(1), emptyStar(2), emptyStar(3), emptyStar(4), emptyStar(5)];
  } else {
    let starArray = [];
    let numStars = Math.floor(rating);
    let residualStar = roundToDecimal((rating - numStars), 1);
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

// Parses float of weight in pounds into string form.
export const stringifyWeight = (weight) => {
  weight = parseFloat(weight);  // in case value comes in as string

  let pounds = Math.floor(weight);
  if (pounds > 0) {
    let ounces = roundToDecimal((weight - pounds)*16, 1);
    weight = `${pounds} lbs. ${ounces} oz.`;
  } else {
    let ounces = roundToDecimal(weight*16, 1);
    weight = `${ounces} ounces`;
    // console.log(weight);
  }
  return weight;
};

// Converts fareinheit temperature to celsius.
export const parseFareinheitToCelsius = (tempF) => {
  tempF = parseFloat(tempF); // in case value comes in as string
  return roundToDecimal(parseFloat(tempF)*(5/9) + 32, 1);
};

// Validate item quantity input.
export const validQuantity = (value) => {
  const valid = /[0-9]{0,4}/;
  let match = valid.exec(value)["0"];

  return match.length === value.length;
};
