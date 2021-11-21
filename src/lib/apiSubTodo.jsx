//GLOBAL
import { declareTypeAlias } from '@babel/types';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment'
import Axios from 'axios';
//LOCAL
import { DATE_TIME_FORMAT, TODO_STATUS } from './enums';
import subtodoslists from './todos-sub'

let subtodos = [...subtodoslists]

// Helpers
const delay = (data, time) => {
  return new Promise((resolve) => setTimeout(() => resolve(data), time));
}

const create =  (id,subDescription) => {

  Axios.post('http://192.168.1.23:3001/subtodo', {
    id,
    subDescription,
  })
}

const read =  (subid) => {
  return fetch('http://192.168.1.23:3001/subtodo' )
    .then((response) => {
      return response.json().then((data) => {
        console.log(data)
        return {data};
      }).catch((err) => {
        console.log(err);
      })
    });
}

const update = (subId, fields) => {
  subtodos = subtodos.map(({ id, ...rest }) => id === subId
    ? { id, ...rest, ...fields }
    : { id, ...rest });
  return declareTypeAlias({ data: true }, 200);
}

const remove = async (id) => {
  subtodos = subtodos.filter(({ id: subtodosId }) => id !== subtodosId);
  return delay({ data: true }, 200);
}

const apiSubTodo = {
  read,
  update,
  create,
  remove
};

export default apiSubTodo;

