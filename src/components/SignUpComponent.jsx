// GLOBAL
import React from 'react';
import { Form, Button, Divider, Message, Dimmer, Segment, Loader } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
// LOCAL
import { ROUTES } from '../lib/enums';

const SignUpComponent = ({ details, setDetails, createAccount, error, loading, success, setCheckbox }) => {
  return (
    <Dimmer.Dimmable as={Segment} dimmed={loading}>
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
          header='Created Sucsesfuly'
          content={success}
        />}

        <Form.Group widths={2}>
          <Form.Input
            label='First name'
            placeholder='First name'
            onChange={e => setDetails({ ...details, name: e.target.value })}
            value={details.name} />
          <Form.Input
            label='Last name'
            placeholder='Last name'
            onChange={e => setDetails({ ...details, lastname: e.target.value })}
            value={details.lastname} />
        </Form.Group>

        <Form.Input
          label='Email'
          placeholder='Email'
          onChange={e => setDetails({ ...details, email: e.target.value })}
          value={details.email} />

        <Form.Input
          label='Phone'
          placeholder='Phone'
          onChange={e => setDetails({ ...details, phone: e.target.value })}
          value={details.phone} />

        <Form.Input
          label='Passowrd'
          type='password'
          placeholder='Password'
          onChange={e => setDetails({ ...details, password1: e.target.value })}
          value={details.password1} />

        <Form.Input
          label='Repeat Password'
          type='password'
          placeholder='Repeat Password'
          onChange={e => setDetails({ ...details, password2: e.target.value })}
          value={details.password2} />

        <Form.Checkbox label='I agree to the Terms and Conditions' onChange={(_, data) => setCheckbox(data.checked)} />

        <Button type='submit' primary fluid onClick={createAccount}>Sign up</Button>

        <Divider />
        <Button type='submit' fluid as={Link} to={ROUTES.SIGNIN.path} >Alreay i have account</Button>
      </Form>

    </Dimmer.Dimmable>
  );
};

export default SignUpComponent;