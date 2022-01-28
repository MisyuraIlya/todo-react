//GLOBAL
import Axios from 'axios';
//LOCAL
import { API } from './enums';

const create = (title, description) => {
  Axios.post(`${API}/todos`, {
    title,
    description,
  })
}

const remove = (_id) => {
  console.log(_id)
  Axios.delete(`${API}/todos/${_id}`)
}

const update = (postid) => {
  console.log(postid)
  Axios.put(`${API}/todos/${postid}`)
}

const read = async ({ page, status }) => {
  const response2 = await Axios(`${API}/todos?status=${status}&page=${page+1}`);
  const data = response2.data.data.data
  const total = response2.data.data.total
  const limit = response2.data.data.limit
  const dataSubPromise = data.map((x) => Axios(`${API}/subtodos/${x._id}`))
  const dataSubb = await Promise.all(dataSubPromise);
  const subs = dataSubb.map((x) => (x.data.data))
  const dataSub = subs.map((x) => x).reduce((a, b) => { return a.concat(b) }, [])
  // console.log(dataSub)
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