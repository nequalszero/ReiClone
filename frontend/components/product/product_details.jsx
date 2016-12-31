import React from 'react';
import { stringifyWeight, parseFareinheitToCelsius }
        from '../helper_functions/product_details_helper';
import getCategories from '../helper_functions/product_spec_rownames';

class ProductDisplay extends React.Component {
  constructor(props) {
    super(props);
    // console.log("ProductDisplay props: ", props);
  }

  componentDidMount() {
    // console.log("componentDidMount");
    window.scrollTo(0, 0);
    let details = document.getElementsByClassName("product-details-link")[0];
    details.style.borderBottom = "6px solid #06c";
    details.style.color = "black";

    let specs = document.getElementsByClassName("product-specs-link")[0];
    specs.style.borderBottom = "none";
    specs.style.color = "#06c";
  }

  toggleLink(targetLink) {
    // console.log("toggling", targetLink);
    let details = document.getElementsByClassName("product-details-link")[0];
    const detailsLink = "product-details-link";
    const specsLink = "product-specs-link";
    const reviewsLink = "product-reviews-link";
    let detailsId = "product-details-section";
    let specsId = "product-specs-table";

    const idHash = {
                    "product-details-link": "product-details-section",
                    "product-specs-link": "product-specs-table"
                   };

    const links = [detailsLink, specsLink, reviewsLink];

    links.forEach(link => {
      let currentElement = document.getElementsByClassName(link)[0];

      switch(link) {
        case targetLink:
          currentElement.style.borderBottom = "6px solid #06c";
          currentElement.style.color = "black";
          let scrollToTarget = document.getElementById(idHash[link]);
          let scrollToPos = window.scrollY
                            + scrollToTarget.getBoundingClientRect().top;
          // console.log(`${idHash[link]} position`, scrollToPos);
          window.scrollTo(0, scrollToPos);
          break;
        default:
          currentElement.style.borderBottom = "none";
          currentElement.style.color = "#06c";
          break;
      }
    });

  }

  detailsNavigationBar() {
    return(
      <ul className="product-details-nav">
        <li className="product-details-link"
            onClick={() => this.toggleLink("product-details-link")}>
            Details
        </li>
        <li className="product-specs-link"
            onClick={() => this.toggleLink("product-specs-link")}>
            Specs
        </li>
        <li className="product-reviews-link">
          Reviews
        </li>
      </ul>
    );
  }

  detailsSection(){
    let details = this.props.product.item.details;
    return(
      <section className="product-details-section">
        <h3 className="details-label" id="product-details-section">
          Details
        </h3>
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
    let item = this.props.product.item;
    let categories = getCategories(item.category_id);
    let rowNames = {};
    let rowKeys = [];

    // object is of the form {attribute_name: Attribute Name}
    categories.forEach(object => {
      let key = Object.keys(object)[0];
      if (object[key]) {
        rowNames[key] = object[key];
        rowKeys.push(key);
      }
    });

    let tableValues = this.getTableValues(item, rowKeys);

    return(
      <div className="product-specs-table-container">
        <h3 className="product-specs-table-title" id="product-specs-table">
          Specs
        </h3>
        <table className="product_specs">
          <tbody>
            {Object.keys(tableValues).map(key => (
              <tr key={key} className="products-specs-table-row">
                <th>{rowNames[key]}</th>
                <td>{tableValues[key]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  getTableValues(item, categories) {
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
