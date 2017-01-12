import React from 'react';
import Header from './auth/header';
import {withRouter, Link} from 'react-router';

const renderHomePage = (props) => {
  // const backgroundURL = "http://res.cloudinary.com/nequalszero/image/upload/c_scale,h_600/v1478298316/sheep-1476781_1920_itrb02.jpg";
  const backgroundURL = "http://res.cloudinary.com/nequalszero/image/upload/v1484193222/marmot_banner_ndtb0m.jpg";
  if (props.location.pathname === "/") {
    return(<img className="homepage-main-image" src={backgroundURL}/>);
  }
};

// const redirectIfNotHome = (url, props) => {
//   if (props.location.pathname !== "/") {
//     return (e) => props.router.push(url);
//   }
// };

const App = ( props ) => {
  return(
    <div>
      <Header props={props}/>
      {renderHomePage(props)}
      {props.children}
    </div>
  );
};


export default withRouter(App);
