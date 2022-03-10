import React from 'react';

import s from './About.scss';

function About() {
  return (
    <section className={s.about}>
      <p className={s.text}>
        Hello my name is Vasily Kovnev. I am front-end developer. My stack:
        HTML5, BEM, PUG, CSS3, SASS, JavaScript, React, Redux, TypeScript, Git,
        and unit testing.
      </p>
      <h2 className={s.heading}>Languages</h2>
      <p className={s.text}>English - B1, Russian - Native.</p>
      <h2 className={s.heading}>Education</h2>
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
