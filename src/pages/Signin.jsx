import React from 'react';
import { Segment, Form, Button, Divider } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../lib/enums';
import SigninComponent from '../components/SigninComponent';

const Signin = () => {
  return (
    <Segment>
      <SigninComponent/>
    </Segment>
  );
};

export default Signin;