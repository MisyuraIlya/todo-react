// GLOBAL
import React, { useState } from 'react';
import SignInComponent from '../components/SigninComponent';
// LOCAL
import { useAuth } from '../state/auth';

const SignIn = () => {

  // local states
  const [details, setDetails] = useState({ email: '', password: '' })
  const { loading, success, methodsAuth, error } = useAuth();
  
  const read = async () => {
    await methodsAuth.login(details.email, details.password)
    setDetails({ email: '', password: '' })
    
  }
  return (
    <SignInComponent
      success={success}
      details={details}
      setDetails={setDetails}
      loading={loading}
      handleLogin={() => read(details.email, details.password)}
      error={error} />
  );
};

export default SignIn;