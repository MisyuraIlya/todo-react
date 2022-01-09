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
import { NavigationProvider } from './state/time-zone';
<<<<<<< HEAD
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import ResetPassword from './pages/ResetPassword';
import { AuthProvider } from './state/auth';
import NewPassword from './pages/NewPassword';
import { useAuth } from './state/auth';
=======
import Signin from './pages/Signin';
import Login from './pages/Login';
import ResetPassword from './pages/ResetPassword';
import { AuthProvider } from './state/auth';
import NewPassword from './pages/NewPassword';

>>>>>>> 18b9e13434d8a2be444eec12da6d8949fb63040b

const App = () => {

  const {LoggedStatus} = useAuth();

  return (
    
    <BrowserRouter>
      <TodoProvider>
        <HistoryProvider>
          <NavigationProvider>
<<<<<<< HEAD

            <Navigation/>
            <Container style={{width:'50em'}}>
              <Switch>
                {/* <Route exact path={ROUTES.HOME.path}>
                  <Home/>
                </Route> */}

                <Route exact path={ROUTES.HOME.path}>
                  {(LoggedStatus == (null || undefined)) ? <Redirect to={ROUTES.SIGNIN.path} /> : <Home/>}
                </Route>

                {/* <Route exact path={ROUTES.HISTORY.path}>
                  <History/>
                </Route> */}

                <Route exact path={ROUTES.HISTORY.path}>
                  {(LoggedStatus == (null || undefined)) ? <Redirect to={ROUTES.SIGNIN.path} /> : <History/>}
                </Route>
=======
            <AuthProvider>
              <Navigation/>

              <Container style={{width:'50em'}}>
                <Switch>
                  <Route exact path={ROUTES.HOME.path}>
                    <Home/>
                  </Route>

                  <Route exact path={ROUTES.HISTORY.path}>
                    <History/>
                  </Route>
>>>>>>> 18b9e13434d8a2be444eec12da6d8949fb63040b

                  <Route exact path={ROUTES.ABOUT.path}>
                    <About/>
                  </Route>

<<<<<<< HEAD
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
=======
                  <Route exact path={ROUTES.SINGIN.path}>
                    <Signin/>
                  </Route>

                  <Route exact path={ROUTES.LOGIN.path}>
                    <Login/>
                  </Route>
>>>>>>> 18b9e13434d8a2be444eec12da6d8949fb63040b

                  <Route exact path={ROUTES.RESETPASSWORD.path}>
                    <ResetPassword/>
                  </Route>

<<<<<<< HEAD
                <Redirect to={ROUTES.ERROR.path}/>
              </Switch>
            </Container>

=======
                  <Route exact path={ROUTES.NEWPASSWORD.path}>
                    <NewPassword/>
                  </Route>

                  <Route path={ROUTES.ERROR.path}>
                    <Error/>
                  </Route>

                  <Redirect to={ROUTES.ERROR.path}/>
                </Switch>
              </Container>
            </AuthProvider>
>>>>>>> 18b9e13434d8a2be444eec12da6d8949fb63040b
          </NavigationProvider>
        </HistoryProvider>
      </TodoProvider>
    </BrowserRouter>
  );
}

export default App;
