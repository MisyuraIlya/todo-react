//GLOBAL
import React, { useState } from 'react';
import { Card, Button, Accordion, List, Checkbox, Header, Progress, Confirm, Label, Form, Icon, Divider, Loader, Dimmer } from 'semantic-ui-react'
import moment from 'moment'
//LOCAL
import { useNav } from '../state/time-zone'
import { DATE_TIME_FORMAT } from '../lib/enums';


const HomeCards = ({
  id,
  title,
  description,
  donePost, removePost,
  subTodo,
  subUpdate,
  subCreate,
  subDescription,
  updateSubDescription,
  removeSubTodo,
  created,
  subLoading
}) => {

  // states 
  const [isDrop, setIsDrop] = useState({ activeIndex: 1 })
  const [confirmDelete, setConfirmDelete] = useState({ openDelete: false })
  const [edit, setEdit] = useState(false)
  const { activeIndex } = isDrop

  const { timeZone } = useNav();
  const totalCnt = subTodo.length
  const doneCnt = subTodo.filter(({ status }) => status === 'DONE').length;

  // helpers
  const handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = isDrop
    const newIndex = activeIndex === index ? -1 : index
    setIsDrop({ activeIndex: newIndex })
  }

  const editHandler = () => {
    setEdit(current => !current)
  }

  return (
    <Card fluid>
      <Card.Content>
        <Card.Header textAlign='left'>Title: {title}</Card.Header>
        <Loader active={subLoading} inline='right' size='small'/>
        
        <Card.Meta>Created: {moment(created, DATE_TIME_FORMAT).tz(timeZone).format(DATE_TIME_FORMAT)}</Card.Meta>
        <Progress value={doneCnt} total={subTodo.length} success={totalCnt === doneCnt} progress='ratio' size='small' />
        <Card.Description>Description todo: {description}</Card.Description>
        <Divider />

        <Button icon floated='right' onClick={editHandler} color='blue'>
          <Icon name='edit outline' />
        </Button>
        <Header as='h3' textAlign='left'>
          Sub todos
        </Header>
        <List >
          {subTodo.map(({ id, subDescription, ended, status }) =>
            <List.Item>
              <Checkbox label={subDescription} checked={status === 'DONE'} onChange={(_, data) => subUpdate(id, data.checked)} style={{ marginBottom: '0.9em' }} />
              {
                !edit
                  ? <List.Content floated='right'><Button icon='delete' color='red' size='mini' onClick={() => removeSubTodo(id)} /></List.Content>
                  : null
              }
              {
                ended !== null
                  ? <List.Content floated='right'>
                    <Label as='h5'>Ended in {ended}</Label>
                  </List.Content>
                  : null
              }

            </List.Item>
          )}
        </List>

      </Card.Content>
      <Card.Content extra>
        <div className='ui three buttons'>
          <Button basic color='green' onClick={donePost}>Done</Button>
          <Button basic color='red' onClick={open = () => setConfirmDelete({ open: true })}>Delete</Button>
          <Confirm
            header='You really wich to delete?'
            content='You really wich to delete?'
            open={confirmDelete.open}
            onCancel={() => setConfirmDelete({ open: false })}
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
            icon=''
            style={{ cursor: 'default' }}
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
              <Form.Button primary onClick={() => subCreate(id, subDescription)}>Add </Form.Button>
            </Form>
          </Accordion.Content>
        </Accordion>
      </Card.Content>
    </Card>
  );
};

export default HomeCards;