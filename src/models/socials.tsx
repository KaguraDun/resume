import React from 'react';

import GithubLogo from '@/icons/socials/github.svg';
import LinkedInLogo from '@/icons/socials/linkedin.svg';
import TelegramLogo from '@/icons/socials/telegram.svg';

interface ISocials {
  logo: JSX.Element;
  link: string;
}

const socials = [
  {
    logo: <LinkedInLogo height="40px" viewBox="0 0 72 72" width="40px" />,
    link: 'https://www.linkedin.com/in/vasily-kovnev-63bb30225/',
  },
  {
    logo: <GithubLogo height="40px" width="40px" />,
    link: 'https://github.com/KaguraDun',
  },
  {
    logo: <TelegramLogo height="35px" width="35px" />,
    link: 'https://t.me/KaguraDun',
  },
];

export default socials;
export type { ISocials };
