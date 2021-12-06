// GLOBAL
import React, { useState } from 'react';
import LoginComponent from '../components/LoginComponent';
import { useHistory } from 'react-router-dom'
import Cookies from 'js-cookie'
// LOCAL
import accounts from '../lib/accounts'
import apiAuth from '../lib/apiAuth'
import Axios from 'axios';
import {API} from '../lib/enums';

const Login = () => {

  // local states
  const [details, setDetails] = useState({ email: '', password: '' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const history = useHistory()


  const read = async (email, password) => {
    await Axios.get(`${API}/auth/signin?email=${email}&password=${password}`).then(res => {
      console.log(res)
      console.log(res.status)
    }).catch(error => {
      if (error.response) {
        console.log(error.response.data);
        setError(error.response.data) 
      }
    })
  }


  const handleLogin = async () => {
    const result = accounts.filter(tmp => tmp.email === details.email)
    if (details.email == '' || details.password == '') {
      return setError('One of the inputs didnt sent')
    }

    try {
      setError('')
      setLoading(true)
      // Cookies.set('user', result[0].name)
      // history.push('/')
      const email = details.email
      const password = details.password
      await read( email, password)
    } catch {
      setError('faild to login')
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