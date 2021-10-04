import moment from 'moment'
import { v4 as uuidv4 } from 'uuid';

import todos from './todo-list';

/* methods
  1. create
  2. update
  3. delete
  4. read
*/


function read(status, { page, limit }) {

}

const update = (id, fields) => {
  todos = todos.map(({ id, ...rest }) => id === postid
    ? { id, ...rest, ...fields }
    : { id, ...rest })
  return delay({ data: true }, 2000);
}

// Helpers
const delay = (data, time) => {
  return new Promise((resolve) => setTimeout(() => resolve(data), time));
}

const fetchHistory = async ({ page, limit }) => {
  const start = page * limit;
  const end = start + limit;
  const data = todos
    .filter(({ status }) => status === 'DONE');

  return delay({ limit, total: data.length, data: data.slice(start, end) }, 1000);
}

const fetchTodos = async ({ page, limit }) => {
  const start = page * limit;
  const end = start + limit;
  const data = todos
    .filter(({ status }) => status === 'IN PROGRESS');
  return delay({ limit, total: data.length, data: data.slice(start, end) }, 1000);
}

const removeTodo = async (id) => {
  todos = todos.filter(({ id: todosID }) => todosID !== id);
  return delay({ data: true }, 1000);
}
const addTodos = async (title, description) => {
  todos.push({ id: uuidv4(), name: title, date: moment().format('DD.MM.YYYY'), description, status: "IN PROGRESS" })
}

const doneTodo = async (postid) => {
  console.log(postid)
  todos = todos.map(({ id, ...rest }) => id === postid ? { id, ...rest, status: "DONE" } : { id, ...rest })
  console.log(todos)
  return delay({ data: true }, 2000);
}


const api = {
  fetchTodos,
  addTodos,
  removeTodo,
  fetchHistory,
  doneTodo,
};

export default api;