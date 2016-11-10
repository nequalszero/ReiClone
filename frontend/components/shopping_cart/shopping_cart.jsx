import React from 'react';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let numItems = 0;
    if (this.props.shopping_cart.items.length > 0) {
      numItems = this.props.shopping_cart.length;
    }
    return(
      <li>
        CART <i className="fa fa-shopping-cart fa-lg"
                aria-hidden="true"></i>
              <strong className="num-cart-items"> {numItems}</strong>
      </li>
    );
  }
}

export default ShoppingCart;
