import React from 'react';
import { withRouter } from 'react-router';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.redirectToCartPage = this.redirectToCartPage.bind(this);
  }

  redirectToCartPage(e) {
    e.preventDefault();
    this.props.router.push("/shoppingCart");
  }

  render() {
    let numItems = 0;
    let localCartLength = this.props.shopping_cart.localItems.length;
    let stateCartLength = this.props.shopping_cart.items.length;

    if (localCartLength > 0 && stateCartLength > 0)
      throw "ERROR ShoppingCart#render: both the localStorage and state " +
            "have shopping cart items";

    if (localCartLength > 0) {
      this.props.shopping_cart.localItems.forEach(item => {
        numItems += parseInt(item.quantity);
      });
    }

    if (stateCartLength > 0) {
      this.props.shopping_cart.items.forEach(item => {
        numItems += parseInt(item.quantity);
      });
    }

    numItems = numItems > 999 ? '999+' : numItems;
    return(
      <li className="visible-li"
          onClick={this.redirectToCartPage}>
        CART <i className="fa fa-shopping-cart fa-lg"
                aria-hidden="true"></i>
              <strong className="num-cart-items"> {numItems}</strong>
      </li>
    );
  }
}

export default withRouter(ShoppingCart);
