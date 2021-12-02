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

const create =  (id,subdescription) => {
  console.log(id,subdescription)
  Axios.post(API+`/todos/${id}/subtodos/${subdescription}`, {
    id,
    subdescription,
  })
}

const read = async () => {
  // const response = fetch('http://dev.local:3001/subtodo');
  const responseSubHistory = fetch(API+'/subhistory');
  // const dataa = (await response).json();
  // const data = await dataa;
  const dataaSubHistory = (await responseSubHistory).json();
  const dataSubHistory = await dataaSubHistory;
  // console.log(dataSubHistory)
  // console.log('aa')
  return {dataSubHistory}
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