import React from 'react';
import { Link } from 'react-router-dom';

import FrameLogo from '@/icons/socials/frame.svg';
import GithubLogo from '@/icons/socials/github.svg';
import GmailLogo from '@/icons/socials/gmail.svg';
import TelegramLogo from '@/icons/socials/telegram.svg';
import WhatsappLogo from '@/icons/socials/whatsapp.svg';

import Tooltip from '../Tooltip/Tooltip';
import s from './Header.scss';

const Photo = () => (
  <div className={s.photo}>
    <FrameLogo height="60%" width="60%" />
  </div>
);

const copyDataToBuffer = (e) => {
  const data = e.target.value;

  navigator.clipboard.writeText(data);
};

function Header() {
  return (
    <header className={s.header}>
      <Photo />
      <h1 className={s.title}>Vasily Kovnev</h1>
      <h2 className={s.subTitle}>Junior front-end developer</h2>
      <p className={s.location}>Russia, Voronezh</p>
      <address className={s.contacts}>
        <div className={s.iconsRow}>
          <Link
            className={s.contactLink}
            target="_blank"
            to={{ pathname: 'https://github.com/KaguraDun' }}
          >
            <GithubLogo height="40px" width="40px" />
          </Link>

          <Link
            className={s.contactLink}
            target="_blank"
            to={{ pathname: 'https://t.me/KaguraDun' }}
          >
            <TelegramLogo height="35px" width="35px" />
          </Link>
        </div>

        <label className={s.contact}>
          <Tooltip text="Copy email to clipboard">
            <input
              className={s.contactField}
              onClick={copyDataToBuffer}
              readOnly
              type="text"
              value="vasily.kovnev@gmail.com"
            />
          </Tooltip>
          <Link
            className={s.contactLink}
            target="_blank"
            to={{ pathname: 'mailto:vasily.kovnev@gmail.com' }}
          >
            <GmailLogo height="35px" width="35px" />
          </Link>
        </label>
        <label className={s.contact}>
          <Tooltip text="Copy phone to clipboard">
            <input
              className={s.contactField}
              onClick={copyDataToBuffer}
              readOnly
              type="text"
              value="+79507653267"
            />
          </Tooltip>
          <Link
            className={s.contactLink}
            target="_blank"
            to={{ pathname: 'tel:+79507653267' }}
          >
            <WhatsappLogo height="35px" width="35px" />
          </Link>
        </label>
      </address>
    </header>
  );
}

export default Header;
