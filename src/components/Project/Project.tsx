/* eslint-disable react/no-danger */
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
      <StackIcons className={s.stackIcons} iconsList={item.stackIcons} />
      <div className={s.info}>
        <h3 className={s.name}>{item.name}</h3>
        <div className={s.linksWrapper}>
          <a
            className={s.link}
            href={item.deploy}
            rel="noreferrer"
            target="_blank"
          >
            Try online
            <ExternalLinkIcon height="30px" width="30px" />
          </a>
          <a
            className={s.link}
            href={item.git}
            rel="noreferrer"
            target="_blank"
          >
            Source code
            <GithubLogo height="30px" width="30px" />
          </a>
        </div>

        <div className={s.about}>{item.about}</div>
      </div>
    </article>
  );
}

export default Project;
