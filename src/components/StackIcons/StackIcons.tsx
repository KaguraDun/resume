import React from 'react';

import { StackIcon } from '@/models/stack';

import s from './StackIcons.scss';

interface Props {
  iconsList: StackIcon[];
}

function StackIcons({ iconsList }: Props) {
  return (
    <ul className={s.iconList}>
      {iconsList.map((icon) => (
        <li key={icon.name} className={s.icon}>
          {icon.icon}
        </li>
      ))}
    </ul>
  );
}

export default StackIcons;
