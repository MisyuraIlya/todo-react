// GLOBAL
import React from 'react';
import { Form, Button, Divider, Message, Dimmer, Segment, Loader } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
// LOCAL
import { ROUTES } from '../lib/enums';

const ResetPasswordComponent = ({ email, setEmail, loading, handleResetPassword, success ,error}) => {
  return (
    <Dimmer.Dimmable  as={Segment} dimmed={loading} >
      <Dimmer active={loading} inverted>
        <Loader>Loading</Loader>
      </Dimmer>
      <Form unstackable error success>
        {error && <Message
          error
          header='Error'
          content={error}
        />}
        {success && <Message
          success
          header='Message '
          content={success}
        />}
        <Form.Input
          label='Email'
          placeholder='Email'
          onChange={e => setEmail( e.target.value )}
          value={email}
        />
        <Button type='submit' primary fluid onClick={handleResetPassword} >Send</Button>
        <Divider/>
<<<<<<< HEAD
        <Button type='submit' fluid as={Link} to={ROUTES.SIGNUP.path}>Dont have an accout?</Button>
=======
        <Button type='submit' fluid as={Link} to={ROUTES.SINGIN.path}>Dont have an accout?</Button>
>>>>>>> 18b9e13434d8a2be444eec12da6d8949fb63040b
      </Form>
    </Dimmer.Dimmable>
  );
};

export default ResetPasswordComponent;