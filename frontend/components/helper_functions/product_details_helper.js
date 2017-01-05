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
  let priceString = String(price);
  let cents = price.split(".")[1] || '00';
  let dollars = price.split(".")[0];
  let centsLength = cents.length;
  let dollarsLength = dollars.length;

  if (centsLength === 1) {
    cents = cents + "0";
  }
  if (dollarsLength > 3) {
    let dollarString = [];
    let n = 1;
    let maxN = Math.floor((dollarsLength - 1)/3);

    dollars.split('').reverse().forEach((el, idx) => {
      if (3*n === idx) {
        dollarString.push(',');
        n += 1;
      }
      dollarString.push(el);
    });
    dollars = dollarString.reverse().join('');
  }
  return `${dollars}.${cents}`;
};

export const star = key => <i key={key} className="fa fa-star full"
                              aria-hidden="true"></i>;
export const emptyStar = key => <i key={key} className="fa fa-star empty"
                                   aria-hidden="true"></i>;
export const halfStar = key => <i key={key} className="fa fa-star-half-o"
                                  aria-hidden="true"></i>;

export const formatRating = (rating) => {
  // Returns appropriate star icons.
  // Takes a key to appease React's need for unique keys.

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
