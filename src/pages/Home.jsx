import React, { useEffect, useState } from 'react';
import { Segment, Header, Dimmer, Loader, Form, Icon } from 'semantic-ui-react'
import api from '../lib/api';
import PaginationModal from '../components/PaginationModal';
import HomeCards from '../components/HomeCards';


import { useTodo } from '../state/todos';

const Home = () => {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const { todos, overlay, methods } = useTodo();


  // Event hendlers
  function updateTitle({ target }) {
    setTitle(target.value);
  }

  function updateDescription({ target }) {
    setDescription(target.value);
  }



  // Create Todo
  async function createTodo() {
    await methods.createTodo(title, description);
    await methods.loadTodo();

    setDescription('');
    setTitle('');
  }

  // Done LOGIC
  const doneTodo = async (id, name, description) => {
    try {
      const tmp = await api.doneTodo(id, name, description);
      console.log(tmp);
    } catch (error) {
      console.log('Found error', error)
    }
    await methods.loadTodo();
  }

  // Remove Todo
  useEffect(() => methods.loadTodo(), [])
  const removeTodo = async (id) => {
    try {
      await api.removeTodo(id);
    } catch (error) {
      console.log('Found error', error)
    } finally {
    }
    await methods.loadTodo();
  }

  return (

    <Dimmer.Dimmable as={Segment} dimmed={overlay}>
      <Dimmer active={overlay} inverted>
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

      {
        //card to component
        todos.length ?
          todos.map(({ id, name, date, description }) =>
            <HomeCards
              key={id}
              id={id}
              name={name}
              date={date}
              description={description}
              donePost={() => doneTodo(id, name, description)}
              removePost={() => removeTodo(id)} />
          ) :
          <Header as='h2'>
            <Icon name='pencil alternate' />
            <Header.Content>No posts found!</Header.Content>
          </Header>}

      <Segment basic textAlign={"center"}>
        <PaginationModal />
      </Segment>

    </Dimmer.Dimmable>

  );
};

export default Home;