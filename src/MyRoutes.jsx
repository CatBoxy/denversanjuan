import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import Admin from './screens/Admin';
import NotFound from './screens/NotFound';

function MyRoutes() {

  return (
    <Routes>
      <Route
        path="/"
        element={
            <Home/>
        }
      />
      <Route
        path='/dashboard'
        element={
          <Admin/>
        } />
      <Route
        path='*'
        element= {
          <NotFound/>
        }
      />
    </Routes>
  );
}

export default MyRoutes;