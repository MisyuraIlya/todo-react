import React, { useState } from 'react';
import { Card, Button, Accordion, List, Checkbox, Header, Segment, Progress, Confirm, Table, Label, Form, Icon } from 'semantic-ui-react'
import { useNav } from '../state/time-zone'
import SubForm from './SubForm';

const HomeCards = ({
  title,
  description,
  donePost, removePost,
  subTodo,
  setSubCheck,
  status,
  subUpdate,
  ended,

  subCreate,
  subDescription,
  updateSubDescription
}) => {

  // states 
  const [isDrop, setIsDrop] = useState({ activeIndex: 1 })
  const { currentTime } = useNav();
  const { activeIndex } = isDrop
  const [edit, setEdit] = useState(false)
  console.log(edit)

  const editHandler = () => {
    setEdit(current => !current)
    console.log(edit) // is false 
  }

  // helpers
  const handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = isDrop
    const newIndex = activeIndex === index ? -1 : index
    setIsDrop({ activeIndex: newIndex })
  }

  // confirm state

  const [confirmDelete, setConfirmDelete] = useState({ openDelete: false })

  const totalCnt = subTodo.length
  const doneCnt = subTodo.filter(({ status }) => status === 'DONE').length;
  return (
    <Card fluid>
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Meta>{currentTime}</Card.Meta>
        {
          totalCnt === doneCnt
            ? <Progress percent={100} success size='small'>The progress was successful</Progress>
            : <Progress value={doneCnt} total={subTodo.length} progress='ratio' size='small' />
        }
        <Card.Description>{description}</Card.Description>

        <Button icon floated='right' onClick={editHandler}>
          <Icon name='edit outline' />
        </Button>
        <Header as='h3' textAlign='left'>
          Sub todos
        </Header>

        <List >
          {subTodo.map(({ id, subDescription, ended }) =>
            <List.Item>
              <Checkbox label={subDescription} onChange={(_, data) => subUpdate(id, data.checked)} style={{marginBottom:'0.9em'}}/>
              {ended !== null
                ? <List.Content floated='right'>
                  <Label as='h5'>{ended}</Label>
                </List.Content>
                : null
              }
              {
                edit !== false
                
                  ? <List.Content floated='right'><Button icon='delete' color='red' size='mini'/></List.Content>

                  : null
              }
            </List.Item>
          )}
        </List>

      </Card.Content>
      <Card.Content extra>
        <div className='ui three buttons'>
          <Button basic color='green' onClick={donePost}>Done</Button>
          <Button basic color='red' /*onClick={removePost} */ onClick={() => setSubCheck({ openDelete: true })}>Delete
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
            <Form>
              <Form.Group widths='equal'>
                <Form.Input
                  fluid
                  label='Add sub todo'
                  placeholder='Write here'
                  value={subDescription}
                  onChange={updateSubDescription}
                />
              </Form.Group>
              <Form.Button primary onClick={subCreate}>Add </Form.Button>
            </Form>
          </Accordion.Content>
        </Accordion>
      </Card.Content>
    </Card>
  );
};

export default HomeCards;