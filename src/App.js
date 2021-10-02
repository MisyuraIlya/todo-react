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
import LoadingContext from './state/Context';
import { TodoProvider } from './state/todos';


const App = () => {
  const [loading, setLoading] = useState(false);


  return (
    <BrowserRouter>
      <TodoProvider>
        <LoadingContext.Provider value={{loading, setLoading}}>
          <Navigation/>

          <Container>
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

              <Route path={ROUTES.ERROR.path}>
                <Error/>
              </Route>

              <Redirect to={ROUTES.ERROR.path}/>
            </Switch>
          </Container>
        </LoadingContext.Provider>
      </TodoProvider>
    </BrowserRouter>
  );
}

export default App;
