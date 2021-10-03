import moment from 'moment'
import { v4 as uuidv4 } from 'uuid';

import posts from './todo-list';

/* methods
  1. create
  2. update
  3. delete
  4. read
*/


function read(status, {page, limit}) {

}

function update(id, fields) {
  posts = posts.map(({ id , ...rest }) => id === postid 
    ? { id, ...rest, ...fields }
    : { id, ...rest })
  return delay({ data: true }, 2000);
}

// Helpers
function delay(data, time) {
  return new Promise((resolve) => setTimeout(() => resolve(data), time));
}

// -----------Home page logics-------------------
async function fetchHistory({ page, limit }) {
  const start = page * limit;
  const end = start + limit;
  const data = posts
    .filter(({ status }) => status === 'DONE');

  return delay({ limit, total: data.length, data: data.slice(start, end) }, 1000);
}

async function fetchPosts({ page, limit }) {
  const start = page * limit;
  const end = start + limit;
  const data = posts
    .filter(({ status }) => status === 'IN PROGRESS')
    .slice(start, end)
  return delay({ page, limit, total: posts.length, data }, 2000);
}

async function removeTodo(id) {
  posts = posts.filter(({ id: postsID }) => postsID !== id);
  return delay({ data: true }, 1000);
}
async function addPosts(title, description) {
  posts.push({ id: uuidv4() , name: title, date: moment().format('DD.MM.YYYY'), description, status:"IN PROGRESS" })
  console.log(posts)
}

async function doneTodo(postid) {
  posts = posts.map(({ id , ...rest }) => id === postid ? { id, ...rest, status: "DONE" } : { id, ...rest })
  return delay({ data: true }, 2000);
}

// {
//   id: uuidv4(),
//   name: 'Training',
//   Date: '28.09.2021',
//   description: 'Fancy program!',
//   status: 'IN PROGRESS',
// },
// -----------------------------------------------
// -------History page logic------------------------

// -----------------------------------------------
const api = {
  fetchPosts,
  addPosts,
  removeTodo,
  fetchHistory,
  doneTodo,
};

export default api;