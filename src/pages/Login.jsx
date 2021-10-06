import React, { useState } from 'react';
import { Segment } from 'semantic-ui-react';
import LoginComponent from '../components/LoginComponent';

const Login = () => {

  const [details, setDetails] = useState({ email: '', password: '' })
  
  return (
    <Segment>
      <LoginComponent details={details} setDetails={setDetails} />
    </Segment>
  );
};

export default Login;