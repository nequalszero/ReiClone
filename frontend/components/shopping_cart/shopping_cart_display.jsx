import React from 'react';
import { withRouter, Link } from 'react-router';
import { padPrice } from '../helper_functions/product_details_helper';
import { bottomDivider } from '../helper_functions/misc_elements';
import { blueButtonClass } from '../helper_functions/misc_elements';

import ShoppingCartDisplayItemContainer
      from './shopping_cart_display_item_container';

class ShoppingCartDisplay extends React.Component {
  constructor(props) {
    super(props);
    // console.log("receiving constructor props: ", props);
    this.state = {items: props.shopping_cart.items};

    this.handleCheckout = this.handleCheckout.bind(this);
  }

  removeCartItem(item) {
    this.props.removeUserItemFromDatabase(item);
  }

  handleCheckout(e) {
    e.preventDefault();
    this.state.items.forEach((item) => {
      this.removeCartItem(item);
    });
  }

  shouldComponentUpdate(nextProps) {
    // console.log("ShoppingCartDisplay shouldComponentUpdate");
    if (nextProps.shopping_cart.items !== this.state.items) {
      return true;
    } else {
      return false;
    }
  }

  componentWillUpdate(nextProps) {
    // console.log("ShoppingCartDisplay componentWillUpdate");
    this.setState({items: nextProps.shopping_cart.items});
  }

  renderEmptyCartPage() {
    return(
      <div className="empty-cart-page-container">
        <section className="empty-shopping-cart-title-container">
          <h1 className="empty-shopping-cart-title">Shopping Cart</h1>
          <span className="shopping-cart-num-items">(0 items)</span>
        </section>
        <section className="empty-cart-description-container">
          <p className="empty-shopping-cart-statement">
            There are no items in your cart.
          </p>
          <Link className="empty-cart home-link" to="/">Shop for gear</Link>
        </section>
      </div>
    );
  }

  renderFilledCartPage() {
    let numItems = 0;
    let subtotal = 0;
    this.props.shopping_cart.items.forEach(item => {
      numItems += item.quantity;
      subtotal += item.quantity*parseFloat(item.price);
    });
    let subtotalString = padPrice(`${subtotal}`);

    return (
      <div className="filled-cart-page-container">
        {this.renderShoppingCartHeader(numItems, subtotalString)}
        {this.renderItemDetails()}
        {this.renderShoppingCartFooter(subtotalString)}
      </div>
    );
  }

  renderShoppingCartHeader(numItems, subtotalString) {
    return (
      <section className="shopping-cart-title-container">
        <div className="shopping-cart-title-and-num-items-container">
          <h1 className="shopping-cart-title">Shopping Cart</h1>
          <span className="shopping-cart-num-items">
            ({numItems} items)
          </span>
        </div>
        <div className="subtotal-and-checkout-container">
          <span className="subtotal-container">
            <label className="subtotal-label">
              Subtotal:
            </label>
            <span className="subtotal-amount">
              ${subtotalString}
            </span>
          </span>
          <button className={`checkout-button ${blueButtonClass}`}
                  onClick={this.handleCheckout}>
            Checkout
          </button>
        </div>
      </section>
    );
  }

  renderShoppingCartFooter(subtotalString) {
    return (
      <section className="shopping-cart-footer-container">
        <div className="shopping-cart-footer-total-and-checkout">
          <span className="subtotal-container">
            <label className="subtotal-label">
              Subtotal:
            </label>
            <span className="subtotal-amount">
              ${subtotalString}
            </span>
          </span>
          <button className={`checkout-button ${blueButtonClass}`}
                  onClick={this.handleCheckout}>
            Checkout
          </button>
        </div>
      </section>
    );
  }

  renderItemDetails() {
    // console.log("rendering item details");
    let numDifferentProducts = this.props.shopping_cart.items.length;

    return (
      <div className="shopping-cart-item-details-list">
        {this.state.items.map((item, idx) => (
          this.renderItemDetailAndBorder(item, idx, numDifferentProducts)
        ))}
      </div>
    );
  }

  renderItemDetailAndBorder(item, idx, numDifferentProducts) {
    return (
      <div key={idx} className="shopping-cart-item-details-row">
        <ShoppingCartDisplayItemContainer item={item}/>
        { idx === numDifferentProducts - 1 ? undefined : bottomDivider }
      </div>
    );
  }

  render() {
    // console.log("shopping cart display", this.props);
    return (
      <div className="shopping_cart_page_container">
        {this.props.shopping_cart.items.length === 0
                                                ? this.renderEmptyCartPage()
                                                : this.renderFilledCartPage()
        }
      </div>
    );
  }
}

export default withRouter(ShoppingCartDisplay);
