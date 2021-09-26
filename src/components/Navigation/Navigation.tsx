import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './Navigation.scss';

function Navigation() {
  return (
    <nav className={s.navigation}>
      <ul className={s.itemList}>
        <li className={s.item}>
          <NavLink activeClassName={s.selected} className={s.link} exact to="/">
            About
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink
            activeClassName={s.selected}
            className={s.link}
            exact
            to="/projects"
          >
            Projects
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
