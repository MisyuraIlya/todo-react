//GLOBAL
import Axios from 'axios';
//LOCAL
import todolists from './todo-list'
import subtodoslists from './todos-sub'



let subtodos = [...subtodoslists]
let todos = [...todolists]

// Helpers
const delay = (data, time) => {
  return new Promise((resolve) => setTimeout(() => resolve(data), time));
}

const create = (title, description) => {
  Axios.post('http://192.168.1.23:3001/todo', {
    title,
    description,
  })
}

const remove = (id) => {
  Axios.delete(`http://192.168.1.23:3001/todo/${id}`)

}

const update = (postid) => {
  Axios.put(`http://192.168.1.23:3001/todo/update/${postid}`)
}

const read = ({ status, page, limit, id }) => {

  return fetch('http://192.168.1.23:3001/todo' )
    .then((response) => {
      return response.json().then((data) => {
        return {data};
      }).catch((err) => {
        console.log(err);
      })
    });

}

//------------------------------------------------------------

const apiTodo = {
  create,
  remove,
  update,
  read,
};

export default apiTodo;