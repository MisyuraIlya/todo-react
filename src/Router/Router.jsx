//Global
import React from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';

// Local
import {ROUTES} from '../lib/enums';
import Home from '../pages/Home';
import History from '../pages/History';
import About from '../pages/About';
import Error from '../pages/Error';



const Router = () => {
  return (
    <div>
      <Switch>

        <Route exact path={ROUTES.HOME.path}>
          <Home/>
        </Route>

        <Route exact path={ROUTES.HISTORY.path}>
          <History/>
        </Route>

        <Route exact path={ROUTES.ABOUT.path}>
          <About/>
        </Route>

        <Route path='/error'>
          <Error/>
        </Route>

        <Redirect to='/error'/>

      </Switch>
    </div>
  );
};

export default Router;