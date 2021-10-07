import React , {  useState } from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Route, Switch, Redirect} from 'react-router-dom';
import {Container} from 'semantic-ui-react'
// Local
import { ROUTES } from './lib/enums';
import Navigation from './components/Navigation';
// Pages
import Home from './pages/Home';
import History from './pages/History';
import About from './pages/About';
import Error from './pages/Error';
import { TodoProvider } from './state/todos';
import { HistoryProvider } from './state/history';
import { NavigationProvider } from './state/navigation';
import Signin from './pages/Signin';
import Login from './pages/Login';


const App = () => {


  return (
    <BrowserRouter>
      <TodoProvider>
        <HistoryProvider>
          <NavigationProvider>
            <Navigation/>

            <Container style={{width:'50em'}}>
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

                <Route exact path={ROUTES.SINGIN.path}>
                  <Signin/>
                </Route>

                <Route exact path={ROUTES.LOGIN.path}>
                  <Login/>
                </Route>

                <Route path={ROUTES.ERROR.path}>
                  <Error/>
                </Route>

                <Redirect to={ROUTES.ERROR.path}/>
              </Switch>
            </Container>
          </NavigationProvider>
        </HistoryProvider>
      </TodoProvider>
    </BrowserRouter>
  );
}

export default App;
