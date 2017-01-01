// Hardcoded for time's sake
const categoryKeys = {
  1: [
      "best_use",
      "temperature_rating",
      "weight",
      "zipper_location",
      "insulation_type",
      "fill",
      "fill_weight",
      "bag_shape",
      "fits_up_to",
      "packed_size",
      "gender"
     ],

  2: [
      "best_use",
      "seasons",
      "sleeping_capacity",
      "minimum_trail_weight",
      "fly_footprint_pitch_weight",
      "packaged_weight",
      "packed_size",
      "floor_dimensions",
      "floor_area",
      "vestibule_area",
      "peak_height",
      "number_of_doors",
      "number_of_poles",
      "pole_material",
      "pole_diameter",
      "canopy_fabric",
      "floor_fabric",
      "rainfly_fabric",
      "footprint_included",
      "ultralight",
      "design_type"
     ]
};

const formatRowName = rowName => {
  if (rowName === "fly_footprint_pitch_weight")
      return "Fly / Footprint Pitch Weight";
      
  const ignore = ["of"];
  let splitWords = rowName.split("_");

  let titleCased = splitWords.map(splitName => {
    if (ignore.includes(splitName)) return splitName;
    return splitName[0].toUpperCase() + splitName.slice(1);
  }).join(" ");

  return titleCased;
};

// { key: rowName, display: formatRowName(rowName) }
const computeRowNames = () => {
  const rowNames = {};

  Object.keys(categoryKeys).map((categoryId) => {
    rowNames[categoryId] = categoryKeys[categoryId].map(rowName => {
      let temp = {};
      temp[`${rowName}`] = formatRowName(rowName);
      return temp;
    });
  });

  return rowNames;
};

const categoryOrder = computeRowNames();

const getCategories = categoryId => {
  return categoryOrder[categoryId];
};

export default getCategories;
