import React from 'react';

class ProductDisplay extends React.Component {
  constructor(props) {
    super(props);
    console.log("ProductDisplay props: ", props);
  }

  detailsNavigationBar() {
    return(
      <ul className="product-details-nav">
        <li className="product-details-nav">
          Details
        </li>
        <li className="product-details-nav">
          Specs
        </li>
        <li className="product-details-nav">
          Reviews
        </li>
      </ul>
    );
  }

  detailsSection(){
    let details = this.props.product.item.details;
    return(
      <section className="product-details-section">
        <h3 className="details-label">Details</h3>
        <ul className="details-list">
          {details.map((detail) =>
            <li className="details-list" key={detail.detailId}>
              {detail.description}
            </li>
          )}
        </ul>
      </section>
    );
  }

  specsTable() {
    // Hardcoded for time's sake
    const categoryOrder = {
      1: ["best_use",
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
      2: ["best_use",
          "seasons",
          "weight",
          "floor_area",
          "peak_height",
          "number_of_doors",
          "design_type"
         ]
    };

    let item = this.props.product.item;
    let categories = categoryOrder[item.category_id];
    let tableKeys = {};

    categories.forEach((name) => {
      let splitNames = name.split("_");
      let titleCased = splitNames.map(splitName => {
        return splitName[0].toUpperCase() + splitName.slice(1);
      }).join(" ");
      tableKeys[name] = titleCased;
    });

    let tableValues = this.getTableValues(item, categories);

    return(
      <div className="product-specs-table-container">
        <h3 className="product-specs-table-title">Specs</h3>
        <table className="product_specs">
          <tbody>
            {categories.map(key => (
              <tr key={key} className="products-specs-table-row">
                <th >{tableKeys[key]}</th>
                <td>{tableValues[key]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  roundToOneDecimal(value) {
    return Math.round(value * 10) / 10;
  }

  stringifyWeight(weight) {
    let pounds = Math.floor(weight);
    if (pounds > 0) {
      let ounces = this.roundToOneDecimal((weight - pounds)*16);
      weight = `${pounds} lbs. ${ounces} oz.`;
    } else {
      let ounces = this.roundToOneDecimal(weight*16);
      weight = `${ounces} ounces`;
      console.log(weight);
    }
    return weight;
  }

  getTableValues(item, categories) {
    let tableValues = {};
    let value;

    categories.forEach(key => {
      value = item[key];

      switch(key) {
        case "temperature_rating":
          let tempF = value;
          let tempC = this.roundToOneDecimal(parseFloat(tempF)*(5/9)+32);
          tableValues[key] = `${tempF} F   /   ${tempC} C`;
          break;

        case "weight":
          tableValues[key] = this.stringifyWeight(parseFloat(value));
          break;

        case "fill_weight":
          if (value) {
            tableValues[key] = this.stringifyWeight(parseFloat(value));
            break;
          } else {
            break;
          }
        case "fits_up_to":
          tableValues[key] = `${value*12} inches`;
          break;

        case "packed_size":
          tableValues[key] = `${value} liters`;
          break;

        default:
          tableValues[key] = value;
          break;
      }

    });

    return tableValues;
  }

  render() {
    return (
      <div className="details-specs-and-reviews-container">
        {this.detailsNavigationBar()}
        {this.detailsSection()}
        {this.specsTable()}
      </div>
    );
  }
}

export default ProductDisplay;
