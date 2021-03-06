import React from 'react';
import { Link } from 'react-router';
import AuthContainer from '../auth/auth_container';
import SearchBarContainer from '../search/search_bar_container';
import CategoryIndexContainer from '../results/category_index_container';

const Header = ({props}) => {
  const logoURL = "http://res.cloudinary.com/nequalszero/image/upload/c_crop,h_114,w_117/v1484353686/REI_Clone/Home_Page/homepage-logo-4_tu9jph.png";
  return (
    <header className="header">
      <nav className="header-nav">
        <div className="logo-search-categories-container">
          <Link className="header-logo-container" to='/'>
            <img src={logoURL} className="header-logo"/>
          </Link>
          <div className="search-auth-categories-container">
            <div className="search-auth-container-divider">
              <div className="search-auth-container">
                <SearchBarContainer router={props.router}/>
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
  );
};

export default Header;
