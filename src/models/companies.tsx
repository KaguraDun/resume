import React from 'react';

import getPeriod from '@/helpers/getPeriod';
import getTotalExperience from '@/helpers/getTotalExperience';

interface ICompany {
  title: string;
  period: string;
  totalExperience: string;
  site: string;
  about: JSX.Element;
  experience: JSX.Element;
}

const companies = [
  {
    title: 'INOBITEC, Voronezh',
    period: getPeriod(new Date('08-04-2022'), new Date()),
    totalExperience: getTotalExperience(new Date('08-04-2022'), new Date()),
    site: 'www.inobitec.com',
    about: (
      <>
        <p className="font-style-italic">
          Information technologies, system integration, Internet Software
          Development System integration, Automation of technological and
          business processes, IT consulting,
        </p>
      </>
    ),
    experience: (
      <>
        <ol className="list">
          <li>
            Adaptive cross-browser Pixel Perfect makeup, creating components
            based on Figma layouts. (React, Reactstrap, CSS Modules, Formik);
          </li>
          <li>
            Developing new and refining the existing functions and tools of the
            client SPA application to visualize, archive and export medical
            images in DICOM format;
          </li>
          <li>Writing the terms of reference;</li>
          <li>
            Migration and refactoring of the internal library for mathematical
            calculations and interaction with the server from JavaScript to
            Typescript;
          </li>
          <li>Building via webpack;</li>
          <li>Writing unit tests (Jest).</li>
        </ol>
      </>
    ),
  },
];

export default companies;
export type { ICompany };
