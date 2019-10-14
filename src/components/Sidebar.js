import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div>
      <header>
        <h1 className="display-4 mb-3">College Football</h1>
      </header>
      <div>
        <ul className="nav flex-column">
          <li className="nav-item"><NavLink to="/teams" className="nav-link">Teams</NavLink></li>
          <li className="nav-item"><NavLink to="/conferences" className="nav-link">Conferences</NavLink></li>
        </ul>
      </div>
    </div>
  );
};


export default Sidebar;