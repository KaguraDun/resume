import React from 'react';

import avatar from '@/images/avatar.jpg';

import Socials from '../Socials/Socials';
import s from './Contacts.scss';

function Contacts() {
  return (
    <article className={s.contacts}>
      <img alt="avatar" className={s.photo} src={avatar} />

      <h1 className={s.title}>
        Vasily Kovnev
        <br />
        <span className={s.subTitle}>Front-end developer</span>
      </h1>

      <Socials />
    </article>
  );
}

export default Contacts;
