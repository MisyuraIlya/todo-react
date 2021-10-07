import moment from 'moment'
import { v4 as uuidv4 } from 'uuid';
import { DATE_TIME_FORMAT, TODO_STATUS } from '../lib/enums';
import todolists from './todo-list'

let todos = [...todolists]

// Helpers
const delay = (data, time) => {
  return new Promise((resolve) => setTimeout(() => resolve(data), time));
}

/* methods
  1. create
*/

const createTodos = async (name, description) => {
  const todo = {
    id: uuidv4(),
    name,
    date: moment().format(DATE_TIME_FORMAT),
    description, status: TODO_STATUS.ACTIVE
  }
  // todos = [...todos,todo]
  todos.push(todo) // todos = [...todos, todo]
}

/*
  2. update
*/

const update = (postid, fields) => {
  todos = todos.map(({ id, ...rest }) => id === postid
    ? { id, ...rest, ...fields }
    : { id, ...rest })
  return delay({ data: true }, 2000);
}

/*
  3. delete
*/

const removeTodo = async (id) => {
  todos = todos.filter(({ id: todosID }) => id !== todosID);
  return delay({ data: true }, 1000);
}

/*
  4. read  
*/

function read({ status, page, limit }) {
  const start = page * limit;
  const end = start + limit;
  const data = todos
    .filter(({ status: s }) => !status || s === status)
    .slice(start, end);
  return delay({ page, limit, total: todos.length, data }, 1000);
}
//------------------------------------------------------------

const api = {
  createTodos,
  removeTodo,
  update,
  read,
};

export default api;