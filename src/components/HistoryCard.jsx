import React, { useState } from 'react';
import { Card, Header, Accordion, Segment, Icon, Menu, Button  } from 'semantic-ui-react'
import moment from 'moment'
import { DATE_TIME_FORMAT } from '../lib/enums';

const HistoryCard = ({ name, date, description }) => {

  const [isDrop, setIsDrop] = useState({ activeIndex: 1 })
  const { activeIndex } = isDrop

  // helpers
  const handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = isDrop
    const newIndex = activeIndex === index ? -1 : index

    setIsDrop({ activeIndex: newIndex })
  }
  return (
    <Card fluid>
      <Card.Content>
        <Header floated='right'>sub Todos 3/3</Header>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>{moment(date, DATE_TIME_FORMAT).format(DATE_TIME_FORMAT)}</Card.Meta>
        <Card.Description>{description}
        </Card.Description>
      </Card.Content>
      <Accordion>
        <Accordion.Title
          active={activeIndex === 0}
          index={0}
          onClick={handleClick}
        >
          <Icon name='dropdown' />
          Sub Todos
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>

          <Segment secondary size='mini' style={{ margin: '1em 3em 0em 3em' }}>
            <Menu secondary>
              <Menu.Item>
                <Header as='h4'>Buy milk</Header>
              </Menu.Item>
            </Menu>
          </Segment>

          <Segment secondary size='mini' piled style={{ margin: '1em 3em 0em 3em' }}>
            <Menu secondary>
              <Menu.Item>
                <Header as='h4'>Buy milk</Header>
              </Menu.Item>
            </Menu>
          </Segment>

          <Segment secondary size='mini' piled style={{ marginLeft: '2em', margin: '1em 3em 0em 3em' }}>
            <Menu secondary>
              <Menu.Item>
                <Header as='h4'>Buy milk</Header>
              </Menu.Item>
            </Menu>
          </Segment>


        </Accordion.Content>
      </Accordion>
    </Card>
  );
};

export default HistoryCard;