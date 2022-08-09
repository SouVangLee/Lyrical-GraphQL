import React from 'react';
import { Outlet } from 'react-router-dom';
import "../style/style.css";

const App = ({ children }) => {
  return (
    <div>
      <div className='container'>
      {children}
      </div>
      <Outlet />
    </div>
  );
};

export default App;