// GLOBAL
import React, { useState, useEffect } from 'react';
import ResetPasswordComponent from '../components/ResetPasswordComponent';
import { useAuth } from '../state/auth';
// LOCAL

const ResetPassword = () => {

  // local states
  const [email, setEmail] = useState('')
  const { methodsAuth, loading, error, success} = useAuth();
  console.log(success)
  const sendMail = async (eail) => {
    await methodsAuth.resetPassword(email)
    setEmail('')
  }
  return (
    <ResetPasswordComponent 
      success={success}
      email={email}
      setEmail={setEmail}
      loading={loading}
      handleResetPassword={() => sendMail(email)}
      error={error}
    />
  );
};

export default ResetPassword;