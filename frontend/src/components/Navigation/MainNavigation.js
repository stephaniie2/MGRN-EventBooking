import React from 'react';
import { NavLink } from 'react-router-dom';

import AuthContext from '../../context/auth-context';

import './MainNavigation.css';

const MainNavigation = props => (
  <AuthContext.Consumer>
    {context => {
      return (
        <nav className="main-navigation">
          <div className="main-navigation__logo">
            <h1>FunEvents</h1>
          </div>
          <nav className="main-navigation__items">
            <ul>
              {!context.token && (
                <li>
                  <NavLink to="/auth">Authenticate</NavLink>
                </li>
              )}
              <li>
                <NavLink to="/events">Events</NavLink>
              </li>
              {context.token && (
                <li>
                  <NavLink to="/bookings">Bookings</NavLink>
                </li>
              )}
            </ul>
          </nav>
        </nav>
      );
    }}
  </AuthContext.Consumer>
);

export default MainNavigation;
