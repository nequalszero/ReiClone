import React from 'react';
import { withRouter, Link } from 'react-router';

class ShoppingCartDisplay extends React.Component {
  constructor(props) {
    super(props);
    // console.log("receiving constructor props: ", props);
    this.state = {items: props.shopping_cart.items};
    this.renderEmptyCartPage = this.renderEmptyCartPage.bind(this);
    this.renderFilledCartPage = this.renderFilledCartPage.bind(this);
    this.renderItemDetails = this.renderItemDetails.bind(this);
    this.renderItemDetailAndBorder = this.renderItemDetailAndBorder.bind(this);
    this.renderItemDetail = this.renderItemDetail.bind(this);
    this.renderQuantity = this.renderQuantity.bind(this);
  }

  updateCartItem(idx) {
    return (e) => (
      this.props.updateQuantityInDatabase(this.state.items[idx])
    );
  }

  removeCartItem(idx) {
    return (e) => (
      this.props.removeUserItemFromDatabase(this.state.items[idx])
    );
  }

  shouldComponentUpdate(nextProps) {
    // console.log("ShoppingCartDisplay shouldComponentUpdate");
    if (nextProps.shopping_cart.items.length > 0 && this.state.items.length === 0) {
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

  padPrice(price) {
    let priceString = price;
    if (price.split(".").length === 1) {
      priceString = price + ".00";
    } else if (price.split(".")[1].length === 1) {
      priceString = priceString + "0";
    }
    return priceString;
  }

  renderFilledCartPage() {
    let numItems = 0;
    let subtotal = 0;
    this.props.shopping_cart.items.forEach(item => {
      numItems += item.quantity;
      subtotal += item.quantity*parseFloat(item.price);
    });
    let subtotalString = this.padPrice(`${subtotal}`);

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
          <button className="checkout-button">
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
          <button className="checkout-button">
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
    let itemDetail = this.renderItemDetail(item, idx);
    let border = this.renderDivider(idx, numDifferentProducts);
    return (
      <div className="shopping-cart-item-details-row">
        {itemDetail}
        {border}
      </div>
    );
  }

  renderItemDetail(item, idx) {
    // console.log("rendering item detail");
    let itemName = `${item.brand} ${item.name}`;
    return (
      <li key={item.product_id} className="shopping-cart-item-detail-container">
        <span className="shopping-cart-item-image-container">
          <img className="shopping-cart-item-image"
               src={item.cart_image}
               alt={itemName} />
        </span>
        <span className="shopping-cart-item-details-container">
          {this.renderItemSummary(item)}
          {this.renderQuantity(item, idx)}
          {this.renderItemTotal(item)}
        </span>
      </li>
    );
  }

  renderItemSummary(item) {
    let title = `${item.brand} ${item.name}`;
    let price = this.padPrice(item.price);
    return(
      <div className="shopping-cart-item-summary-container">
        <span className="shopping-cart-item-title">{title}</span>
        <span className="shopping-cart-item-price">${price}</span>
      </div>
    );
  }

  updateQuantityField(idx) {
    // console.log("updateQuantityField - update local state");
    return (e) => {
      let newItems = this.state.items;
      newItems[idx].quantity = parseInt(e.target.value);
      this.setState({items: newItems});
    };
  }

  renderQuantity(item, idx) {
    return(
      <div className="shopping-cart-item-quantity-container">
        <div className="cart-item-quantity-container-half">
          <label className="shopping-cart-item-quantity-label">
            Quantity
          </label>
          <span className="shopping-cart-item-quantity-action"
                onClick={this.updateCartItem(idx)}>
            Update
          </span>
        </div>
        <div className="cart-item-quantity-container-half">
          <input className="shopping-cart-item-quantity-input"
                  onChange={this.updateQuantityField(idx)}
                  defaultValue={this.state.items[idx].quantity}>

          </input>
          <span className="shopping-cart-item-quantity-action"
                onClick={this.removeCartItem(idx)}>
            Remove
          </span>
        </div>
      </div>
    );
  }

  renderItemTotal(item) {
    let itemTotal = parseFloat(item.price) * item.quantity;
    let paddedTotal = this.padPrice(`${itemTotal}`);
    return (
      <div className="shopping-cart-item-total-container">
        <span className="shopping-cart-item-total">
          Item total: ${paddedTotal}
        </span>
      </div>
    );
  }

  renderDivider(idx, numDifferentProducts) {
    if (idx === numDifferentProducts - 1) {
      return;
    } else {
      return (<span className="shopping-cart-item-divider" />);
    }
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
