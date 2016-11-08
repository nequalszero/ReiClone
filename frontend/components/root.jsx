import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import ResultsIndexContainer from './products/results_index_container';
//import ProductsContainer from './products/products_container';
//<Route path="/product/:productId/" component={ProductsContainer} />

const Root = ( props ) => {
  return(
    <Provider store={props.store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <Route path="/category/:categoryId" component={ResultsIndexContainer} />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
