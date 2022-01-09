import Axios from 'axios';
import {API} from './enums';

Axios.defaults.withCredentials = true;

const createAccount = async (name, lastname, email,phone, password) => {
  const data = await Axios.post(`${API}/auth/signup`, {
    name,
    lastname,
    email,
    phone,
    password
  }).catch(error => {
    if (error.response) {
      return error.response.data
    }
  })

  if(data.data.status == 200){
    const mail = await Axios.post(`${API}/send-email`, {
      email
    }).catch( error => {
      if(error.response) {
        return error.response.data
      }
    })
  }
  
  return data
}

const read = async (email, password) => {
  const response = await Axios.post(`${API}/auth/signin`, {
    email : email,
    password : password
  }).then(response =>{
    return response;
  }).catch ((err) => {return err.response})
  const data = response
  return data
}

const signinCheck = async () => {
  const data = await Axios.get(`${API}/auth/signin`)
  if (data.data.loggedIn == true) {
    return data.data.user[0].name
  }
}

const logOut = async () => {
  await Axios.get(`${API}/logout`).then((response) => {
  }).catch( (err) => {return err.response})
}

const ResetPassword = async (email) => {
  const response = await Axios.post(`${API}/reset-password`, {
    email : email
  }).catch((err) => {
    return err.response
  } )
  return response
}

const NewPassword = async (password) => {
  const queryParams = new URLSearchParams(window.location.search);
  const token = queryParams.get('token');
  const data = await Axios.post(`${API}/update-password?token=${token}`, {
    token: token,
    password: password
  }).catch((err) => {
    return err.response
  })
  return data
}


const apiAuth = {
  read,
  signinCheck,
  logOut,
  ResetPassword,
  NewPassword,
  createAccount
}
export default apiAuth;