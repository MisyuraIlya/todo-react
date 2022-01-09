<<<<<<< HEAD
import Axios from 'axios';
import {API} from './enums';
=======
import React from 'react';
import Axios from 'axios';
import {API} from './enums';
import { useLocation } from 'react-router-dom';

// const create = async (name, lastname, email, password) => {
//   await Axios.post(`${API}/auth/signup`, {
//     name,
//     lastname,
//     email,
//     password
//   }).catch(error => {
//     if (error.response) {
//       console.log(error.response.data);
//       return error.response.data
//     }
//   })
// }
>>>>>>> 18b9e13434d8a2be444eec12da6d8949fb63040b

Axios.defaults.withCredentials = true;

const createAccount = async (name, lastname, email,phone, password) => {
<<<<<<< HEAD
=======
  console.log(name, lastname, email,phone, password)
>>>>>>> 18b9e13434d8a2be444eec12da6d8949fb63040b
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
<<<<<<< HEAD

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

=======
  return data
}

// Axios.post(`${API}/send-email/`, {
//   email
// }).then((response) => {
//   console.log(response)
// }).catch(error => {
//   console.log(error)
// })



>>>>>>> 18b9e13434d8a2be444eec12da6d8949fb63040b
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
<<<<<<< HEAD
=======
  
>>>>>>> 18b9e13434d8a2be444eec12da6d8949fb63040b
}

const logOut = async () => {
  await Axios.get(`${API}/logout`).then((response) => {
  }).catch( (err) => {return err.response})
}

const ResetPassword = async (email) => {
<<<<<<< HEAD
=======
  console.log(email)
>>>>>>> 18b9e13434d8a2be444eec12da6d8949fb63040b
  const response = await Axios.post(`${API}/reset-password`, {
    email : email
  }).catch((err) => {
    return err.response
  } )
  return response
}

const NewPassword = async (password) => {
<<<<<<< HEAD
  const queryParams = new URLSearchParams(window.location.search);
  const token = queryParams.get('token');
=======
  console.log('start1s')
  const queryParams = new URLSearchParams(window.location.search);
  const token = queryParams.get('token');
  console.log(token)
>>>>>>> 18b9e13434d8a2be444eec12da6d8949fb63040b
  const data = await Axios.post(`${API}/update-password?token=${token}`, {
    token: token,
    password: password
  }).catch((err) => {
    return err.response
  })
<<<<<<< HEAD
=======
  console.log(data)
>>>>>>> 18b9e13434d8a2be444eec12da6d8949fb63040b
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