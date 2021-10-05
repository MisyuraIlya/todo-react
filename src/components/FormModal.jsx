import React from 'react';
import { Form } from 'semantic-ui-react'
const FormModal = ({ title, description, updateTitle, updateDescription, createTodo }) => {
  return (
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
  );
};

export default FormModal;