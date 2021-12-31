// import Axios from 'axios';
// import {API} from './enums';

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

// const read = async (email, password) => {
//   await Axios.get(`${API}/auth/signin?email=${email}&password=${password}`).then(res => {
//     console.log(res)
//     console.log(res.status)
//   }).catch(error => {
//     if (error.response) {
//       console.log(error.response.data);
//       return error.response.data
//     }
//   })
// }

// const apiAuth = {
//   create,
//   read
// }
// export default apiAuth;