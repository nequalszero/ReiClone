import React from 'react';
import { withRouter, Link } from 'react-router';
import { padPrice } from '../helper_functions/product_details_helper';
import { bottomDivider,
         blueButtonClass
       } from '../helper_functions/misc_elements';
import { pickBanner } from '../helper_functions/misc_helpers';

import ShoppingCartDisplayItemContainer
      from './shopping_cart_display_item_container';

class ShoppingCartDisplay extends React.Component {
  constructor(props) {
    super(props);
    let stateCartLength = props.shopping_cart.items.length;
    let localCartLength = props.shopping_cart.localItems.length;

    if (localCartLength > 0 && stateCartLength > 0) {
      throw "ERROR ShoppingCartDisplay#constructor both the localStorage " +
      "and state have shopping cart items";
    } else if (localCartLength > 0) {
      this.state = { items: props.shopping_cart.localItems };
    } else if (stateCartLength > 0) {
      this.state = { items: props.shopping_cart.items };
    } else {
      this.state = { items: [] };
    }

    this.state.currentUser = props.currentUser;
    this.handleCheckout = this.handleCheckout.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({currentUser: nextProps.currentUser});

    if (nextProps.currentUser) {
      this.setState({items: nextProps.shopping_cart.items});
    } else {
      this.setState({items: nextProps.shopping_cart.localItems});
    }
  }

  removeCartItem(item) {
    if (this.state.currentUser)
      this.props.removeUserItemFromDatabase(item);
    else {
      this.props.deleteItemInLocalCart(item);
    }
  }

  handleCheckout(e) {
    e.preventDefault();
    if (this.state.currentUser) {
      this.state.items.forEach((item) => {
        this.removeCartItem(item);
      });
      this.props.router.replace('/checkout');
    } else {
      this.props.emptyLocalCart();
      this.props.router.replace('/checkout');
    }
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
    this.state.items.forEach(item => {
      numItems += parseInt(item.quantity);
      subtotal += parseInt(item.quantity)*parseFloat(item.price);
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
    let numDifferentProducts = this.state.items.length;
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
      <div key={item.product_id} className="shopping-cart-item-details-row">
        <ShoppingCartDisplayItemContainer item={item}/>
        { idx === numDifferentProducts - 1 ? undefined : bottomDivider }
      </div>
    );
  }

  render() {
    let empty = true;
    if (this.state.items && this.state.items.length > 0) empty = false;
    let banner = pickBanner();

    return (
      <div className="shopping-cart-page-wrapper">
        <Link to={banner.route}>
          <div className={`checkout-banner ${banner.class}`}/>
        </Link>
        <div className="shopping_cart_page_container">
          { empty ? this.renderEmptyCartPage() : this.renderFilledCartPage() }
        </div>
      </div>
    );
  }
}

export default withRouter(ShoppingCartDisplay);
