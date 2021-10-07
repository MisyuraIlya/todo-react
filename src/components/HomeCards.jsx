import React, { useState } from 'react';
import { Card, Button, Accordion, Icon, List, Checkbox, Label } from 'semantic-ui-react'
import moment from 'moment'
import { DATE_TIME_FORMAT } from '../lib/enums';
const HomeCards = ({ name, date, description, donePost, removePost }) => {

  const [isDrop, setIsDrop] = useState({ activeIndex: 1 })
  const { activeIndex } = isDrop


  const handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = isDrop
    const newIndex = activeIndex === index ? -1 : index

    setIsDrop({ activeIndex: newIndex })
  }

  return (
    <Card fluid>
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>{moment(date, DATE_TIME_FORMAT).utc().format(DATE_TIME_FORMAT)}</Card.Meta>
        <Card.Description>{description}

        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green' onClick={donePost}>Done
          </Button>
          <Button basic color='red' onClick={removePost}>Delete
          </Button>
        </div>
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
          <List celled ordered>
            <List.Item><Checkbox/>  buy milk <Label color='red'><Icon name='delete'/></Label></List.Item>
            <List.Item><Checkbox/>  buy meet</List.Item>
            <List.Item><Checkbox/>  buy book</List.Item>
            <List.Item><Checkbox/>  buy silk</List.Item>
          </List>
        </Accordion.Content>
      </Accordion>
    </Card>
  );
};

export default HomeCards;