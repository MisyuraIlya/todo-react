// GLOBAL
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
// LOCAL
import SigninComponent from '../components/SigninComponent';
import accounts from '../lib/accounts'
import { PERMISSION } from '../lib/enums';
import apiAuth from '../lib/apiAuth'
import Axios from 'axios';
import {API} from '../lib/enums';
import { useAuth } from '../state/auth';


const Signin = ({ }) => {

  // local states
  const [details, setDetails] = useState({ 
    name: '', lastname: '', email: '', phone:'',  password1: '', password2: '' 
  })
  const { loading, success, methodsAuth, error, checkbox, setCheckbox } = useAuth();

  const createAccount = async () => {
    await methodsAuth.createAccount(
      details.name,
      details.lastname,
      details.email,
      details.phone,
      details.password1,
      details.password2
    )
    setDetails({ 
      name: '', lastname: '', email: '', phone: '',  password1: '', password2: '' 
    })
  }

  return (
    <SigninComponent
      details={details}
      setDetails={setDetails}
      createAccount={createAccount}
      error={error}
      success={success}
      loading={loading}
      setCheckbox={setCheckbox}
    />
  );
};

export default Signin;