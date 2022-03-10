import React from 'react';

import FrameLogo from '@/icons/socials/frame.svg';

import Socials from '../Socials/Socials';
import s from './Contacts.scss';

const Photo = () => (
  <div className={s.photo}>
    <FrameLogo height="60%" width="60%" />
  </div>
);

function Contacts() {
  return (
    <article className={s.contacts}>
      <Photo />

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
