// GLOBAL
import React, { useState } from 'react';
// LOCAL
import SignUpComponent from '../components/SignUpComponent';
import { useAuth } from '../state/auth';


const SignUp = ({ }) => {

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
    <SignUpComponent
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

export default SignUp;