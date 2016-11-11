import React from 'react';
import AuthContainer from './auth/auth_container';
import CategoryIndexContainer from './results/category_index_container';
import {withRouter} from 'react-router';

const renderHomePage = (props) => {
  const backgroundURL = "http://res.cloudinary.com/nequalszero/image/upload/c_scale,h_600/v1478298316/sheep-1476781_1920_itrb02.jpg";
  if (props.location.pathname === "/") {
    return(<img className="homepage-main-image" src={backgroundURL}/>);
  }
};

const redirectIfNotHome = (url, props) => {
  if (props.location.pathname !== "/") {
    return (e) => props.router.push(url);
  }
};

const App = ( props ) => {
  const logoURL = "http://res.cloudinary.com/nequalszero/image/upload/c_scale,h_100/v1478194085/animal-icon-png-6295_rk9nzw.png";
  return(
    <section>
      <header className="header">
        <nav className="header-nav">
          <div className="logo-search-categories-container">
            <div className="header-logo-container"
                 onClick={redirectIfNotHome("/", props)}>
              <img src={logoURL} className="header-logo"/>
            </div>
            <div className="search-auth-categories-container">
              <div className="search-auth-container-divider">
                <div className="search-auth-container">
                  <div className="header-search-bar">
                    <input value="Search for great gear & clothing"/>
                  </div>

                  <nav className="authForms">
                    <AuthContainer />
                  </nav>
                </div>
                <div className="header-line-divider"/>
              </div>
              <nav className="categories">
                <CategoryIndexContainer />
              </nav>
            </div>
          </div>
        </nav>

      </header>
      {renderHomePage(props)}
      {props.children}
    </section>
  );
};


export default withRouter(App);
