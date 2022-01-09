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
<<<<<<< HEAD
  const response2 = await Axios(`${API}/subhistory`)
  const data = response2.data.data
  return data
=======
  const response = await fetch(`${API}/subhistory`,{credentials: 'include'});
  const data = await response.json();
  const dataSubHistory = data.data
  return dataSubHistory
>>>>>>> 18b9e13434d8a2be444eec12da6d8949fb63040b
}

const update = async (id, fields) => {
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