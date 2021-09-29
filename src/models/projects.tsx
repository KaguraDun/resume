/* eslint-disable global-require */
import React from 'react';

interface ProjectInterface {
  thumbnail: string;
  name: string;
  deploy: string;
  git: string;
  about: JSX.Element;
}

const projects: ProjectInterface[] = [
  {
    thumbnail: require('../images/projects/songster-clone/1.png'),
    name: 'Songster clone',
    deploy: 'https://kaguradun.github.io/songster-clone/',
    git: 'https://github.com/KaguraDun/songster-clone',
    about: (
      <>
        Songster-clone is a clone of popular site with guitar tablatures:
        songsterr. App created as final task of RSSchool JavaScript/Front-end
        course in team of 4 members. Main features:
        <br />
        <ul>
          <li>
            You can upload any midi file, our app convert it to five line staff
            and then you watch notes and listen music.
          </li>
          <li>
            You can upload any midi file, our app convert it to five line staff
            and then you watch notes and listen music.
          </li>
          <li>You can change instruments and print staff.</li>
          <li>Also it has a library of already uploaded compositions.</li>
        </ul>
      </>
    ),
  },
  {
    thumbnail: require('../images/projects/covid-19-dashboard/1.png'),
    name: 'Covid 19 dashboard',
    deploy:
      'https://rolling-scopes-school.github.io/zavrazhneva-JS2020Q3/covid-19/',
    git: 'https://github.com/Zavrazhneva/covid-19',
    about: (
      <>
        Interactive map with various covid statistics and its visualization.
        <br />
        App created during RSSchool JavaScript/Front-end course in team of 4
        members
      </>
    ),
  },
  },
];

export { projects };
export type { ProjectInterface };
