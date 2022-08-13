import React from 'react';
import { Outlet } from 'react-router-dom';

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