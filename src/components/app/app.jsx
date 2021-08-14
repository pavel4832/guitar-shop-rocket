import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {AppRoute} from '../../const';
import CatalogScreen from '../catalog-screen/catalog-screen';
import ErrorScreen from '../error-screen/error-screen';
import BasketScreen from '../basket-screen/basket-screen';
import Header from '../header/header';
import Footer from '../footer/footer';

const App = () => {

  return (
    <>
      <Header />
      <Switch>
        <Route
          exact
          path={AppRoute.ROOT}
          render={() => <CatalogScreen />}
        />
        <Route
          exact
          path={AppRoute.BASKET}
          render={() => <BasketScreen />}
        />
        <Route>
          <ErrorScreen />
        </Route>
      </Switch>
      <Footer />
    </>
  );
};

export default App;
