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

const backgrounds = [
  // {class: 'hiker-banner', route: '/'},
  // {class: 'osprey-banner', route: '/'},
  {class: 'heimplanet-banner-1', route: '/search?keywords=Heimplanet'},
  {class: 'heimplanet-banner-2', route: '/search?keywords=Heimplanet'},
  {class: 'tnf-banner', route: '/search?keywords=The+North+Face'},
  {class: 'checkout-marmot-banner', route: '/search?keywords=Marmot'},
];

export const pickBanner = () => {
  return backgrounds[Math.floor(Math.random() * backgrounds.length)];
};
