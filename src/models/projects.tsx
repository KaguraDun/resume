import React from 'react';

import { stack, StackIcon } from '@/models/stack';

interface ProjectInterface {
  thumbnail: string;
  stackIcons?: StackIcon[];
  name: string;
  deploy: string;
  git: string;
  lastUpdate: string;
  about: JSX.Element;
  video?: string;
}

const projects: ProjectInterface[] = [
  {
    thumbnail: require('../../public/images/projects/slider-plugin/1.png'),
    stackIcons: [stack.ts, stack.sass, stack.pug, stack.jest],
    name: 'Slider plugin',
    deploy: 'https://kd-slider-plugin.netlify.app/example',
    git: 'https://github.com/KaguraDun/slider-plugin',
    lastUpdate: 'Feb 2022',
    about: (
      <>
        <p>
          Jquery slider plugin with handy API, MVP architecture, Observer
          pattern and Typescript. Code covered by unit tests.
        </p>
        <p>App created as second task of Metalamp educational program.</p>
      </>
    ),
  },
  {
    thumbnail: require('../../public/images/projects/toxin-markup/1.png'),
    stackIcons: [stack.js, stack.sass, stack.pug],
    name: 'Toxin markup',
    deploy: 'https://kd-toxin-markup.netlify.app/',
    git: 'https://github.com/KaguraDun/toxin-markup',
    lastUpdate: 'Mar 2022',
    about: (
      <>
        <p>
          Hotel website layout, 6 pages in total plus 3 UIkit pages. Pixel
          perfect, BEM, component approach, responsive layout.
        </p>
        <p>App created as first task of Metalamp educational program.</p>
      </>
    ),
  },
  {
    thumbnail: require('../../public/images/projects/pointing-poker/1.png'),
    stackIcons: [
      stack.ts,
      stack.react,
      stack.sass,
      stack.redux,
      stack.socketio,
    ],
    name: 'Pointing poker',
    deploy: 'https://scrum-planning-poker.netlify.app/',
    git: 'https://github.com/KaguraDun/pointing-poker/tree/develop',
    lastUpdate: 'Oct 2021',
    video: "https://www.youtube.com/watch?v=tXLbud8cQZ8",
    about: (
      <>
        <p>
          Scrum poker application for labor estimation. It&apos;s supports
          multiple games at the same time, multiple decks and game chat.
        </p>
        <p>
          App created as final task of RSSchool React course in team of 2
          members.
        </p>
        <p>I worked at:</p>
        <ul>
          <li>Express server;</li>
          <li>
            Communication between client and express server with socket.io;
          </li>
          <li>User interface;</li>
          <li>Chat;</li>
          <li>Game mechanics;</li>
        </ul>
      </>
    ),
  },
  {
    thumbnail: require('../../public/images/projects/songster-clone/1.png'),
    stackIcons: [stack.js, stack.sass],
    name: 'Songster clone',
    deploy: 'https://kaguradun.github.io/songster-clone/',
    git: 'https://github.com/KaguraDun/songster-clone',
    lastUpdate: 'Feb 2021',
    video: "https://www.youtube.com/watch?v=EYY83mSPAmM",
    about: (
      <>
        <p>
          Songster-clone is a clone of popular site with guitar tablatures:
          songsterr.
        </p>
        <p>
          App created as final task of RSSchool JavaScript/Front-end course in
          team of 4 members.
        </p>
        <p>I worked at:</p>
        <ul>
          <li>User interface;</li>
          <li>Music player functionality;</li>
        </ul>
      </>
    ),
  },
  {
    thumbnail: require('../../public/images/projects/covid-19-dashboard/1.png'),
    stackIcons: [stack.js, stack.sass],
    name: 'Covid 19 dashboard',
    deploy:
      'https://rolling-scopes-school.github.io/zavrazhneva-JS2020Q3/covid-19/',
    git: 'https://github.com/Zavrazhneva/covid-19',
    lastUpdate: 'Dec 2020',
    about: (
      <>
        <p>
          Interactive map with various covid statistics and its visualization.
        </p>
        <p>
          App created during RSSchool JavaScript/Front-end course in team of 4
          members.
        </p>
        <p>I worked at:</p>
        <ul>
          <li>Data visualization by Chart.js;</li>
        </ul>
      </>
    ),
  },
  {
    thumbnail: require('../../public/images/projects/css-dinner/1.png'),
    stackIcons: [stack.js, stack.sass],
    name: 'CSS Dinner',
    deploy:
      'https://rolling-scopes-school.github.io/kaguradun-JS2020Q3/rs-css/',
    git: 'https://github.com/KaguraDun/rolling-scopes-school/tree/rs-css/rs-css/webpack-boilerplate-master',
    lastUpdate: 'Dec 2020',
    about: (
      <>
        <p>
          Interactive css trainer. The simulator consists of several game
          levels. Each level includes an example of the layout and html code
          corresponding to the current level. Some elements of the layout are
          highlighted with animation. It is up to the user to write a CSS
          selector that matches all of the selected layout elements.
        </p>
        <p>App created during RSSchool JavaScript/Front-end course</p>
      </>
    ),
  },
  {
    thumbnail: require('../../public/images/projects/gem-puzzle/1.png'),
    stackIcons: [stack.js, stack.sass],
    name: 'Gem puzzle',
    deploy:
      'https://rolling-scopes-school.github.io/kaguradun-JS2020Q3/gem-puzzle/',
    git: 'https://github.com/KaguraDun/rolling-scopes-school/tree/gem-puzzle/gem-puzzle/webpack-boilerplate-master',
    lastUpdate: 'Nov 2020',
    about: (
      <>
        <p>Gem puzzle with different field sizes and best results table.</p>
        <p>App created during RSSchool JavaScript/Front-end course</p>
      </>
    ),
  },
  {
    thumbnail: require('../../public/images/projects/virtual-keyboard/1.png'),
    stackIcons: [stack.js, stack.css],
    name: 'Virtual keyboard',
    deploy:
      'https://rolling-scopes-school.github.io/kaguradun-JS2020Q3/virtual-keyboard/',
    git: 'https://github.com/KaguraDun/rolling-scopes-school/tree/virtual-keyboard/virtual-keyboard',
    lastUpdate: 'Nov 2020',
    about: (
      <>
        <p>
          Virtual keyboard with speech recognition and awesome voice acting.
        </p>
        <p>App created during RSSchool JavaScript/Front-end course</p>
      </>
    ),
  },
  {
    thumbnail: require('../../public/images/projects/shelter/1.png'),
    stackIcons: [stack.css],
    name: 'Shelter',
    deploy:
      'https://rolling-scopes-school.github.io/kaguradun-JS2020Q3/shelter/pages/main/main.html',
    git: 'https://github.com/KaguraDun/rolling-scopes-school/tree/shelter',
    lastUpdate: 'Oct 2020',
    about: (
      <>
        <p>Simple two page website.</p>
        <p>App created during RSSchool JavaScript/Front-end course.</p>
      </>
    ),
  },
  {
    thumbnail: require('../../public/images/projects/momentum/1.png'),
    stackIcons: [stack.js, stack.css],
    name: 'Momentum',
    deploy:
      'https://rolling-scopes-school.github.io/kaguradun-JS2020Q3/momentum/',
    git: 'https://github.com/KaguraDun/rolling-scopes-school/tree/momentum',
    lastUpdate: 'Oct 2020',
    about: (
      <>
        <p>
          Momentum is an analogue of the app of the same name in the Chrome web
          store. The application shows the time and username, his goal for the
          current day. The background image changes depending on the time of
          day. It also features quotes from famous people and the weather
          forecast.
        </p>
        <p>App created during RSSchool JavaScript/Front-end course.</p>
      </>
    ),
  },
  {
    thumbnail: require('../../public/images/projects/calculator/1.png'),
    stackIcons: [stack.js, stack.css],
    name: 'Calculator',
    deploy:
      'https://rolling-scopes-school.github.io/kaguradun-JS2020Q3/calculator/',
    git: 'https://github.com/KaguraDun/rolling-scopes-school/tree/calculator',
    lastUpdate: 'Oct 2020',
    about: (
      <p>
        Calculator with basic functions. App created during RSSchool
        JavaScript/Front-end course.
      </p>
    ),
  },
];

export { projects };
export type { ProjectInterface };
