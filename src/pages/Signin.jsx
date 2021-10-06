import React, { useState } from 'react';
import { Segment } from 'semantic-ui-react';
import SigninComponent from '../components/SigninComponent';

const Signin = ({}) => {

  const [details,setDetails] = useState({name:'',lastname:'', email:'', password1:'',password2:''})
  
  return (
    <Segment>
      <SigninComponent details={details} setDetails={setDetails}/>
    </Segment>
  );
};

export default Signin;