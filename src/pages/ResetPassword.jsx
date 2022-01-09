// GLOBAL
<<<<<<< HEAD
import React, { useState } from 'react';
=======
import React, { useState, useEffect } from 'react';
>>>>>>> 18b9e13434d8a2be444eec12da6d8949fb63040b
import ResetPasswordComponent from '../components/ResetPasswordComponent';
import { useAuth } from '../state/auth';
// LOCAL

const ResetPassword = () => {

  // local states
  const [email, setEmail] = useState('')
  const { methodsAuth, loading, error, success} = useAuth();
<<<<<<< HEAD
  const sendMail = async (email) => {
=======
  console.log(success)
  const sendMail = async (eail) => {
>>>>>>> 18b9e13434d8a2be444eec12da6d8949fb63040b
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