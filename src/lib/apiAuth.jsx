
import Axios from 'axios';
import {API} from './enums';

const $api = Axios.create({
  withCredentials: true,
  baseURL: API
})

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
  return config;
})
Axios.defaults.withCredentials = true;

const registration = async (name, lastname, email,phone, password) => {
  const data = await Axios.post(`${API}/registration`, {
    name,
    lastname,
    email,
    phone,
    password
  })

  return data
}

const login = async (email, password) => {
  const response = await Axios.post(`${API}/login`, {
    email : email,
    password : password
  })
  return response
}

const checkAuth = async () => {
  const response = await Axios.get(`${API}/refresh`)
  return response
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

const verifyEmail = async () => {
  const queryParams = new URLSearchParams(window.location.search);
  const token = queryParams.get('token');
  const response = await Axios.get(`${API}/verify-email?token=${token}`)
    .catch((err) => {
      return err.response
    })
  return response
}

const NewPassword = async (password) => {
  const queryParams = new URLSearchParams(window.location.search);
  const token = queryParams.get('token');
  console.log(token)
  const data = await Axios.post(`${API}/update-password?token=${token}`, {
    token: token,
    password: password
  }).catch((err) => {
    return err.response
  })
  return data
}

const apiAuth = {
  login,
  checkAuth,
  logOut,
  ResetPassword,
  NewPassword,
  registration,
  verifyEmail
}
export default apiAuth;