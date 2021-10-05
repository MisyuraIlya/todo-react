//GLOBAL
import React, { useState, useEffect } from 'react';
import { Segment, Header, Dimmer, Loader, Form, Icon } from 'semantic-ui-react'

//LOCAL
import PaginationModal from '../components/PaginationModal';
import HomeCards from '../components/HomeCards';
import { useTodo } from '../state/todos';

const Home = () => {

  //local states

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const { todos, loading, pagination, page, methods } = useTodo();

  // Event hendlers
  const updateTitle = ({ target }) => {
    setTitle(target.value);
  }

  const updateDescription = ({ target }) => {
    setDescription(target.value);
  }

  const createTodo = async () => {
    await methods.createTodo(title, description);
    await methods.loadTodo();
    setDescription('');
    setTitle('');
  }

  const update = async (id, name, description, status) => {
    await methods.doneTodo(id, name, description, status);
    await methods.loadTodo();
  }

  const removeTodo = async (id) => {
    await methods.removeTodo(id);
    await methods.loadTodo();
  }

  const onPageChange = async (_, { activePage }) => {
    await methods.onPageChange(activePage - 1);
  }

  useEffect(() => methods.loadTodo(), [page])

  const todoElements = todos
    .map(({ id, name, date, description, status }) => <HomeCards
      key={id}
      id={id}
      name={name}
      date={date}
      description={description}
      donePost={() => update(id, name, description, status)}
      removePost={() => removeTodo(id)} />
    )
  const missingElement = <Header as='h2'>
    <Icon name='pencil alternate' />
    <Header.Content>No posts found!</Header.Content>
  </Header>

  return (
    <Dimmer.Dimmable as={Segment} dimmed={loading}>
      <Dimmer active={loading} inverted>
        <Loader>Loading</Loader>
      </Dimmer>
      <Form>
        <Form.Group widths='equal'>
          <Form.Input
            fluid
            label='Title'
            placeholder='Title'
            value={title}
            onChange={updateTitle} />
        </Form.Group>
        <Form.TextArea
          label='Description'
          placeholder='Tell more about what need to do...'
          value={description}
          onChange={updateDescription} />
        <Form.Button primary onClick={createTodo}>Add ToDo</Form.Button>
      </Form>
      {todos.length ? todoElements: missingElement}
      <Segment basic textAlign={'center'}>
        <PaginationModal {...pagination} page={page} onPageChange={onPageChange} />
      </Segment>
    </Dimmer.Dimmable>
  );
};

export default Home;