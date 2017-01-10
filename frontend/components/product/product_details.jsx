import React from 'react';
import ReviewsIndexContainer from '../reviews/reviews_index_container';

import { getTableValues } from '../helper_functions/product_details_helper';
import getCategories from '../helper_functions/product_spec_rownames';

const detailsLink = "product-details-link";
const specsLink = "product-specs-link";
const reviewsLink = "product-reviews-link";
const detailsId = "product-details-section";
const specsId = "product-specs-table";
const reviewsId = "product-reviews";

const idHash = {};
idHash[detailsLink] = detailsId;
idHash[specsLink] = specsId;
idHash[reviewsLink] = reviewsId;

class ProductDisplay extends React.Component {
  constructor(props) {
    super(props);
    // console.log("ProductDisplay props: ", props);
  }

  componentDidMount() {
    // console.log("componentDidMount");
    window.scrollTo(0, 0);
    let details = document.getElementsByClassName(detailsLink)[0];
    details.style.borderBottom = "6px solid #06c";
    details.style.color = "black";

    let specs = document.getElementsByClassName(specsLink)[0];
    specs.style.borderBottom = "none";
    specs.style.color = "#06c";

    let reviews = document.getElementsByClassName(reviewsLink)[0];
    reviews.style.borderBottom = "none";
    reviews.style.color = "#06c";
  }

  toggleLink(targetLink) {
    // console.log("toggling", targetLink);
    let details = document.getElementsByClassName(detailsLink)[0];

    const links = [detailsLink, specsLink, reviewsLink];

    links.forEach(link => {
      let currentElement = document.getElementsByClassName(link)[0];

      switch(link) {
        case targetLink:
          currentElement.style.borderBottom = "6px solid #06c";
          currentElement.style.color = "black";
          let scrollToTarget = document.getElementById(idHash[link]);
          let scrollToPos = window.scrollY - 82
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
        <li className={detailsLink}
            onClick={() => this.toggleLink(detailsLink)}>
            Details
        </li>
        <li className="product-specs-link"
            onClick={() => this.toggleLink(specsLink)}>
            Specs
        </li>
        <li className="product-reviews-link"
            onClick={() => this.toggleLink(reviewsLink)}>
          Reviews
        </li>
      </ul>
    );
  }

  detailsSection(){
    let details = this.props.product.item.details;
    return(
      <section className={detailsId}>
        <h3 className="details-label" id={detailsId}>
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

    let tableValues = getTableValues(item, rowKeys);

    return(
      <div className="product-specs-table-container">
        <h3 className="product-specs-table-title" id={specsId}>
          Specs
        </h3>
        <table className="product-specs">
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

  render() {
    return (
      <div className="details-specs-and-reviews-container">
        {this.detailsNavigationBar()}
        {this.detailsSection()}
        {this.specsTable()}
        <ReviewsIndexContainer item={this.props.product.item}
                               idName={reviewsId}/>
      </div>
    );
  }
}

export default ProductDisplay;
