import React from 'react';
import ProductDetailsContainer from './product_details_container';

class ProductDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {quantity: 1};
    // this.updateQuantity = this.updateQuantity.bind(this);
  }

  displayProduct() {
    if (this.props.product.item) {
      return (
        <div className="display-product-page-container">
          {this.renderProductNameAndSummary()}
          {this.renderProductImagePriceAndReviews()}
          <ProductDetailsContainer />
        </div>
      );
    } else {
      return (
        <div className="display-product-page-container">
          <p>Loading product information</p>
        </div>
      );
    }
  }

  renderProductNameAndSummary() {
    let item = this.props.product.item;
    let title = `${item.brand} ${item.name}`;
    let description = `${item.description}`;

    return(
      <div className="product-name-and-summary-container">
        <h2 className="product-title">
          {title}
        </h2>
        <span className="product-description">
          {description}
        </span>
      </div>
    );
  }

  padPrice(price) {
    let priceString = price;
    if (price.split(".")[1].length === 1) {
      priceString = priceString + "0";
    }
    return priceString;
  }

  formatRating(rating) {
    const star = <i className="fa fa-star" aria-hidden="true"></i>;
    const emptyStar = <i className="fa fa-star-o" aria-hidden="true"></i>;
    const halfStar = <i className="fa fa-star-half-o" aria-hidden="true"></i>;

    if (rating === 0.0) {
      return [emptyStar, emptyStar, emptyStar, emptyStar, emptyStar];
    } else {
      let starArray = [];
      let numStars = Math.floor(rating);
      let residualStar = Math.round((rating - numStars)*10)/10;
      for (let i = 0; i < numStars; i++) {
        starArray.push(star);
      }
      if (residualStar >= 0.3 && residualStar <= 0.8) {
        starArray.push(halfStar);
      }
      while (starArray.length < 5) {
        starArray.push(emptyStar);
      }
      return starArray;
    }
  }

  renderProductImagePriceAndReviews() {
    let item = this.props.product.item;
    let title = `${item.brand} ${item.name}`;
    let price = this.padPrice(item.price);
    let rating = this.formatRating(parseFloat(item.rating));

    return(
      <div className="product-image-price-reviews-container">
        <div className="product-image">
          <img src={item.primary_image} alt={title}/>
        </div>
        <div className="product-price-reviews-quantity-container">
          <div className="product-price-reviews-container">
            <div className="product-price-container">
              <span className="product-price">
                ${price}
              </span>
            </div>
            <div className="product-rating-container">
              <span className="product-rating">
                {rating.map((el) => el)} {item.rating} ({item.num_ratings})
              </span>
            </div>
          </div>
          {this.renderAddProductToCart()}
        </div>
      </div>
    );
  }

  updateQuantity() {
    return (e) => {
      this.setState({["quantity"]: e.target.value});
    };
  }

  addProductToCart(item) {
    return (e) => {
      item.quantity = parseInt(this.state.quantity);
      this.props.addItemToCart(item);
    };
  }

  renderAddProductToCart() {
    let item = this.props.product.item;
    let itemName = `${item.brand} ${item.name}`;

    return (
      <div className="quantity-and-add-to-cart-container">
        <div className="product-quantity-container">
          <label className="product-quantity-label">
            Quantity
          </label>
          <br/>
          <input className="product-quantity-input"
            value={this.state.quantity}
            onChange={this.updateQuantity()}/>
        </div>
        <button className="add-product-to-cart"
                onClick={this.addProductToCart(item)}>
                Add To Cart <i className="fa fa-cart-plus fa-lg"
                               aria-hidden="true"></i>
        </button>
      </div>
    );
  }

  componentWillMount() {
    this.props.requestItem(this.props.productId);
  }

  render() {
    return this.displayProduct();
  }
}

export default ProductDisplay;
