import '@/styles/index.scss';

import React from 'react';

import Contacts from '@/components/Contacts/Contacts';
import Footer from '@/components/Footer/Footer';
import pages from '@/models/pages';

import PageGenerator from '../PageGenerator/PageGenerator';
import s from './App.scss';

const App = () => (
  <>
    <div className={s.container}>
      <div className={s.row}>
        <div className={s.headerContainer}>
          <Contacts />
        </div>

        <div className={s.contentWrapper}>
          <PageGenerator pages={pages} />
        </div>
      </div>
    </div>

    <Footer />
  </>
);

export default App;
