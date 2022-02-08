// GLOBAL
import React, { useEffect } from 'react';
import { useAuth } from '../state/auth';
import VerifyEmailComponent from '../components/VerifyEmailComponent';
// LOCAL

const VerifyEmail = () => {
 
  const { methodsAuth, loading, error, success} = useAuth();

  const VerifyEmail = async () => {
    await methodsAuth.verifyEmail()
  }

  useEffect(() => VerifyEmail(), []);

  return (
    <VerifyEmailComponent 
      success={success}
      loading={loading}
      error={error}
    />
  );
};

export default VerifyEmail;