import React from 'react';

import CssIcon from '@/icons/stack/css3.svg';
import JSIcon from '@/icons/stack/javascript.svg';
import PugIcon from '@/icons/stack/pug.svg';
import ReactIcon from '@/icons/stack/react-wordmark.svg';
import ReduxIcon from '@/icons/stack/redux.svg';
import SassIcon from '@/icons/stack/sass.svg';
import Socketio from '@/icons/stack/socketio.svg';
import TSIcon from '@/icons/stack/typescript.svg';

const stack = {
  pug: {
    icon: <PugIcon />,
    name: 'Pug',
  },
  js: {
    icon: <JSIcon />,
    name: 'JavaScript',
  },
  ts: {
    icon: <TSIcon />,
    name: 'TypeScript',
  },
  react: {
    icon: <ReactIcon />,
    name: 'React',
  },
  redux: {
    icon: <ReduxIcon />,
    name: 'Redux',
  },
  css: {
    icon: <CssIcon />,
    name: 'Css',
  },
  sass: {
    icon: <SassIcon />,
    name: 'Sass',
  },
  socketio: {
    icon: <Socketio />,
    name: 'Socketio',
  },
};

interface StackIcon {
  icon: JSX.Element;
  name: string;
}

export { stack };
export type { StackIcon };
