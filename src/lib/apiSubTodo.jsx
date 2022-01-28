//GLOBAL
import Axios from 'axios';
//LOCAL
import { API } from './enums';

const create =  (id,subDescription) => {
  Axios.post(`${API}/todos/${id}/subtodos`, {
    id,
    subDescription,
  })
}

const read = async () => {
  const response2 = await Axios(`${API}/subhistory`)
  const data = response2.data.data
  return data
}

const update = async (id, fields) => {
  console.log(id,fields)
  Axios.put(`${API}/subtodos/update/${id}/${fields.status}`)
}

const remove = async (id) => {
  Axios.delete(`${API}/subtodos/${id}`)

}

const apiSubTodo = {
  read,
  update,
  create,
  remove
};

export default apiSubTodo;