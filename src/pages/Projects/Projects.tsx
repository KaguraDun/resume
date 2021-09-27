import React from 'react';

import Project from '@/components/Project/Project';
import { projects } from '@/models/projects';

import s from './Projects.scss';

function Projects() {
  return (
    <div className={s.projects}>
      {projects.map((item) => (
        <ul className={s.itemList}>
          <li className={s.item}>
            <Project item={item} />
          </li>
        </ul>
      ))}
    </div>
  );
}

export default Projects;
