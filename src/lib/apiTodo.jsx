//GLOBAL
import Axios from 'axios';
//LOCAL
import todolists from './todo-list'
import subtodoslists from './todos-sub'
import { DATE_TIME_FORMAT, TODO_STATUS, API } from './enums';


let subtodos = [...subtodoslists]
let todos = [...todolists]

// Helpers
const delay = (data, time) => {
  return new Promise((resolve) => setTimeout(() => resolve(data), time));
}

const create = (title, description) => {
  console.log(title)
  console.log(description)
  Axios.post(`${API}/todos`, {
    title,
    description,
  })
}

const remove = (id) => {
  Axios.delete(`${API}/todos/${id}`)

}

const update = (postid) => {
  Axios.put(`${API}/todos/${postid}`)
}

const read = async ({ page, status }) => {
  const response = await fetch(`${API}/todos?status=${status}&page=${page+1}`);
  const datas =  await response.json();  
  const data = datas.data.data
  const total = datas.data.total
  const limit = datas.data.limit
  const dataSubPromise = data.map((x) => fetch(`${API}/subtodos/${x.id}`).then((x) => x.json()))
  const dataSubb = await Promise.all(dataSubPromise);
  const subs = dataSubb.map((x) => (x.data))
  const dataSub = subs.map((x) => x).reduce((a, b) => { return a.concat(b) }, [])
  return {
    data,
    limit,
    total,
    page,
    dataSub
  }
}


  
//------------------------------------------------------------

const apiTodo = {
  create,
  remove,
  update,
  read,
};

export default apiTodo;