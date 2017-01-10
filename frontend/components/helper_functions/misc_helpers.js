// Rounds a number to a specified number of decimal places.
export const roundToDecimal = (value, numDecimals) => {
  let factor = Math.pow(10, numDecimals);
  return Math.round(value * factor) / factor;
};

export const emptyObject = (object) => {
  if (typeof object !== "object")
    throw "ERROR product_details_helper#emptyObject: input not of type Object";
  else if (Object.keys(object).length === 0)
    return true;
  else
    return false;
};
