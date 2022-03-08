import React from 'react';

import s from './Footer.scss';

function Footer() {
  const currentYear = new Date().getFullYear();

  return <footer className={s.footer}>Vasily Kovnev - {currentYear}</footer>;
}

export default Footer;
