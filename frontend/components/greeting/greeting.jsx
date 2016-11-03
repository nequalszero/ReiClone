import React from 'react';
import { Link } from 'react-router';

const sessionLinks = () => (
  <nav>
    <Link to="/login">Login</Link>
    <br></br>
    <Link to="/signup">Sign up!</Link>
  </nav>
);

const loggedInHeader = (currentUser, logout) => (
  <nav>
    <h2>Hi, {currentUser.username}!</h2>
    <br></br>
    <button onClick={logout}>Log Out</button>
  </nav>
);

const Greeting = props => {
  let currentUser = props.currentUser;
  let logout = props.logout;
  return currentUser ? loggedInHeader(currentUser, logout) : sessionLinks();
};

export default Greeting;
