import moment from 'moment'
import { v4 as uuidv4 } from 'uuid';
import { DATE_TIME_FORMAT, TODO_STATUS } from '../lib/enums';
import todolists from './todo-list'

let todos = [...todolists]

// Helpers
const delay = (data, time) => {
  return new Promise((resolve) => setTimeout(() => resolve(data), time));
}

const create = async (name, description) => {
  const todo = {
    id: uuidv4(),
    name,
    date: moment().format(DATE_TIME_FORMAT),
    description, status: TODO_STATUS.ACTIVE
  }
  todos = [...todos, todo]
}

const remove = async (id) => {
  todos = todos.filter(({ id: todosID }) => id !== todosID);
  return delay({ data: true }, 200);
}

const update = (postid, fields) => {
  todos = todos.map(({ id, ...rest }) => id === postid
    ? { id, ...rest, ...fields }
    : { id, ...rest })
  return delay({ data: true }, 200);
}

const read = async ({ status, page, limit }) => {
  const start = page * limit;
  const end = start + limit;
  const total = todos.filter(({ status: s }) => !status || s === status )
  const data = todos
    .filter(({ status: s }) => !status || s === status)
    .slice(start, end);
  return delay({ page, limit, total: total.length, data }, 200);
}
//------------------------------------------------------------

const api = {
  create,
  remove,
  update,
  read,
};

export default api;