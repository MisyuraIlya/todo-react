// Global
import React, { useState, useEffect } from 'react'
import { Menu, Container, Dropdown, Button, Header, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { useLocation, useRouteMatch } from 'react-router-dom'
import moment from 'moment-timezone';

// Local
import { ROUTES, TIME_ZONES, DATE_TIME_FORMAT } from '../lib/enums';
// Defines
const CLOCK_UPDATE = 1000;

const timezoneOptions = Object
  .entries(TIME_ZONES)
  .map(([key, value], index) => ({ key: index, text: value.name, value: key }));

// Defines
const Navigation = () => {
  const location = useLocation();
  const [timeZone, setTimeZone] = useState(TIME_ZONES.ISRAEL.zone);
  const [nameZone, setTimeZoneName] = useState(TIME_ZONES.ISRAEL.name);
  const [currentTime, setTime] = useState(null);

  const handleTimezoneChange = (key) => {
    setTimeZone(TIME_ZONES[key].zone);
    setTimeZoneName(TIME_ZONES[key].name);
  };

  // Hooks
  useEffect(() => {
    const intervalId = setInterval(() => setTime(moment().tz(timeZone).format(DATE_TIME_FORMAT)), CLOCK_UPDATE);
    return () => clearInterval(intervalId);
  }, [timeZone]);

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
            value={timeZone}
          />
          <Menu.Item>
            <Header as='h5'>{currentTime}</Header>
          </Menu.Item>
          <Menu.Item>
            <Button primary>Sign Up</Button>
          </Menu.Item>
        </Menu.Menu>

      </Container>
    </Menu>
  )
}

export default Navigation;