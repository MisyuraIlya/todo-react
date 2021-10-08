import React, { useState } from 'react';
import { Card, Button, Accordion, Icon, List, Checkbox, Label, Divider, Menu, Input, Header, Segment, Image, Modal, Form } from 'semantic-ui-react'
import { useNav } from '../state/navigation'

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
        <Modal
          size='mini'
          trigger={<Button icon labelPosition='left' floated='right'>
            <Icon name='add' />
            sub Todo
          </Button>}
          header='Reminder!'
          content={<Form>
            <Form.Field inline>
              <label style={{marginLeft:'3em'}}>Sub Todo</label>
              <Input placeholder='First name' />
            </Form.Field>
          </Form>}
          actions={['Close', { key: 'done', content: 'add', positive: true }]}
        />

        <Card.Description>{description}</Card.Description>
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

          <Segment size='mini' style={{ margin: '1em 3em 0em 3em' }}>
            <Menu secondary>
              <Menu.Item>
                <Header as='h4'>Buy milk</Header>
              </Menu.Item>
              <Menu.Item position='right'>
                <Button icon='delete' color='red' style={{ marginRight: '0.5em' }} />
                <Button icon='check' color='green' />
              </Menu.Item>
            </Menu>
          </Segment>

          <Segment size='mini' piled style={{ margin: '1em 3em 0em 3em' }}>
            <Menu secondary>
              <Menu.Item>
                <Header as='h4'>Buy milk</Header>
              </Menu.Item>
              <Menu.Item position='right'>
                <Button icon='delete' color='red' style={{ marginRight: '0.5em' }} />
                <Button icon='check' color='green' />
              </Menu.Item>
            </Menu>
          </Segment>

          <Segment size='mini' piled style={{ marginLeft: '2em', margin: '1em 3em 0em 3em' }}>
            <Menu secondary>
              <Menu.Item>
                <Header as='h4'>Buy milk</Header>
              </Menu.Item>
              <Menu.Item position='right'>
                <Button icon='delete' color='red' style={{ marginRight: '0.5em' }} />
                <Button icon='check' color='green' />
              </Menu.Item>
            </Menu>
          </Segment>


        </Accordion.Content>
      </Accordion>
    </Card>
  );
};

export default HomeCards;