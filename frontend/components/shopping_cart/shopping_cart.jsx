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
    console.log("Rendering shopping cart");
    let numItems = 0;
    if (this.props.shopping_cart.items.length > 0) {
      this.props.shopping_cart.items.forEach(item => {
        numItems += item.quantity;
      });
    }
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
