import moment from 'moment'
import { v4 as uuidv4 } from 'uuid';
import { DATE_TIME_FORMAT } from '../lib/enums';

let todos = [
  {
    id: '1cea0bfe-4e2a-4038-b3fc-5d3a83f1fefb',
    name: 'Coding',
    date: '21:00:00, 27.09.2021',
    description: 'Fancy program!',
    status: 'IN PROGRESS',
  },
  {
    id: 'ce4ab3c5-d1bb-4289-8750-e11e5d291b5e',
    name: 'Read book',
    date: '21:00:00, 27.09.2021',
    description: 'Fancy program!',
    status: 'DONE',
  },
  {
    id: 'ce4ab3c5-d1bb-4289-8750-e11e5d291b5z',
    name: 'Training',
    date: '21:00:00, 27.09.2021',
    description: 'Fancy program!',
    status: 'DONE',
  },
  {
    id: 'ce4ab3c5-d1bb-4289-8750-e11e5d291b5y',
    name: 'RUN',
    date: '21:00:00, 27.09.2021',
    description: 'Fancy program!',
    status: 'IN PROGRESS',
  },
  {
    id: 'ce4ab3c5-d1bb-4289-8750-e11e5d291b5g',
    name: 'play',
    date: '21:00:00, 27.09.2021',
    description: 'Fancy program!',
    status: 'DONE',
  }
];

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
    description, status: 'IN PROGRESS'
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
  console.log(id)
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