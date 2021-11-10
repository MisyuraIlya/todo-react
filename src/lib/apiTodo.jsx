//GLOBAL
import moment from 'moment'
import { v4 as uuidv4 } from 'uuid';
import Axios from 'axios'
//LOCAL
import { DATE_TIME_FORMAT, TODO_STATUS } from './enums';
import todolists from './todo-list'
import subtodoslists from './todos-sub'





// api url
const URL = 'http://localhost:8001/';
  

const create = async (title, description) => {
  // const todo = {
  //   id: uuidv4(),
  //   title,
  //   created: moment().format(DATE_TIME_FORMAT),
  //   description,
  //   status: TODO_STATUS.ACTIVE
  // }
  // todos = [...todos, todo]
}

const remove = async (id) => {
  // todos = todos.filter(({ id: todosID }) => id !== todosID);
  // return delay({ data: true }, 200);
}

const update = (postid, fields) => {
  todos = todos.map(({ id, ...rest }) => id === postid
    ? { id, ...rest, ...fields }
    : { id, ...rest })
  return delay({ data: true }, 200);
}

const read = async ({ status, page, limit, id }) => {

  const response = await fetch(`${url}todos?status=${status}`);
        
  const start = page * limit;
  const end = start + limit;
  const total = todos.filter(({ status: s }) => !status || s === status)
  const data = todos
    .filter(({ status: s }) => !status || s === status)
    .slice(start, end);
  const dataSub = subtodos.filter(({ parentID }) => id === parentID);
  return delay({ page, limit, total: total.length, data, dataSub }, 200);
}
//------------------------------------------------------------

const apiTodo = {
  create,
  remove,
  update,
  read,
};

export default apiTodo;