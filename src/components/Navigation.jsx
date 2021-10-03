// Global
import React, { useState } from 'react'
import { Menu, Container, Dropdown, Button, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { useLocation, useRouteMatch } from 'react-router-dom'
import moment from 'moment'
// Local
import { ROUTES } from '../lib/enums';
// Defines

const Navigation = () => {
  const location = useLocation();
  
  let time = moment().format('h:mm:ss, DD.MM.YYYY' );
  let [currentTime, changeTime] = useState(time)

  function checkTime() {
    time = moment().format('h:mm:ss, DD.MM.YYYY' );
    changeTime(time);
  }
  setInterval(checkTime, 1000);

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
          <Menu.Item>
            <Header as='h5' onChange={checkTime}>{currentTime}</Header>
          </Menu.Item>
          <Dropdown item text='Time Zone'>
            <Dropdown.Menu>
              <Dropdown.Item>ISRAEL</Dropdown.Item>
              <Dropdown.Item>MOSCOW </Dropdown.Item>
              <Dropdown.Item>NEW YORK</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Menu.Item>
            <Button primary>Sign Up</Button>
          </Menu.Item>
        </Menu.Menu>

      </Container>
    </Menu>
  )
}

export default Navigation;