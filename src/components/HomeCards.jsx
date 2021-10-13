import React, { useState } from 'react';
import { Card, Button, Accordion, Icon, List, Checkbox, Label, Divider, Menu, Input, Header, Segment, Image, Modal, Form, Progress } from 'semantic-ui-react'
import { useNav } from '../state/navigation'
import FormModal from './FormModal';

const HomeCards = ({ name, description, donePost, removePost }) => {

  // states 
  const [isDrop, setIsDrop] = useState({ activeIndex: 1 })
  const { currentTime } = useNav();
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
        <Card.Meta>{currentTime}</Card.Meta>
        <Progress value='0' total='5' progress='ratio' />
        <Card.Description>{description}</Card.Description>
        <Header as='h3'>SubTodos</Header>
        <List bulleted>
          <List.Item>Buy milk</List.Item>
          <List.Item>BuY meet</List.Item>
          <List.Item>Buy vodka</List.Item>
        </List>

      </Card.Content>



      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green' onClick={donePost}>Done
          </Button>
          <Button basic color='red' onClick={removePost}>Delete
          </Button>
        </div>
        <Accordion>
          <Accordion.Title
            active={activeIndex === 0}
            index={0}
            onClick={handleClick}
          >
            <Button basic color='blue' fluid  >Add new subtodos
            </Button>
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 0}>


            <FormModal />

          </Accordion.Content>
        </Accordion>
      </Card.Content>

    </Card>
  );
};

export default HomeCards;