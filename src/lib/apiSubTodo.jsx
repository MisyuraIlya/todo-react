//GLOBAL
import { declareTypeAlias } from '@babel/types';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment'
import Axios from 'axios';
//LOCAL
import { DATE_TIME_FORMAT, TODO_STATUS, API } from './enums';
import subtodoslists from './todos-sub'

let subtodos = [...subtodoslists]

// Helpers
const delay = (data, time) => {
  return new Promise((resolve) => setTimeout(() => resolve(data), time));
}

const create =  (id,subDescription) => {
  console.log(id,subDescription)
  Axios.post(API+`/todos/${id}/subtodos`, {
    id,
    subDescription,
  })
}

const read = async () => {
  const response = await fetch(`${API}/subhistory`);
  const data = await response.json();
  const dataSubHistory = data.data
  return dataSubHistory
}

const update = (id, fields) => {
  Axios.put(API+`/subtodos/update/${id}/${fields.status}`)
}


const remove = async (id) => {
  Axios.delete(API+`/subtodos/${id}`)

}

const apiSubTodo = {
  read,
  update,
  create,
  remove
};

export default apiSubTodo;