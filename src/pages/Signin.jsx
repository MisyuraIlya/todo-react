import React from 'react';
import { Segment, Form,Button,Checkbox,Divider } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { ROUTES, TIME_ZONES, DATE_TIME_FORMAT } from '../lib/enums';

const Signin = () => {
  return (
    <Segment>
      <Form unstackable>
        <Form.Group widths={2}>
          <Form.Input label='First name' placeholder='First name' />
          <Form.Input label='Last name' placeholder='Last name' />
        </Form.Group>
        <Form.Input label='Email' placeholder='Email' />
        <Form.Input label='Passowrd' placeholder='Password' />
        <Form.Input label='Repeat Password' placeholder='Repeat Password' />

        <Form.Checkbox label='I agree to the Terms and Conditions' />
        <Button type='submit' primary fluid>Sign In</Button>
        <Divider />
        <Button type='submit'  fluid as={Link} to={ROUTES.LOGIN.path}>Alreay i have account</Button>
      </Form>
    </Segment>
  );
};

export default Signin;