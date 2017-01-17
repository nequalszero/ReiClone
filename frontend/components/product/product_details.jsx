import React from 'react';
import classNames from 'classnames';
import ReviewsIndexContainer from '../reviews/reviews_index_container';

import { getTableValues } from '../helper_functions/product_details_helper';
import getCategories from '../helper_functions/product_spec_rownames';

const defaultActiveLinks = () => ({
  details: false,
  specs: false,
  reviews: false,
  toTop: false,
  fixedNavBar: false,
  backToTop: false
});

// intentaionally in reverse order
const navbarKeys = ["reviews", "specs", "details"];

class ProductDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {activeLinks: defaultActiveLinks()};
    this.state.activeLinks.details = true;

    this.setNavElementClassName = this.setNavElementClassName.bind(this);
    this.setNavbarClass = this.setNavbarClass.bind(this);
    this.setBackToTopClass = this.setBackToTopClass.bind(this);

    this.handleScroll = this.handleScroll.bind(this);
    this.backToTop = this.backToTop.bind(this);
  }

  componentDidMount() {
    let navBarHeight = this.navbar.getBoundingClientRect().height;
    let specsLinkHeight = this.specsLink.getBoundingClientRect().height;
    let detailsLinkHeight = this.detailsLink.getBoundingClientRect().height;

    this.setState({
      sectionPositions: {
        details: this.detailsLink.offsetTop - detailsLinkHeight - navBarHeight,
        specs: this.specsLink.offsetTop - navBarHeight - specsLinkHeight,
        reviews: this.reviewsLink.offsetTop - navBarHeight - 20,
        navbar: this.navbar.offsetTop + navBarHeight
      },
      navbarHeight: navBarHeight
    });

    document.addEventListener('scroll', this.handleScroll);
    window.scrollTo(0, 0);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll);
  }

  backToTop() {
    return (
      <div className={this.setBackToTopClass()}>
        <div className="back-to-top-dummy">
          <img className="back-to-top-button"
               src="http://res.cloudinary.com/nequalszero/image/upload/v1484607371/REI_Clone/back-to-top_jvo1il.png"
               onClick={() => window.scrollTo(0, 0)}/>
        </div>
      </div>
    );
  }

  handleScroll(event) {
    let pagePos = event.srcElement.body.scrollTop;

    let newActiveLinks = Object.assign({}, this.state.activeLinks);
    let positions = this.state.sectionPositions;
    newActiveLinks.fixedNavBar = pagePos > positions.navbar ? true : false;
    newActiveLinks.backToTop = false;

    if (newActiveLinks.fixedNavBar) {
      newActiveLinks.backToTop = true;
      let navbarHeight = this.state.navbarHeight;
      let found = false;

      // navbarKeys are in reverse order from 'reviews' to 'details'
      navbarKeys.forEach(key => {
        if (found) {
          newActiveLinks[key] = false;
        }
        else {
          newActiveLinks[key] = (pagePos + navbarHeight) >= positions[key]
                                ? true : false;
          if (newActiveLinks[key]) found = true;
        }
      });
    }

    this.setState({activeLinks: newActiveLinks});
  }

  toggleLink(target) {
    let newActiveLinks = defaultActiveLinks();
    newActiveLinks[target] = true;
    newActiveLinks.fixedNavBar = this.state.activeLinks.fixedNavBar;
    this.setState({activeLinks: newActiveLinks});
    let scrollToPosition = this.state.sectionPositions[target];
    window.scrollTo(0, scrollToPosition);
  }

  setNavElementClassName(target) {
    return classNames({
      'navbar-link': true,
      'pd-active-navbar': this.state.activeLinks[target]
    });
  }

  setNavbarClass() {
    return classNames({
      "product-details-nav": true,
      'pd-fixed-navbar': this.state.activeLinks.fixedNavBar
    });
  }

  setBackToTopClass() {
    return classNames({
      "back-to-top-container": true,
      'back-to-top-hidden': !this.state.activeLinks.backToTop,
    });
  }

  detailsNavigationBar() {
    return(
      <ul className={this.setNavbarClass("navbar")}
          ref={(navbar) => {this.navbar = navbar;}}>
        <li className={this.setNavElementClassName("details")}
            onClick={() => this.toggleLink("details")}>
            Details
        </li>
        <li className={this.setNavElementClassName("specs")}
            onClick={() => this.toggleLink("specs")}>
            Specs
        </li>
        <li className={this.setNavElementClassName("reviews")}
            onClick={() => this.toggleLink("reviews")}>
          Reviews
        </li>
      </ul>
    );
  }

  detailsSection(){
    let details = this.props.product.item.details;
    return(
      <section className="details-section">
        <h3 className="details-label"
            ref={(h3) => { this.detailsLink = h3; }}>
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
        <h3 className="product-specs-table-title"
            ref={(h3) => { this.specsLink = h3; }}>
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
        <span id="reviews-position-placeholder"
              ref={(RIC) => {this.reviewsLink = RIC; }}/>
        <ReviewsIndexContainer item={this.props.product.item}/>
        {this.backToTop()}
      </div>
    );
  }
}

export default ProductDisplay;
