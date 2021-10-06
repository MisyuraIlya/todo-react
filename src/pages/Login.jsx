// GLOBAL
import React, { useState } from 'react';
import LoginComponent from '../components/LoginComponent';
import { useHistory } from 'react-router-dom'
// LOCAL
import accounts from '../lib/accounts'

const Login = () => {

  // local states
  const [details, setDetails] = useState({ email: '', password: '' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const history = useHistory()

  const handleLogin = async () => {
    const result = accounts.filter(tmp => tmp.email === details.email)

    if (details.email == '' || details.password == '') {
      return setError('One of the inputs didnt sent')
    }

    if (result[0].password == details.password) {
    } else {
      return setError('There is wrong password of email')
    }
    try {
      setError('')
      setLoading(true)
      history.push('/')
    } catch {
      setError('Faild to login')
    } finally {
      setLoading(false)
      setDetails({ email: '', password: '' })
    }

  }

  return (
    <LoginComponent
      details={details}
      setDetails={setDetails}
      loading={loading}
      handleLogin={handleLogin}
      error={error} />
  );
};

export default Login;