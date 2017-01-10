// Need to import React because functions are returning HTML that must be parsed
//   by React.
import React from 'react';
import { roundToDecimal } from './misc_helpers';


// Pads prices that are even dollars with an extra 0 for display
export const padPrice = (price) => {
  let priceString = String(price);
  let cents = price.split(".")[1] || '00';
  let dollars = price.split(".")[0];
  let centsLength = cents.length;
  let dollarsLength = dollars.length;

  if (centsLength === 1) {
    cents = cents + "0";
  } else if (centsLength > 2) {
    cents = cents[0] + cents[1];
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

export const getTableValues = (item, categories) => {
  let tableValues = {};
  let key, value;

  for (let i = 0; i < categories.length; i++) {
    key = categories[i];
    value = item[key];

    if (!value) continue;

    switch(key) {
      case "temperature_rating":
        let tempF = value;
        let tempC = parseFareinheitToCelsius(parseFloat(tempF));
        tableValues[key] = `${tempF} F   /   ${tempC} C`;
        break;

      case "weight":
        tableValues[key] = stringifyWeight(parseFloat(value));
        break;

      case "fill_weight":
        tableValues[key] = stringifyWeight(parseFloat(value));
        break;

      case "fits_up_to":
        tableValues[key] = `${value*12} inches`;
        break;

      case "packed_size":
        if (item.category_id === 1) {
          tableValues[key] = `${value} liters`;
          break;
        } else {
          tableValues[key] = value;
          break;
        }

      case "minimum_trail_weight":
        tableValues[key] = stringifyWeight(parseFloat(value));
        break;

      case "fly_footprint_pitch_weight":
        tableValues[key] = stringifyWeight(parseFloat(value));
        break;

      case "packaged_weight":
        tableValues[key] = stringifyWeight(parseFloat(value));
        break;

      case "floor_area":
        tableValues[key] = `${value} square feet`;
        break;

      case "peak_height":
        tableValues[key] = `${value} inches`;
        break;

      case "number_of_doors":
        tableValues[key] = value > 1 ? `${value} doors` : `${value} door`;
        break;

      default:
        tableValues[key] = value;
        break;
    }
  }

  return tableValues;
};
