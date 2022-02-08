//GLOBAL
import Axios from 'axios';
//LOCAL
import { API } from './enums';

Axios.defaults.withCredentials = true;

const create = (title, description) => {
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
  const response2 = await Axios(`${API}/todos?status=${status}&page=${page+1}`,{
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  });
  const data = response2.data.data.data
  const total = response2.data.data.total
  const limit = response2.data.data.limit

  const dataSubPromise = data.map((x) => Axios(`${API}/subtodos/${x._id}`))
  const dataSubb = await Promise.all(dataSubPromise);
  const subs = dataSubb.map((x) => (x.data.data))
  const dataSub = subs.map((x) => x).reduce((a, b) => { return a.concat(b) }, [])
  return {
    data,
    limit,
    total,
    page,
    dataSub
  }
}
  
const apiTodo = {
  create,
  remove,
  update,
  read,
};

export default apiTodo;