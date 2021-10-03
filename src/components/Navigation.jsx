// Global
import React, { useState } from 'react'
import { Menu, Container, Dropdown, Button, Header, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { useLocation, useRouteMatch } from 'react-router-dom'
// import moment from 'moment'
import moment from 'moment-timezone';

// Local
import { ROUTES } from '../lib/enums';
// Defines


const options = [
  { key: 1, text: 'Israel', value: moment.tz('Asia/Jerusalem').format('h:mm:ss, DD.MM.YYYY') },
  { key: 2, text: 'Vladivastok', value: moment.tz('Asia/Vladivostok').format('h:mm:ss, DD.MM.YYYY') },
  { key: 3, text: 'New York', value: moment.tz('America/New_York').format('h:mm:ss, DD.MM.YYYY') },
]

const Navigation = () => {
  const location = useLocation();
  const [timeZone, setTimeZone] = useState(options.value)
  const [nameZone, setNameZone] = useState(options.text)
  let time = moment().format('h:mm:ss, DD.MM.YYYY');
  let [currentTime, changeTime] = useState(options.value)

  
  function handleChange(e, { text,value }) {
    setTimeZone(value)

  }

  function checkTime() {
    time = moment().format('h:mm:ss, DD.MM.YYYY');
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
            <Header as='h5' onChange={checkTime}>{timeZone}</Header>
          </Menu.Item>
          
          <Dropdown
            item
            text={nameZone}
            onChange={handleChange}
            options={options}
            placeholder='Choose a Zone'
            value={timeZone} 
          >
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