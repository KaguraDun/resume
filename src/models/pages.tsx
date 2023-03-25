import React from 'react';

import About from '@/pages/About/About';
import Projects from '@/pages/Projects/Projects';
import WorkExperience from '@/pages/WorkExperience/WorkExperience';

interface IPages {
  linkTo: string;
  navText: string;
  componentToRender: JSX.Element;
}

const pages = [
  {
    linkTo: '/',
    navText: 'About',
    componentToRender: <About />,
  },
  {
    linkTo: '/work',
    navText: 'Work experience',
    componentToRender: <WorkExperience />,
  },
  {
    linkTo: '/educational',
    navText: 'Educational Projects',
    componentToRender: <Projects />,
  },
];

export default pages;
export type { IPages };
