// Global
import React from 'react'
import { Menu, Container } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { useLocation, useRouteMatch } from 'react-router-dom'
// Local
import { ROUTES } from '../lib/enums';
// Defines

const Navigation = () => {
  const location = useLocation();

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

      </Container>
    </Menu>
  )
}

export default Navigation;