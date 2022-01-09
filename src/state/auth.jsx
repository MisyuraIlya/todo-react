import { createContext, useContext, useEffect, useState } from 'react';
import apiAuth from '../lib/apiAuth';

const AuthContextt = createContext();

// React hook
const useAuth = () => {
  const context = useContext(AuthContextt);
  if (!context) {
    throw new Error('can not run without "AuthProvider"1')
  }
  return context;
}

const AuthProvider = (props) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [LoggedStatus, setLoggetStatus] = useState(null)
  const [error, setError] = useState('')
  const [checkbox, setCheckbox] = useState(false)
  
  //Helers
  const login = async (email, password) => {
    if (email == '' || password == '') {
      return setError('One of the inputs didnt write')
    }
    try {
      const data = await apiAuth.read(email,password)
      await apiAuth.signinCheck()
      setError('')
      setLoading(true)
      if (data.data.status == 400) {
        setError(data.data.error)
      } else {
        setLoggetStatus(data.data[0].name)
        setSuccess(data.data[0].name)
      }
    } catch {
      setError('faild to login')
    } finally {
      setLoading(false)
    }
    
  }

  const createAccount = async (name, lastname, email, phone, password1, password2) => {
    if (password1 !== password2) {
      return setError('passwords didnt exist')
    }

    if (name === '' || lastname === '' || email === '' || phone === '' || password1 === '' || password2 === '') {
      return setError('One of the inputs not seted')
    }

    if (checkbox === false) {
      return setError('You need to agree with our conditions')
    }
    try {
      setLoading(true)
      const data = await apiAuth.createAccount(name, lastname, email, phone, password1)
      if(data.status == 200) {
        setSuccess(data.data.data)
      } else if(data.status == 400) {
        setError(data.error)
      }else {
        const errors = []
        const result = data.error.flatMap(Object.keys);
        if ( result.includes('phone') ){
          errors.push('Phone contain caracters')
        } 
        if ( result.includes('email')) {
          errors.push('Email is not valid')
        } 
        if ( result.includes('password') ) {
          errors.push('password need contain minimum 5 caracthers')
        } 
        if ( result.includes('lastname')) {
          errors.push('lastname contain numbers')
        }
        if (result.includes('name')) {
          errors.push('name contain numbers')
        }
        setError(errors.join())
      }
    } catch {
      setError('faild to create an account')
    } finally {
      setLoading(false)
    }

  }

  const logOut = async () => {
    try {
      const data = await apiAuth.logOut()
      setError('')
      setLoggetStatus(null)
      setSuccess('')
      setLoading(true)
    } catch {
      setError('faild to logout')
    } finally {
      setLoading(false)
    }
  }

  const resetPassword = async (email) => {
    try{ 
      const data = await apiAuth.ResetPassword(email)
      if ( data.status == 400){
        setError(data.data.data.msg)
      } else {
        setSuccess(data.data.data.msg)
      }
      setLoading(true)
    } catch {
      setError('Faild to send mail')
    } finally{
      setLoading(false)
    }
  }

  const NewPassword = async (password, password2) => {
    if (password !== password2){
      return setError('passwords didnt exists')
    }

    if (password === '' || password2 === ''){
      return setError('one of the inputs not writen')
    }
    try {
      const data = await apiAuth.NewPassword(password) 
      if (data.data.status == 200) {
        setSuccess(data.data.data)
      } else {
        setError(data.data.error)
      }
      setLoading(true)
    } catch{
      setError('Cant create new password')
    } finally {
      setLoading(false)
    }
  }
  //Logic
  useEffect(() => {
    const response = async () => {
      const data = await apiAuth.signinCheck();
      setLoggetStatus(data)
    }
    response();
    
  }, [LoggedStatus]);

  //Export
  const methodsAuth = {
    login,
    logOut,
    resetPassword,
    NewPassword,
    createAccount,
  };

  return <AuthContextt.Provider value={{
    loading,
    success,
    LoggedStatus,
    methodsAuth,
    error,
    checkbox,
    setCheckbox

  }} {...props} />
}

export {useAuth, AuthProvider };