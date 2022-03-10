import React from 'react';

import Project from '@/components/Project/Project';
import { projects } from '@/models/projects';

import s from './Projects.scss';

function Projects() {
  return (
    <section className={s.projects}>
      <ul className={s.itemList}>
        {projects.map((item) => (
          <li key={item.name} className={s.item}>
            <Project item={item} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;
