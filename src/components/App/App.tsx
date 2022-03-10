import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Contacts from '@/components/Contacts/Contacts';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import About from '@/pages/About/About';
import Projects from '@/pages/Projects/Projects';

import s from './App.scss';

const App = () => (
  <>
    <div className={s.container}>
      <div className={s.row}>
        <div className={s.headerContainer}>
          <Contacts />
        </div>

        <div className={s.contentWrapper}>
          <Header />

          <main>
            <Switch>
              <Route exact path="/">
                <About />
              </Route>
              <Route exact path="/projects">
                <Projects />
              </Route>
            </Switch>
          </main>
        </div>
      </div>
    </div>

    <Footer />
  </>
);

export default App;
