import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '@/components/Header/Header';
import Navigation from '@/components/Navigation/Navigation';
import About from '@/pages/About/About';
import Projects from '@/pages/Projects/Projects';

import Footer from '../Footer/Footer';
import s from './App.scss';

const App = () => (
  <>
    <div className={s.container}>
      <div className={s.row}>
        <Header />
        <div className={s.contentWrapper}>
          <Navigation />
          <Switch>
            <Route exact path="/">
              <About />
            </Route>
            <Route exact path="/projects">
              <Projects />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
    <Footer />
  </>
);

export default App;
