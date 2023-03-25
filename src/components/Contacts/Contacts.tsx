import cn from 'classnames';
import React from 'react';

import Tooltip from '@/components/Tooltip/Tooltip';
import GmailLogo from '@/icons/socials/gmail.svg';
import WhatsappLogo from '@/icons/socials/whatsapp.svg';
import avatar from '@/images/avatar.png';

import Socials from '../Socials/Socials';
import s from './Contacts.scss';

function Contacts() {
  const copyDataToBuffer = (clickEvent: React.MouseEvent) => {
    const target = clickEvent.target as HTMLInputElement;
    const data = target.value;

    navigator.clipboard.writeText(data);
  };

  return (
    <article className={s.contactsWrapper}>
      <img alt="avatar" className={s.photo} src={avatar} />

      <h1 className={cn(s.title, 'text-heading-h1')}>
        Vasily Kovnev
        <br />
        <span className={cn(s.title, 'text-subheading')}>
          Front-end developer
        </span>
      </h1>

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
      </address>

      <Socials />
    </article>
  );
}

export default Contacts;
