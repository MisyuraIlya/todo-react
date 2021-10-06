import React from 'react';
import {  Form, Button, Divider } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../lib/enums';
const SigninComponent = ({details,setDetails}) => {
  return (
    <Form unstackable>
      <Form.Group widths={2}>
        <Form.Input label='First name' placeholder='First name' onChange={e => setDetails({...details, name:e.target.value})} value={details.name}/>
        <Form.Input label='Last name' placeholder='Last name' onChange={e => setDetails({...details, lastname:e.target.value})} value={details.lastname}/>
      </Form.Group>
      <Form.Input label='Email' placeholder='Email' onChange={e => setDetails({...details, email:e.target.value})} value={details.email}/>
      <Form.Input label='Passowrd' placeholder='Password' onChange={e => setDetails({...details, password1:e.target.value})} value={details.password1}/>
      <Form.Input label='Repeat Password' placeholder='Repeat Password' onChange={e => setDetails({...details, password2:e.target.value})} value={details.password2}/>

      <Form.Checkbox label='I agree to the Terms and Conditions' />
      <Button type='submit' primary fluid>Sign In</Button>
      <Divider />
      <Button type='submit' fluid as={Link} to={ROUTES.LOGIN.path}>Alreay i have account</Button>
    </Form>
  );
};

export default SigninComponent;