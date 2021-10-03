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


  // Done Todo
  async function doneTodo(id, name, description) {
    await methods.doneTodo(id, name, description);
    await methods.loadTodo();
  }


  // Remove Todo
  async function removeTodo(id) {
    await methods.removeTodo(id);
    await methods.loadTodo();
  }

  //Pagination todo
  const onPageChange = async (_, { activePage }) => {
    await methods.onPageChange(activePage - 1);
  }

  useEffect(() => methods.loadTodo(), [page])
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
        <PaginationModal {...pagination} page={page} onPageChange={onPageChange} />
      </Segment>

    </Dimmer.Dimmable>

  );
};

export default Home;