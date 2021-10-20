// Global
import React from 'react'
import { Menu, Container, Dropdown, Button, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import Cookies from 'js-cookie'

// Local
import { ROUTES } from '../lib/enums';
import { useNav } from '../state/time-zone'

// Defines
const Navigation = () => {
  //states
  const location = useLocation();
  const { timeZone, nameZone, currentTime, methods, timezoneOptions } = useNav();
  const user = Cookies.get('user')

  //helpers
  const handleTimezoneChange = (key) => {
    methods.handleTimezoneChange(key);
  }

  const cookieRemove = () => {
    Cookies.remove('user')
  }

  const authBar =
    <Menu.Item>
      <Button primary as={Link} to={ROUTES.SINGIN.path} style={{ marginLeft: '0.9em' }}>Sign in</Button>
      <Button primary as={Link} to={ROUTES.LOGIN.path} style={{ marginLeft: '0.9em' }}>Log in</Button>
    </Menu.Item>

  const cookieBar =
    <Menu.Item>
      {/* <Header as='h5' >Welcome {user}</Header> */}
      <Button primary onClick={cookieRemove} style={{ marginLeft: '0.9em' }}>Log out</Button>
    </Menu.Item>
  return (
    <Menu >
      <Container>
        <Menu.Item
          as={Link}
          to={ROUTES.HOME.path}
          name={ROUTES.HOME.name}
          active={location.pathname === ROUTES.HOME.path}
        >
          {ROUTES.HOME.name}
        </Menu.Item>

        <Menu.Item
          as={Link}
          to={ROUTES.HISTORY.path}
          name={ROUTES.HISTORY.name}
          active={location.pathname === ROUTES.HISTORY.path}
        >
          {ROUTES.HISTORY.name}
        </Menu.Item>

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
          {user ? cookieBar : authBar}
        </Menu.Menu>

      </Container>
    </Menu>
  )
}

export default Navigation;