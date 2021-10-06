import React from 'react';

import s from './About.scss';

function About() {
  return (
    <div className={s.about}>
      Hello my name is Vasily Kovnev. I am Junior front-end developer. For the
      last year I have been actively studying front-end technologies: HTML, CSS,
      JavaScript, React, Redux, TypeScript and testing.
      <h3>Languages</h3>
      English - B1, Russian - Native.
      <h3>Education</h3>
      <p>
        2013 - 2017 - Bachelor&apos;s Degree Voronezh State Pedagogical
        University
        <br />
        Faculty of Physics and Mathematics - Applied Informatics
        <br />
        <br />
        2017 - 2019 - Master&apos;s Degree Voronezh State University
        <br />
        Faculty of Applied Mathematics and Mechanics - Mathematical foundations
        of computer graphics
        <br />
        <br />
        2019 - Now - PhD Voronezh Institute of High Technologies
        <br />
        Informatics and computer engineering - Management in social and economic
        systems
      </p>
    </div>
  );
}

export default About;
