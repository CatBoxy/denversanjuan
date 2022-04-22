import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import Admin from './screens/Admin';
import NotFound from './screens/NotFound';
import Login from './screens/Login';
import RequireAuth from './components/requireAuth';

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
        path="/dashboard"
        element={
          <RequireAuth>
            <Admin/>
          </RequireAuth>
        } />
        <Route
          path="/login"
          element={
            <Login/>
          } />
      <Route
        path="*"
        element= {
          <NotFound/>
        }
      />
    </Routes>
  );
}

export default MyRoutes;