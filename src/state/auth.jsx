import { createContext, useContext, useEffect, useState } from 'react';
import apiAuth from '../lib/apiAuth';
import Cookies from 'universal-cookie';
 
const cookies = new Cookies();


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
  const [LoggedStatus, setLoggetStatus] = useState(false)
  const [User, SetUser] = useState(null)
  const [error, setError] = useState('')
  const [checkbox, setCheckbox] = useState(false)
  //Helers

  const login = async (email, password) => {
    if (email == '' || password == '') {
      return setError('One of the inputs didnt write')
    }
    try {
      const response = await apiAuth.login(email,password)
      console.log(response.data.data.user.id)
      if(response?.data?.data?.accessToken){
        localStorage.setItem('token', response.data.data.accessToken)
        cookies.set('userId', response.data.data.user.id, { path: '/' });
      } 
      setError('')
      setLoading(true)
      setLoggetStatus(true)
      if(response?.data?.data?.user?.name){
        SetUser(response.data.data.user.name)
      } else {
        SetUser(response.data.data[0].name)
      }
    } catch(error) {
      setError(error.response?.data.message)
    } finally {
      setLoading(false)
    }
    
  }

  const registration = async (name, lastname, email, phone, password1, password2) => {
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
      const response = await apiAuth.registration(name, lastname, email, phone, password1)
      console.log(response)
      localStorage.setItem('token', response.data.accessToken)
      if(response.data.status == 200) {
        setSuccess('Registration success verify in email account')
      }
    } catch(error){
      setError(error.response?.data?.message)
    } finally {
      setLoading(false)
    }

  }

  const logOut = async () => {
    try {
      const response = await apiAuth.logOut()
      if(localStorage.getItem('token')){
        localStorage.removeItem('token')
      }
      SetUser(null)
      setError('')
      setLoggetStatus(false)
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
      console.log(data)
      if ( data.status == 400){
        setError(data.data.error)
      } else {
        console.log(data.data.data)
        setSuccess(data.data.data)
      }
      setLoading(true)
    } catch {
      setError('Faild to send mail')
    } finally{
      setLoading(false)
    }
  }

  const verifyEmail = async () => {
    try {
      const data = await apiAuth.verifyEmail()
      if (data.status == 400) {
        setError(data.data.data.msg)
      } else {
        setSuccess(data.data.data.msg)
      }
      setLoading(true)
    } catch {
      setError('Faild to verify email try again')
    } finally {
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
  
    if (localStorage.getItem('token')){
      setLoading(true)
      const response = async () => {
        try{
          const response = await apiAuth.checkAuth();
          localStorage.setItem('token', response.data.data.accessToken)
          setLoggetStatus(true)
          SetUser(response.data.data.user.name)
        }catch (error){
          setError(error.response?.data?.message)
        } finally {
          setLoading(false)
        }
      }
      response();
    }

    
  }, []);

  //Export
  const methodsAuth = {
    login,
    logOut,
    resetPassword,
    NewPassword,
    registration,
    verifyEmail,
  };

  return <AuthContextt.Provider value={{
    loading,
    User,
    success,
    LoggedStatus,
    methodsAuth,
    error,
    checkbox,
    setCheckbox

  }} {...props} />
}

export {useAuth, AuthProvider };