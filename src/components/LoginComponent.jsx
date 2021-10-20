// GLOBAL
import React from 'react';
import { Form, Button, Divider, Message, Dimmer, Segment, Loader } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
// LOCAL
import { ROUTES } from '../lib/enums';

const LoginComponent = ({ details, setDetails, loading, handleLogin, error }) => {
  return (
    <Dimmer.Dimmable as={Segment} dimmed={loading}>
      <Dimmer active={loading} inverted>
        <Loader>Loading</Loader>
      </Dimmer>
      <Form unstackable error>
        {error && <Message
          error
          header='Error'
          content={error}
        />}
        <Form.Input
          label='Email'
          placeholder='Email'
          onChange={e => setDetails({ ...details, email: e.target.value })}
          value={details.email} />
        <Form.Input
          label='Passowrd'
          placeholder='Password'
          onChange={e => setDetails({ ...details, password: e.target.value })}
          value={details.password} />
        <Form.Checkbox label='Remember me' />
        <Button type='submit' primary fluid onClick={handleLogin}>Log in</Button>
        <Divider />
        <Button type='submit' fluid as={Link} to={ROUTES.SINGIN.path}>Dont have an accout?</Button>
      </Form>
    </Dimmer.Dimmable>
  );
};

export default LoginComponent;