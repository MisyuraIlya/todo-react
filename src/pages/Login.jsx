// GLOBAL
import React, { useState, useEffect } from 'react';
import LoginComponent from '../components/LoginComponent';
// LOCAL
import { useAuth } from '../state/auth';

const Login = () => {

  // local states
  const [details, setDetails] = useState({ email: '', password: '' })
  const { loading, success, methodsAuth, error } = useAuth();
  
  const read = async () => {
    await methodsAuth.login(details.email, details.password)
    setDetails({ email: '', password: '' })
    
  }
  return (
    <LoginComponent
      success={success}
      details={details}
      setDetails={setDetails}
      loading={loading}
      handleLogin={() => read(details.email, details.password)}
      error={error} />
  );
};

export default Login;