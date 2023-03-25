import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { IPages } from '@/models/pages';

import Header from '../Header/Header';
import s from './PageGenerator.scss';

interface IPageGenerator {
  pages: IPages[];
}

const PageGenerator = ({ pages }: IPageGenerator) => {
  const places = pages.map((page) => ({
    linkTo: page.linkTo,
    navText: page.navText,
  }));

  return (
    <>
      <Header places={places} />

      <main>
        <Switch>
          {pages.map((page) => (
            <Route key={page.linkTo} exact path={page.linkTo}>
              <div className={s.page}>{page.componentToRender}</div>
            </Route>
          ))}
        </Switch>
      </main>
    </>
  );
};

export default PageGenerator;
