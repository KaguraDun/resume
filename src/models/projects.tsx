/* eslint-disable global-require */
import React from 'react';

import { stack, StackIcon } from '@/models/stack';

interface ProjectInterface {
  thumbnail: string;
  stackIcons?: StackIcon[];
  name: string;
  deploy: string;
  git: string;
  about: JSX.Element;
}

const projects: ProjectInterface[] = [
  {
    thumbnail: require('../images/projects/songster-clone/1.png'),
    stackIcons: [stack.js, stack.sass],
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
          <li>You can change instruments and print staff.</li>
          <li>Also it has a library of already uploaded compositions.</li>
        </ul>
      </>
    ),
  },
  {
    thumbnail: require('../images/projects/covid-19-dashboard/1.png'),
    stackIcons: [stack.js, stack.sass],
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
  {
    thumbnail: require('../images/projects/css-dinner/1.png'),
    stackIcons: [stack.js, stack.sass],
    name: 'CSS Dinner',
    deploy:
      'https://rolling-scopes-school.github.io/kaguradun-JS2020Q3/rs-css/',
    git: 'https://github.com/KaguraDun/rolling-scopes-school/tree/rs-css/rs-css/webpack-boilerplate-master',
    about: (
      <>
        Interactive css trainer. The simulator consists of several game levels.
        Each level includes an example of the layout and html code corresponding
        to the current level. Some elements of the layout are highlighted with
        animation. It is up to the user to write a CSS selector that matches all
        of the selected layout elements.
        <br />
        App created during RSSchool JavaScript/Front-end course
      </>
    ),
  },
  {
    thumbnail: require('../images/projects/gem-puzzle/1.png'),
    stackIcons: [stack.js, stack.sass],
    name: 'Gem puzzle',
    deploy:
      'https://rolling-scopes-school.github.io/kaguradun-JS2020Q3/gem-puzzle/',
    git: 'https://github.com/KaguraDun/rolling-scopes-school/tree/gem-puzzle/gem-puzzle/webpack-boilerplate-master',
    about: (
      <>
        Gem puzzle with different field sizes and best results table.
        <br />
        App created during RSSchool JavaScript/Front-end course
      </>
    ),
  },
  {
    thumbnail: require('../images/projects/virtual-keyboard/1.png'),
    stackIcons: [stack.js],
    name: 'Virtual keyboard',
    deploy:
      'https://rolling-scopes-school.github.io/kaguradun-JS2020Q3/virtual-keyboard/',
    git: 'https://github.com/KaguraDun/rolling-scopes-school/tree/virtual-keyboard/virtual-keyboard',
    about: (
      <>
        Virtual keyboard with speech recognition and awesome voice acting.
        <br />
        App created during RSSchool JavaScript/Front-end course
      </>
    ),
  },
  {
    thumbnail: require('../images/projects/shelter/1.png'),
    stackIcons: [],
    name: 'Shelter',
    deploy:
      'https://rolling-scopes-school.github.io/kaguradun-JS2020Q3/shelter/pages/main/main.html',
    git: 'https://github.com/KaguraDun/rolling-scopes-school/tree/shelter',
    about: (
      <>
        Simple two page website
        <br />
        App created during RSSchool JavaScript/Front-end course
      </>
    ),
  },
  {
    thumbnail: require('../images/projects/momentum/1.png'),
    stackIcons: [stack.js],
    name: 'Momentum',
    deploy:
      'https://rolling-scopes-school.github.io/kaguradun-JS2020Q3/momentum/',
    git: 'https://github.com/KaguraDun/rolling-scopes-school/tree/momentum',
    about: (
      <>
        Momentum is an analogue of the app of the same name in the Chrome web
        store. The application shows the time and username, his goal for the
        current day. The background image changes depending on the time of day.
        It also features quotes from famous people and the weather forecast.
        <br />
        App created during RSSchool JavaScript/Front-end course
      </>
    ),
  },
  {
    thumbnail: require('../images/projects/calculator/1.png'),
    stackIcons: [stack.js],
    name: 'Calculator',
    deploy:
      'https://rolling-scopes-school.github.io/kaguradun-JS2020Q3/calculator/',
    git: 'https://github.com/KaguraDun/rolling-scopes-school/tree/calculator',
    about: (
      <>
        Calculator with basic functions.
        <br />
        App created during RSSchool JavaScript/Front-end course
      </>
    ),
  },
];

export { projects };
export type { ProjectInterface };
