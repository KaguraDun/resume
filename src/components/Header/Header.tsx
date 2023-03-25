import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './Header.scss';

interface IHeader {
  places: {
    linkTo: string;
    navText: string;
  }[];
}

function Header({ places }: IHeader) {
  return (
    <header>
      <nav className={s.navigation}>
        <ul className={s.itemList}>
          {places.map((item) => (
            <li key={item.linkTo} className={s.item}>
              <NavLink
                activeClassName={s.selected}
                className={s.link}
                exact
                to={item.linkTo}
              >
                {item.navText}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
