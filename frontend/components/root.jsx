import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import ResultsIndexContainer from './results/results_index_container';
import ProductDisplayContainer from './product/product_display_container';
import ShoppingCartDisplayContainer
    from './shopping_cart/shopping_cart_display_container';
import Checkout from './shopping_cart/checkout';

import { requestCategoryItems } from '../actions/results_actions';
import { requestItem } from '../actions/product_actions';
import { requestUserItems } from '../actions/shopping_cart_actions';
import { requestReviews } from '../actions/reviews_actions';
import { search } from '../actions/search_actions';


const Root = ( props ) => {
  const updateResults = (nextState) => {
    props.store.dispatch(requestCategoryItems(nextState.params.categoryId));
  };

  const updateProduct = (nextState) => {
    props.store.dispatch(requestItem(nextState.params.productId));
    props.store.dispatch(requestReviews(nextState.params.productId));
  };

  const getSearchResults = nextState => {
    let query = { keywords: `${nextState.location.search}` };
    props.store.dispatch(search(query));
  };

  return(
    <Provider store={props.store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <Route path="/category/:categoryId"
                 component={ResultsIndexContainer}
                 onEnter={updateResults}/>
          <Route path="/product/:productId"
                 component={ProductDisplayContainer}
                 onEnter={updateProduct}/>
          <Route path="/shoppingCart"
                 component={ShoppingCartDisplayContainer}/>
          <Route path="/search"
                 component={ResultsIndexContainer}
                 onEnter={getSearchResults}/>
          <Route path="/checkout"
                 component={Checkout}/>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
