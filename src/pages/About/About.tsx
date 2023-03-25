import cn from 'classnames';
import React from 'react';

import s from './About.scss';

function About() {
  return (
    <section>
      <p className={s.text}>
        Hello my name is Vasily Kovnev. I am front-end developer. I love
        front-end and constantly improve my skills.
        <br />
        My stack: Webpack, HTML5, BEM, PUG, CSS3, SASS, JavaScript, React,
        Redux, TypeScript. Adaptive, responsive, semantic, pixel perfect markup,
        unit testing with jest.
      </p>
      <h2 className={cn(s.heading, 'text-heading-h2')}>Completed courses</h2>
      <ul>
        <li>
          <a
            className="text-link"
            href="https://app.rs.school/certificate/ymyn3b81"
            rel="noreferrer"
            target="_blank"
          >
            RSSchool JS/Front-end
          </a>
        </li>

        <li>
          <a
            className="text-link"
            href="https://app.rs.school/certificate/p45583dx"
            rel="noreferrer"
            target="_blank"
          >
            RSSchool JS/React
          </a>
        </li>
      </ul>
      <h2 className={cn(s.heading, 'text-heading-h2')}>Languages</h2>
      <p className={s.text}>English - B1, Russian - Native.</p>
      <h2 className={cn(s.heading, 'text-heading-h2')}>Education</h2>
      <p className={s.text}>
        2013 - 2017 - Bachelor&apos;s Degree Voronezh State Pedagogical
        University
        <br />
        Faculty of Physics and Mathematics - Applied Informatics
      </p>
      <p className={s.text}>
        2017 - 2019 - Master&apos;s Degree Voronezh State University
        <br />
        Faculty of Applied Mathematics and Mechanics - Mathematical foundations
        of computer graphics
      </p>
      <p className={s.text}>
        2019 - 2022 - PhD Voronezh Institute of High Technologies
        <br />
        Informatics and computer engineering - Management in social and economic
        systems (not completed)
      </p>
    </section>
  );
}

export default About;
