// GLOBAL
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
// LOCAL
import SigninComponent from '../components/SigninComponent';
import accounts from '../lib/accounts'
import { PERMISSION } from '../lib/enums';
import apiAuth from '../lib/apiAuth'
import Axios from 'axios';
import {API} from '../lib/enums';

const Signin = ({ }) => {

  // local states
  const [details, setDetails] = useState({ name: '', lastname: '', email: '', password1: '', password2: '' })
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [loading, setLoading] = useState(false)
  const [checkbox, setCheckbox] = useState(false)


  const create = async (name, lastname, email, password) => {
    await Axios.post(`${API}/auth/signup`, {
      name,
      lastname,
      email,
      password
    }).then((res) => {
      console.log(res.data)
      setSuccess(res.data)
    }).catch(error => {
      if (error.response) {
        setError(error.response.data)
      }
    })
  }


  const createAccount = async () => {

    if (details.password1 !== details.password2) {
      return setError('passwords didnt exist')
    }

    if (details.name === '' || details.lastname === '' || details.email === '' || details.password1 === '' || details.password2 === '') {
      return setError('One of the inputs not seted')
    }

    if (checkbox === false) {
      return setError('You need to agree with our conditions')
    }
    try {
      setError('')
      setLoading(true)
      // accounts.push({
      //   id: uuidv4(),
      //   name: details.name,
      //   lastname: details.lastname,
      //   email: details.email,
      //   password: details.password1,
      //   permission: PERMISSION.ADMIN
      // })
      const name = details.name
      const lastname = details.lastname
      const email = details.email
      const password = details.password1
      await create(name, lastname, email, password)
      // console.log('this',name)

      // setSuccess('Accout created succsesfuly')
    } catch {
      setError('faild to create an account')
    } finally {
      setLoading(false)
      setDetails({ name: '', lastname: '', email: '', password1: '', password2: '' })
    }

  }

  return (
    <SigninComponent
      details={details}
      setDetails={setDetails}
      createAccount={createAccount}
      error={error}
      success={success}
      loading={loading}
      setCheckbox={setCheckbox}
    />
  );
};

export default Signin;