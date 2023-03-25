import cn from 'classnames';
import React from 'react';

import avatar from '@/images/avatar.png';

import Socials from '../Socials/Socials';
import s from './Contacts.scss';

function Contacts() {
  return (
    <article className={s.contacts}>
      <img alt="avatar" className={s.photo} src={avatar} />

      <h1 className={cn(s.title, 'text-heading-h1')}>
        Vasily Kovnev
        <br />
        <span className={cn(s.title, 'text-subheading')}>
          Front-end developer
        </span>
      </h1>

      <Socials />
    </article>
  );
}

export default Contacts;
