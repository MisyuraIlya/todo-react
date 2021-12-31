//GLOBAL
import React, { useState, useEffect } from 'react';
import { Segment, Header, Dimmer, Loader, Icon, Accordion, Button } from 'semantic-ui-react'
//LOCAL
import PaginationModal from '../components/PaginationModal';
import HomeCards from '../components/HomeCards';
import { useTodo } from '../state/todos';
import FormModal from '../components/FormModal';

const Home = () => {

  //local states
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const { todos, subTodo, loading, pagination, page,subLoading,  methods, } = useTodo();
  const [subCheck, setSubCheck] = useState(false)
  const [subDescription, setSubDescription] = useState('');
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

  const update = async (id, title, description, status) => {
    await methods.doneTodo(id, title, description, status);
    await methods.loadTodo();
  }

  const removeTodo = async (id) => {
    await methods.removeTodo(id);
    await methods.loadTodo();
  }

  const onPageChange = async (_, { activePage }) => {
    await methods.onPageChange(activePage - 1);
  }

  const subUpdate = async (id, status) => {
    await methods.doneSubUpdate(id, status);
    await methods.loadSubTodo();
  }

  const updateSubDescription = ({ target }) => {
    setSubDescription(target.value)
  }

  const subCreate = async (id,subDescription) => {
    await methods.createSubTodo(id,subDescription);
    await methods.loadSubTodo();
    setSubDescription('');
  }

  const removeSubTodo = async (id) => {
    await methods.removeSubTodo(id);
    await methods.loadSubTodo();
  }

  useEffect(() => methods.loadSubTodo(), [page]);
  useEffect(() => methods.loadTodo(), [page])
  const ended = subTodo
  const todoElements = todos
    .map(({ id, title, created, ended, description, status }) => <HomeCards
      key={id}
      id={id}
      title={title}
      ended={ended}
      created={created}
      subTodo={subTodo.filter(({ parentid }) => parentid === id)}
      description={description}
      donePost={() => update(id, title, description, status)}
      removePost={() => removeTodo(id)}
      setSubCheck={setSubCheck}
      status={status}
      subUpdate={subUpdate}
      subCreate={subCreate}
      subDescription={subDescription}
      updateSubDescription={updateSubDescription}
      removeSubTodo={removeSubTodo}
      subLoading={subLoading}
    />
    )
  
  const missingElement = <Header as='h2'>
    <Icon name='pencil alternate' />
    <Header.Content>No posts found!</Header.Content>
  </Header>

  // states 
  const [isDrop, setIsDrop] = useState({ activeIndex: 1 })
  const { activeIndex } = isDrop

  // helpers
  const handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = isDrop
    const newIndex = activeIndex === index ? -1 : index

    setIsDrop({ activeIndex: newIndex })
  }
  return (
    <Dimmer.Dimmable as={Segment} dimmed={loading}>
      <Dimmer active={loading} inverted>
        <Loader>Loading</Loader>
      </Dimmer>
      <Accordion>
        <Accordion.Title
          active={activeIndex === 0}
          index={0}
          onClick={handleClick}
        >
          <Button primary fluid  >Add new Todo
          </Button>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>

          <FormModal
            title={title}
            description={description}
            updateTitle={updateTitle}
            updateDescription={updateDescription}
            createTodo={createTodo} />

        </Accordion.Content>
      </Accordion>

      {todos.length ? todoElements : missingElement}
      <Segment basic textAlign={'center'}>
        <PaginationModal {...pagination} page={page} onPageChange={onPageChange} />
      </Segment>
    </Dimmer.Dimmable>
  );
};

export default Home;