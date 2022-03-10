import React from 'react';

import Tooltip from '@/components/Tooltip/Tooltip';
import GithubLogo from '@/icons/socials/github.svg';
import GmailLogo from '@/icons/socials/gmail.svg';
import TelegramLogo from '@/icons/socials/telegram.svg';
import WhatsappLogo from '@/icons/socials/whatsapp.svg';

import s from './Socials.scss';

function Socials() {
  const copyDataToBuffer = (clickEvent: React.MouseEvent) => {
    const target = clickEvent.target as HTMLInputElement;
    const data = target.value;

    navigator.clipboard.writeText(data);
  };

  return (
    <address className={s.contacts}>
      <span className={s.location}>Russia, Voronezh</span>

      <div className={s.contact}>
        <a
          className={s.contactLink}
          href="mailto:vasily.kovnev@gmail.com"
          rel="noreferrer"
          target="_blank"
        >
          <GmailLogo height="30px" width="30px" />
        </a>
        <Tooltip text="copy">
          <input
            className={s.contactField}
            onClick={copyDataToBuffer}
            readOnly
            type="text"
            value="vasily.kovnev@gmail.com"
          />
        </Tooltip>
      </div>

      <div className={s.contact}>
        <a
          className={s.contactLink}
          href="tel:+79507653267"
          rel="noreferrer"
          target="_blank"
        >
          <WhatsappLogo height="35px" width="35px" />
        </a>
        <Tooltip text="copy">
          <input
            className={s.contactField}
            onClick={copyDataToBuffer}
            readOnly
            type="text"
            value="+79507653267"
          />
        </Tooltip>
      </div>

      <ul className={s.socials}>
        <li>
          <a
            className={s.contactLink}
            href="https://github.com/KaguraDun"
            rel="noreferrer"
            target="_blank"
          >
            <GithubLogo height="40px" width="40px" />
          </a>
        </li>

        <li>
          <a
            className={s.contactLink}
            href="https://t.me/KaguraDun"
            rel="noreferrer"
            target="_blank"
          >
            <TelegramLogo height="35px" width="35px" />
          </a>
        </li>
      </ul>
    </address>
  );
}

export default Socials;
