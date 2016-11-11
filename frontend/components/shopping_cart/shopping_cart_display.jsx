import React from 'react';
import { withRouter, Link } from 'react-router';

class ShoppingCartDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.clickEventHandler = this.clickEventHandler.bind(this);
    this.renderEmptyCartPage = this.renderEmptyCartPage.bind(this);
    this.renderFilledCartPage = this.renderFilledCartPage.bind(this);
    this.renderItemDetails = this.renderItemDetails.bind(this);
    this.renderItemDetailAndBorder = this.renderItemDetailAndBorder.bind(this);
    this.renderItemDetail = this.renderItemDetail.bind(this);
  }

  clickEventHandler(e) {
    e.preventDefault();
    this.props.router.push("/shopping_cart");
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

  renderItemDetails() {
    console.log("rendering item details");
    let numDifferentProducts = this.props.shopping_cart.items.length;
    return (
      <div className="shopping-cart-item-details-list">
        {this.props.shopping_cart.items.map((item, idx) => (
          this.renderItemDetailAndBorder(item, idx, numDifferentProducts)
        ))}
      </div>
    );
  }

  renderItemDetailAndBorder(item, idx, numDifferentProducts) {
    console.log("redering item detail and border");
    let itemDetail = this.renderItemDetail(item);
    let border = this.renderDivider(idx, numDifferentProducts);
    console.log("itemDetail", itemDetail);
    return (
      <div className="shopping-cart-item-details-row">
        {itemDetail}
        {border}
      </div>
    );
  }

  renderItemDetail(item) {
    console.log("rendering item detail");
    let itemName = `${item.brand} ${item.name}`;
    return (
      <li key={item.product_id} className="shopping-cart-item-detail-container">
        <span classfilledCartPageName="shopping-cart-item-image-container">
          <img className="shopping-cart-item-image"
               src={item.cart_image}
               alt={itemName} />
        </span>
      </li>
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
    console.log("shopping cart display", this.props);
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
