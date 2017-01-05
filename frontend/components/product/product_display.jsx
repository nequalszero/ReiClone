import React from 'react';
import ProductDetailsContainer from './product_details_container';
import ReviewsIndexContainer from '../reviews/reviews_index_container';
import { padPrice, formatRating, validQuantity }
        from '../helper_functions/product_details_helper';
import { blueButtonClass } from '../helper_functions/misc_elements';

class ProductDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {quantity: 1,
                  quantityEmpty: false,
                  product_id: this.props.productId,
                  numProductsInCart: this.props.numProducts};
    console.log("this.state.numProducts", this.state.numProductsInCart);
    this.addProductToCart = this.addProductToCart.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({numProductsInCart: nextProps.numProducts});
    console.log("this.state.numProducts", nextProps.numProducts);
  }

  updateQuantity() {
    return (e) => {
      // console.log(`Incoming value: ${e.target.value}`);
      if (validQuantity(e.target.value)) {
        this.setState({["quantity"]: e.target.value});
        // console.log(`successfully updated to ${e.target.value}`);
      } else {
        // console.log(`Keeping state quantity at: ${this.state.quantity}`);
      }
    };
  }

  addProductToCart(e) {
    e.preventDefault();
    let item = this.state;
    this.props.saveCartItemToDatabase(item);
  }

  displayProduct() {
    if (this.props.product.item) {
      return (
        <div className="display-product-page-container">
          {this.renderProductName()}
          {this.renderProductImagePriceAndReviews()}
          <ProductDetailsContainer />
          <ReviewsIndexContainer item={this.props.product.item}/>
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
    let rating = formatRating(parseFloat(item.rating));
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
            <img className="product-image" src={item.primary_image} alt={title}/>
          </div>
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
                {rating.map((el) => el)} {item.rating} {numRatings}
              </span>
            </div>
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
