import React from 'react';
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
import { NavigationProvider } from './state/time-zone';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import ResetPassword from './pages/ResetPassword';
import NewPassword from './pages/NewPassword';
import { useAuth } from './state/auth';
import VerifyEmail from './pages/VerifyEmail';


const App = () => {

  const {LoggedStatus} = useAuth();

  return (
    
    <BrowserRouter>
      <TodoProvider>
        <HistoryProvider>
          <NavigationProvider>

            <Navigation/>
            <Container style={{width:'50em'}}>
              <Switch>

                <Route exact path={ROUTES.HOME.path}>
                  {(LoggedStatus == (null || undefined)) ? <Redirect to={ROUTES.SIGNIN.path} /> : <Home/>}
                </Route>

                <Route exact path={ROUTES.HISTORY.path}>
                  {(LoggedStatus == (null || undefined)) ? <Redirect to={ROUTES.SIGNIN.path} /> : <History/>}
                </Route>


                <Route exact path={ROUTES.ABOUT.path}>
                  <About/>
                </Route>

                <Route exact path={ROUTES.SIGNUP.path}>
                  {(LoggedStatus != (null || undefined)) ? <Redirect to={ROUTES.HOME.path} /> : <SignUp/>}
                </Route>

                <Route exact path={ROUTES.SIGNIN.path}>
                  {(LoggedStatus != (null || undefined)) ? <Redirect to={ROUTES.HOME.path} /> : <SignIn/>}
                </Route>

                <Route exact path={ROUTES.RESETPASSWORD.path}>
                  <ResetPassword/>
                </Route>

                <Route exact path={ROUTES.NEWPASSWORD.path}>
                  <NewPassword/>
                </Route>

                <Route exact path={ROUTES.VERIFYEMAIL.path}>
                  <VerifyEmail/>
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
