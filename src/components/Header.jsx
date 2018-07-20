import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1 className="text-center display-3">Expensify</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>
      <p className='display-5'>Dashboard</p>
    </NavLink>
    <NavLink to="/create" activeClassName="is-active">
      <p className="display-5">Create Expense</p>
    </NavLink>
    <NavLink to="/edit/id" activeClassName="is-active">
      <p className="display-5">Edit Expense</p>
    </NavLink>
    <NavLink to="/help" activeClassName="is-active">
      <p className="display-5">Help</p>
    </NavLink>
  </header>
);

export default Header;
