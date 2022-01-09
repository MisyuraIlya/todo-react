// Global
import React from 'react'
import { Menu, Container, Dropdown, Button, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom'

// Local
import { ROUTES } from '../lib/enums';
import { useNav } from '../state/time-zone'
import { useAuth } from '../state/auth';

// Defines
const Navigation = () => {
  //states
  const location = useLocation();
  const { timeZone, nameZone, currentTime, methods, timezoneOptions } = useNav();
  const {LoggedStatus, methodsAuth} = useAuth();
  //helpers
  const handleTimezoneChange = (key) => {
    methods.handleTimezoneChange(key);
  }
  const authBar =
    <Menu.Item>
      <Button primary as={Link} to={ROUTES.SIGNUP.path} style={{ marginLeft: '0.9em' }}>Sign up</Button>
      <Button primary as={Link} to={ROUTES.SIGNIN.path} style={{ marginLeft: '0.9em' }}>Sign in</Button>
    </Menu.Item>

  const cookieBar =
    <Menu.Item>
      <Button primary onClick={() => methodsAuth.logOut()} style={{ marginLeft: '0.9em' }}>Log out</Button>
    </Menu.Item>

  const AuthName = 
    <Menu.Item>
      <Header as='h5'>Welcome {LoggedStatus}</Header>
    </Menu.Item>
    
  return (
    
    <Menu >
      <Container>
        {(LoggedStatus == (null || undefined) ? null : 
          <Menu.Item
            as={Link}
            to={ROUTES.HOME.path}
            name={ROUTES.HOME.name}
            active={location.pathname === ROUTES.HOME.path}
          >
            {ROUTES.HOME.name}
          </Menu.Item>)}

        {(LoggedStatus == (null || undefined) ? null : 
          <Menu.Item
            as={Link}
            to={ROUTES.HISTORY.path}
            name={ROUTES.HISTORY.name}
            active={location.pathname === ROUTES.HISTORY.path}
          >
            {ROUTES.HISTORY.name}
          </Menu.Item>)}

        <Menu.Item
          as={Link}
          to={ROUTES.ABOUT.path}
          name={ROUTES.ABOUT.name}
          active={location.pathname === ROUTES.ABOUT.path}
        >
          {ROUTES.ABOUT.name}
        </Menu.Item>

        <Menu.Menu position='right'>

          <Dropdown
            item
            text={nameZone}
            onChange={(_, { value }) => handleTimezoneChange(value)}
            options={timezoneOptions}
            placeholder='Choose a Zone'
          />
          <Menu.Item>
            <Header as='h5'>{currentTime}</Header>
          </Menu.Item>
          {LoggedStatus != null ? AuthName : null}
          {LoggedStatus != null ? cookieBar : authBar}
        </Menu.Menu>

      </Container>
    </Menu>
  )
}

export default Navigation;