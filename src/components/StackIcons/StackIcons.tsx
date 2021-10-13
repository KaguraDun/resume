import cn from 'classnames';
import React from 'react';

import { StackIcon } from '@/models/stack';

import s from './StackIcons.scss';

interface Props {
  className: string;
  iconsList: StackIcon[];
}

function StackIcons({ className, iconsList }: Props) {
  return (
    <ul className={cn(className, s.iconList)}>
      {iconsList.map((icon) => (
        <li key={icon.name} className={s.icon}>
          {icon.icon}
        </li>
      ))}
    </ul>
  );
}

export default StackIcons;
