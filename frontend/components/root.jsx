import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import ResultsIndexContainer from './results/results_index_container';
import ProductDisplayContainer from './product/product_display_container';
import { requestCategoryItems } from '../actions/results_actions';
import { requestItem } from '../actions/product_actions';



const Root = ( props ) => {
  const updateResults = (nextState) => {
    props.store.dispatch(requestCategoryItems(nextState.params.categoryId));
  };

  const updateProduct = (nextState) => {
    props.store.dispatch(requestItem(nextState.params.productId));
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
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
