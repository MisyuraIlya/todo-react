// GLOBAL
import React, { useState } from 'react';
import SignInComponent from '../components/SignInComponent';
// LOCAL
import { useAuth } from '../state/auth';

const SignIn = () => {

  // local states
  const [details, setDetails] = useState({ email: '', password: '' })
  const { loading, success, methodsAuth, error } = useAuth();
  
  const login = async () => {
    console.log('start login')
    await methodsAuth.login(details.email, details.password)
    setDetails({ email: '', password: '' })
    
  }
  return (
    <SignInComponent
      success={success}
      details={details}
      setDetails={setDetails}
      loading={loading}
      handleLogin={() => login(details.email, details.password)}
      error={error} />
  );
};

export default SignIn;