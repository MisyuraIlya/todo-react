import React, { useState } from 'react';
import { Card, Button, Accordion, List, Checkbox, Header, Segment, Progress, Confirm, Table } from 'semantic-ui-react'
import { useNav } from '../state/time-zone'
import FormModal from './FormModal';

const HomeCards = ({ title, description, donePost, removePost, subTodo }) => {

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

  const [confirmDelete, setConfirmDelete] = useState({ openDelete: false })

  return (
    <Card fluid>
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Meta>{currentTime}</Card.Meta>
        <Progress percent={100} success size='small'>
          The progress was successful
        </Progress>
        <p>ELSE</p>
        <Progress value='1' total='5' progress='ratio' size='small' />
        <Card.Description>{description}</Card.Description>
        <Header as='h3'>SubTodos</Header>
        <List >
          {subTodo.map(({ subtodo }) =>
            <List.Item><Checkbox label={subtodo} /></List.Item>
          )}
        </List>

      </Card.Content>
      <Card.Content extra>
        <div className='ui three buttons'>
          <Button basic color='green' onClick={donePost}>Done</Button>
          <Button basic color='red' /*onClick={removePost} */ onClick={() => setConfirmDelete({ openDelete: true })}>Delete
          </Button>
          <Confirm
            header='You really wich to delete?'
            content='You really wich to delete?'
            open={confirmDelete.openDelete}
            onCancel={() => setConfirmDelete({ openDelete: false })}
            onConfirm={() => removePost()}
          />
          <Button basic color='blue' onClick={handleClick} active={activeIndex === 0}
            index={0} >Add new subtodos
          </Button>
        </div>
        <Accordion>
          <Accordion.Title
            active={activeIndex === 0}
            index={0}
          >
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