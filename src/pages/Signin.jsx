import React, { useState } from 'react';
import { Segment, Message } from 'semantic-ui-react';
import SigninComponent from '../components/SigninComponent';
import accounts from '../lib/accounts'
import { PERMISSION } from '../lib/enums';
import { v4 as uuidv4 } from 'uuid';

console.log(accounts)
const Signin = ({ }) => {

  const [details, setDetails] = useState({ name: '', lastname: '', email: '', password1: '', password2: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState('')

  const createAccount = async () => {

    if (details.password1 !== details.password2) {
      return setError('passwords didnt exist')
    }

    try {
      setError('')
      setLoading(true)
      accounts.push({
        id: uuidv4(),
        name: details.name,
        lastname: details.lastname,
        email: details.email,
        password: details.password1,
        permission: PERMISSION.ADMIN
      })
    } catch {
      setError('faild to create an account')
    } finally {
      setLoading(false)
    }

  }

  return (
    <Segment>
      <SigninComponent
        details={details}
        setDetails={setDetails}
        createAccount={createAccount}
        error={error}
        loading={loading} />
    </Segment>
  );
};

export default Signin;