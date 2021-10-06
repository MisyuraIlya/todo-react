import React from 'react';
import { Segment, Form, Button, Divider } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../lib/enums';

const LoginComponent = () => {
  return (
    <Form unstackable>
      <Form.Input label='Email' placeholder='Email' />
      <Form.Input label='Passowrd' placeholder='Password' />
      <Form.Checkbox label='Remember me' />
      <Button type='submit' primary fluid>Log in</Button>
      <Divider />
      <Button type='submit' fluid as={Link} to={ROUTES.SINGIN.path}>Dont have an accout?</Button>
    </Form>
  );
};

export default LoginComponent;