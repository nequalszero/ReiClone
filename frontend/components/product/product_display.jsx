import React from 'react';
import ProductDetailsContainer from './product_details_container';
import { padPrice, validQuantity }
        from '../helper_functions/product_details_helper';
import { formatRating } from '../helper_functions/rating_helper';

import { blueButtonClass } from '../helper_functions/misc_elements';

class ProductDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
                    quantity: 1,
                    quantityEmpty: false,
                    productId: this.props.productId,
                    numProducts: this.props.numProducts,
                    disableAdd: false,
                    processingOrder: false,
                    currentUserId: this.props.currentUserId
                 };
    this.addProductToCart = this.addProductToCart.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.numProducts !== this.state.numProducts) {
      if (this.state.processingOrder) {
        this.setState({processingOrder: false, quantity: 1, disableAdd: false});
      }
    }
    if (!this.state.currentUserId && nextProps.currentUserId) {
      this.props.requestUserReview(this.state.productId);
    }
    this.setState({
      numProducts: nextProps.numProducts,
      currentUserId: nextProps.currentUserId
    });
  }

  componentWillUnmount() {
    this.props.clearReviewsState();
    this.props.clearItemFromState();
  }

  updateQuantity() {
    return (e) => {
      if (validQuantity(e.target.value) && !this.state.processingOrder) {
        let blank = e.target.value === "" ? true : false;
        this.setState({quantity: e.target.value, disableAdd: blank});
      }
    };
  }

  addProductToCart(e) {
    e.preventDefault();
    if (!this.state.disableAdd && !this.state.processingOrder) {
      let item = {
        product_id: this.state.productId,
        quantity: parseInt(this.state.quantity),
      };
      if (this.props.currentUserId) {
        this.props.saveCartItemToDatabase(item);
        this.setState({processingOrder: true});
      } else {
        item = Object.assign(item, {
          brand: this.props.product.item.brand,
          cart_image: this.props.product.item.cart_image,
          category_id: this.props.product.item.category_id,
          name: this.props.product.item.name,
          price: this.props.product.item.price,
          product_table_id: this.props.product.item.product_table_id,
        });
        this.props.addItemInLocalCart(item);
      }
    }
  }

  displayProduct() {
    if (this.props.product.item) {
      return (
        <div className="display-product-page-container">
          {this.renderProductName()}
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

  renderProductName() {
    let item = this.props.product.item;
    let title = `${item.brand} ${item.name}`;

    return(
      <h2 className="product-title">
        {title}
      </h2>
    );
  }

  renderProductImagePriceAndReviews() {
    let item = this.props.product.item;
    let title = `${item.brand} ${item.name}`;
    let description = `${item.description}`;
    let price = padPrice(item.price);
    let rating = formatRating({
      rating: item.rating,
      numRatings: item.num_ratings,
      className: "product-page-rating",
      large: true,
      displayRatingText: true,
      displayNumRatings: true
    });
    let numRatings = `(${item.num_ratings})`;
    if (item.num_ratings === 0) {
      numRatings="";
    }

    return(
      <div className="product-image-price-reviews-container">
        <div className="product-image-and-summary-container">
          <span className="product-description">
            {description}
          </span>
          <div className="product-image-container">
            <img className="product-image"
                 src={item.primary_image}
                 alt={title}/>
          </div>
        </div>
        <div className="product-price-reviews-quantity-container">
          <div className="product-price-reviews-container">
            <div className="product-price-container">
              <span className="product-price">
                ${price}
              </span>
            </div>
            {rating}
          </div>
          {this.renderAddProductToCart()}
        </div>
      </div>
    );
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
        <button className={`add-product-to-cart ${blueButtonClass}`}
                onClick={this.addProductToCart}>
                Add To Cart <i className="fa fa-cart-plus fa-lg"
                               aria-hidden="true"></i>
        </button>
      </div>
    );
  }

  render() {
    return this.displayProduct();
  }
}

export default ProductDisplay;
