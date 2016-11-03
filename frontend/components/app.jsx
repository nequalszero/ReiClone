import React from 'react';
import GreetingContainer from './greeting/greeting_container';

const App = ({ children }) => {
  console.log("Rendering app");
  return(
    <div>
      <h1>REI Clone</h1>
      <GreetingContainer />
      {children}
    </div>
  );
};


export default App;
