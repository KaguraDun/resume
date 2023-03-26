import cn from 'classnames';
import React from 'react';

import s from './About.scss';

function About() {
  return (
    <section>
      <p className={s.text}>
        Hello my name is Vasily Kovnev. I am front-end developer. I love
        teamwork. Actively working on soft and hard skills. Enthusiastic about
        learning new technologies.
      </p>
      <h2 className={cn(s.heading, 'text-heading-h2')}>Stack</h2>
      <p className={s.text}>
        React, Redux, Redux Toolkit, TypeScript, JavaScript, HTML5, BEM, PUG,
        CSS3, SASS, Git, Jest, React testing library, webpack.
      </p>
      <h2 className={cn(s.heading, 'text-heading-h2')}>Completed courses</h2>
      <ul className="list">
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
        <b>2019</b> - <b>2022</b> - PhD Voronezh Institute of High Technologies
        <br />
        Informatics and computer engineering - Management in social and economic
        systems (not completed)
      </p>
      <p className={s.text}>
        <b>2017</b> - <b>2019</b> - Master&apos;s Degree Voronezh State
        University
        <br />
        Faculty of Applied Mathematics and Mechanics - Mathematical foundations
        of computer graphics
      </p>
      <p className={s.text}>
        <b>2013</b> - <b>2017</b> - Bachelor&apos;s Degree Voronezh State
        Pedagogical University
        <br />
        Faculty of Physics and Mathematics - Applied Informatics
      </p>
    </section>
  );
}

export default About;
