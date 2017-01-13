import React from 'react';
import Header from './home_page/header';
import SplashPageContainer from './home_page/splash_page_container';
import {withRouter, Link} from 'react-router';

const renderHomePage = (props) => {
  if (props.location.pathname === "/") {
    return(<SplashPageContainer router={props.router}/>);
  }
};

const App = ( props ) => {
  return(
    <div className="home-page-wrapper">
      <Header props={props}/>
      {renderHomePage(props)}
      {props.children}
    </div>
  );
};


export default withRouter(App);
