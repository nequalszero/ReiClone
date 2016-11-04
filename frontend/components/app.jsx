import React from 'react';
import AuthContainer from './auth/auth_container';

const App = ({ children }) => {
  // <CartContainer />
  const logoURL = "http://res.cloudinary.com/nequalszero/image/upload/c_scale,h_100/v1478194085/animal-icon-png-6295_rk9nzw.png";
  return(
    <div>
      <header>
        <div className="logo-search-categories-container">
          <div className="header-logo-container">
            <img src={logoURL} className="header-logo"/>
          </div>
          <div className="search-auth-categories-container">
            <div className="search-auth-container">
              <div className="header-search-bar">
                <input value="Search for great gear & clothing"/>
              </div>

              <nav className="authForms">
                <ul className="authForms-ul">
                  <AuthContainer />
                </ul>
              </nav>
            </div>

            <nav className="categories">
              <ul className="categories-ul">
                <li key="Cat1">Cat 1</li>
                <li key="Cat2">Cat 2</li>
                <li key="Cat3">Cat 3</li>
              </ul>
            </nav>
          </div>
        </div>

      </header>
      {children}
    </div>
  );
};


export default App;
