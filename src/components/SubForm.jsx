import React from 'react';
import { Form } from 'semantic-ui-react'
const SubForm = ({ subCreate, subDescription, updateSubDescription }) => {

  return (
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
      <Form.Button primary onClick={() => subCreate(id)}>Add </Form.Button>
    </Form>
  );
};

export default SubForm;