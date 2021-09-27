import React from 'react';

import s from './Tooltip.scss';

interface Props {
  text: string;
  children: React.ReactNode;
}

function Tooltip({ text, children }: Props) {
  return (
    <div className={s.tooltip}>
      <span className={s.text}>{text}</span>
      {children}
    </div>
  );
}

export default Tooltip;
