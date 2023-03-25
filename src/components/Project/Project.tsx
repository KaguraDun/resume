import cn from 'classnames';
import React from 'react';

import StackIcons from '@/components/StackIcons/StackIcons';
import ExternalLinkIcon from '@/icons/external-link.svg';
import GithubLogo from '@/icons/socials/github.svg';
import { ProjectInterface } from '@/models/projects';

import s from './Project.scss';

interface Props {
  item: ProjectInterface;
}

function Project({ item }: Props) {
  return (
    <article className={s.project}>
      <div className={s.thumbnail}>
        <img alt={item.name} className={s.thumbnailImg} src={item.thumbnail} />
      </div>

      <div className={s.stackIcons}>
        <StackIcons iconsList={item.stackIcons} />
      </div>

      <div className={s.info}>
        <h2 className={cn(s.name, 'text-heading-h2')}>{item.name}</h2>
        <div className={s.linksWrapper}>
          <a
            className={cn(s.link, 'text-external-link')}
            href={item.deploy}
            rel="noreferrer"
            target="_blank"
          >
            Try online
            <ExternalLinkIcon height="15px" width="15px" />
          </a>
          <a
            className={cn(s.link, 'text-external-link')}
            href={item.git}
            rel="noreferrer"
            target="_blank"
          >
            Source code
            <GithubLogo height="20px" width="20px" />
          </a>
        </div>

        <div className={s.about}>{item.about}</div>
      </div>
    </article>
  );
}

export default Project;
