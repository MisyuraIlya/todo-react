import React, { useState } from 'react';
import { Card, Button, Accordion, Icon, List, Checkbox, Label, Divider, Menu, Input, Header, Segment, Image, Modal, Form, Progress, Confirm, Table } from 'semantic-ui-react'
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

  // confirm state
  const [confirmDone, setConfirmDone] = useState({ openDone: false })
  const [confirmDelete, setConfirmDelete] = useState({ openDelete: false })

  return (
    <Card fluid>
      <Card.Content>
        <Header floated='right'>sub Todos 3/3</Header>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>{currentTime}</Card.Meta>
        <Progress percent={100} success>
          The progress was successful
        </Progress> 
        <p>ELSE</p>
        <Progress value='1' total='5' progress='ratio' />
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
          <Button basic color='green' /*onClick={donePost}*/ onClick={() => setConfirmDone({ openDone: true })}>Done
          </Button>
          <Confirm
            header='You really Done?'
            content={
              <Segment>
                <Table basic>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell>Name</Table.HeaderCell>
                      <Table.HeaderCell>Status</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>

                  <Table.Body>
                    <Table.Row>
                      <Table.Cell>Buy Milk</Table.Cell>
                      <Table.Cell><Checkbox /></Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>Buy meet</Table.Cell>
                      <Table.Cell><Checkbox /></Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>Buy Vodka</Table.Cell>
                      <Table.Cell><Checkbox /></Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
              </Segment>
            }
            open={confirmDone.openDone}
            onCancel={() => setConfirmDone({ openDone: false })}
            onConfirm={() => setConfirmDone({ openDone: false })}
          />
          <Button basic color='red' /*onClick={removePost} */ onClick={() => setConfirmDelete({ openDelete: true })}>Delete
          </Button>
          <Confirm
            header='You really wich to delete?'
            content='You really wich to delete?'
            open={confirmDelete.openDelete}
            onCancel={() => setConfirmDelete({ openDelete: false })}
            onConfirm={() => setConfirmDelete({ openDelete: false })}
          />
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