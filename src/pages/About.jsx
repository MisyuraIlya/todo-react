// Global
import React, {useState} from 'react';
import { Segment, Form } from 'semantic-ui-react';
// Local
import { useTodo } from '../state/todos';

const About = () => {
  const [ title, setTitle ] = useState('');
  const [ description, setDescription ] = useState('');
  const { todos, loading, methods } = useTodo();

  // Event hendlers
  function updateTitle({target}) {
    setTitle(target.value);
  }

  function updateDescription({target}) {
    setDescription(target.value);
  }

  async function createPost() {
    await methods.createTodo(title, description);
    await methods.loadTodo();

    setDescription('');
    setTitle('');
  }

  return (
    <Segment>
      <h1>LOADING: {loading ? 'active' : 'inactive'}</h1>

      <div>
        <h2>Todos [{todos.length}]</h2>
        {todos.map(({id}) => <div key={id}>{id}</div>)}
      </div>
      <br/>
      <br/>
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

        <Form.Button primary onClick={createPost}>Add ToDo</Form.Button>
      </Form>
    </Segment>
  );
};

export default About;