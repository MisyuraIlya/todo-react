import React, { useState } from 'react';
import NewPasswordComponent from '../components/NewPasswordComponent';
import { useAuth } from '../state/auth';
// LOCAL

const NewPassword = () => {

  // local states
  const [details, setDetails] = useState({password: '', password2: ''})
  
  const { methodsAuth ,loading ,success, error } = useAuth();

  const handleSend = async () => {
    await methodsAuth.NewPassword(details.password, details.password2)
    setDetails({password: '', password2: ''})

  }

  return (
    <NewPasswordComponent 
      success={success}
      details={details}
      setDetails={setDetails}
      loading={loading}
      handeNewPassword={() => handleSend()}
      error={error}
    />
  );
};

export default NewPassword;