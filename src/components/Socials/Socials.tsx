import React from 'react';

import socials from '@/models/socials';

import s from './Socials.scss';

function Socials() {
  return (
    <ul className={s.socials}>
      {socials.map((social) => (
        <li key={social.link}>
          <a
            className={s.contactLink}
            href={social.link}
            rel="noreferrer"
            target="_blank"
          >
            {social.logo}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Socials;
