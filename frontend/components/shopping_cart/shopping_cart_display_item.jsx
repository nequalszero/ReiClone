import React from 'react';
import { withRouter, Link } from 'react-router';
import { padPrice, validQuantity }
      from '../helper_functions/product_details_helper';

class ShoppingCartDisplayItem extends React.Component {
  constructor(props) {
    super(props);
    let item = Object.assign({}, props.item);
    item.tempQuantity = item.quantity;
    this.state = {item: item};

    this.updateQuantityField = this.updateQuantityField.bind(this);
  }

  updateCartItem() {
    let newItem = this.state.item;
    newItem.quantity = newItem.tempQuantity;
    this.props.updateQuantityInDatabase(newItem);
  }

  updateQuantityField() {
    return (e) => {
      if (validQuantity(e.target.value)) {
        let newItem = this.state.item;
        newItem.tempQuantity = e.target.value;
        this.setState({item: newItem});
      }
    };
  }

  removeCartItem() {
    this.props.removeUserItemFromDatabase(this.state.item);
  }

  redirectToProduct(e) {
    const productUrl = `/product/${this.state.item.product_id}`;
    this.props.router.push(productUrl);
  }

  render() {
    let item = this.state.item;
    let itemName = `${item.brand} ${item.name}`;
    return (
      <li className="shopping-cart-item-detail-container">
        <span className="shopping-cart-item-image-container">
          <Link to={`product/${item.product_id}`}
                onClick={() => this.redirectToProduct()}>
              <img className="shopping-cart-item-image"
                   src={item.cart_image}
                   alt={itemName}/>
          </Link>
        </span>
        <span className="shopping-cart-item-details-container">
          {this.renderItemSummary(item)}
          {this.renderQuantity(item)}
          {this.renderItemTotal(item)}
        </span>
      </li>
    );
  }

  renderItemSummary(item) {
    let title = `${item.brand} ${item.name}`;
    let price = padPrice(item.price);
    return(
      <div className="shopping-cart-item-summary-container">
        <Link to={`product/${item.product_id}`}
              className="shopping-cart-item-title"
              onClick={() => this.redirectToProduct()}>
              {title}
        </Link>
        <span className="shopping-cart-item-price">${price}</span>
      </div>
    );
  }

  renderQuantity(item) {
    return(
      <div className="shopping-cart-item-quantity-container">
        <div className="cart-item-quantity-container-half">
          <label className="shopping-cart-item-quantity-label">
            Quantity
          </label>
          <span className="shopping-cart-item-quantity-action"
                onClick={() => this.updateCartItem()}>
            Update
          </span>
        </div>
        <div className="cart-item-quantity-container-half">
          <input className="shopping-cart-item-quantity-input"
                 onChange={this.updateQuantityField()}
                 value={this.state.item.tempQuantity}>

          </input>
          <span className="shopping-cart-item-quantity-action"
                onClick={() =>this.removeCartItem()}>
            Remove
          </span>
        </div>
      </div>
    );
  }

  renderItemTotal(item) {
    let itemTotal = parseFloat(item.price) * item.quantity;
    let paddedTotal = padPrice(`${itemTotal}`);
    return (
      <div className="shopping-cart-item-total-container">
        <span className="shopping-cart-item-total">
          Item total: ${paddedTotal}
        </span>
      </div>
    );
  }
}

export default withRouter(ShoppingCartDisplayItem);
