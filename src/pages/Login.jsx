// GLOBAL
import React, { useState, useEffect } from 'react';
import LoginComponent from '../components/LoginComponent';
import { useHistory } from 'react-router-dom'
import Cookies from 'js-cookie'
import cookieClient from 'react-cookie'
// LOCAL
import accounts from '../lib/accounts'
import apiAuth from '../lib/apiAuth'
import Axios from 'axios';
import {API} from '../lib/enums';

const Login = () => {

  // local states
  const [loginStatus, setLoginStatus] = useState('');
  const [details, setDetails] = useState({ email: '', password: '' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const history = useHistory()

  // Axios.defaults.withCredentials = true;
  // const read = async (email, password) => {
  //   await Axios.get(`${API}/auth/signin?email=${email}&password=${password}` ,{ withCredentials: true }).then(res => {
  //     console.log(res.data.loggedIn)
  //     console.log(res)
  //     console.log(res.status)
  //     if(res.status == 200){
  //       cookieClient.save('cookie-name', res.data, {path:'/'})
  //     }
  //   }).catch(error => {
  //     if (error.response) {
  //       console.log(error.response.data);
  //       setError(error.response.data) 
  //     }
  //   })
  // }

  const read = async (email, password) => {
    console.log(email,password)
    await Axios.post(`${API}/auth/signin`, {
      email : email,
      password : password
    }, {
      withCredentials: true,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      console.log('post response', response)
      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        setLoginStatus(response.data[0].email);
      }
    });

    Axios.get(`${API}/auth/signin`,{ withCredentials: true }).then((response) => {
      console.log(response)
      console.log(response.data.loggedIn)
      if (response.data.loggedIn == true) {
        setLoginStatus(response.data[0].email);
      }
    });
    
  }

  
  // const login = () => {
  //   Axios.post(`${API}/auth/signin`, {
  //     username: username,
  //     password: password,
  //   }).then((response) => {
  //     if (response.data.message) {
  //       setLoginStatus(response.data.message);
  //     } else {
  //       setLoginStatus(response.data[0].username);
  //     }
  //   });
  // };

  useEffect(() => {
    const opts = {
      withCredentials: true
    };
    Axios.get('http://dev.local:3001/test', opts)
      .then((response) => {
        console.log('Server response', response.data);
      })
    // Axios.get(`${API}/auth/signin`,{ withCredentials: true }).then((response) => {
    //   console.log(response)
    //   console.log(response.data.loggedIn)
    //   if (response.data.loggedIn == true) {
    //     setLoginStatus(response.data[0].email);
    //   }
    // });
  }, []);
  

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