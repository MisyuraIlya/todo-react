import moment from 'moment'
import { v4 as uuidv4 } from 'uuid';
let posts = [
  {
    id: "f1d28c0d-a29f-41a9-afb3-7f8d1f84ef63",
    name: 'Create app',
    date: '28.09.2021',
    description: 'Fancy program!',
    status: 'IN PROGRESS',
  },
  {
    id: "fa94d90a-1f03-404d-a9fc-1d2df7ef7052",
    name: 'Cooking',
    date: '28.09.2021',
    description: 'Fancy program!',
    status: 'DONE',
  },
  {
    id: "320e2ed6-06ef-4ba5-aa33-db3b26e859f7",
    name: 'Training',
    date: '28.09.2021',
    description: 'Fancy program!',
    status: 'IN PROGRESS',
  },
  {
    id: "1cea0bfe-4e2a-4038-b3fc-5d3a83f1fefb",
    name: 'Play',
    date: '28.09.2021',
    description: 'Fancy program!',
    status: 'DONE',
  },
  {
    id: "1cea0bfe-4e2a-4038-b3fc-5d3a83f1fefb",
    name: 'Coding',
    date: '28.09.2021',
    description: 'Fancy program!',
    status: 'IN PROGRESS',
  },
  {
    id: "ce4ab3c5-d1bb-4289-8750-e11e5d291b5e",
    name: 'Read book',
    date: '28.09.2021',
    description: 'Fancy program!',
    status: 'DONE',
  },
  {
    id: "b0aa43e7-3b6a-43fc-bc3f-bf77f7a37937",
    name: 'Sleep',
    date: '28.09.2021',
    description: 'Fancy program!',
    status: 'DONE',
  },
]




// Helpers
function delay(data, time) {
  return new Promise((resolve) => setTimeout(() => resolve(data), time));
}

// -----------Home page logics-------------------
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
  console.log(posts)
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
async function fetchHistory({ page, limit }) {
  const start = page * limit;
  const end = start + limit;
  const data = posts
    .filter(({ status }) => status === 'DONE')
    .slice(start, end)
  return delay({ page, limit, total: posts.length, data }, 1000);
}
// -----------------------------------------------
const api = {
  fetchPosts,
  addPosts,
  removeTodo,
  fetchHistory,
  doneTodo,
};

export default api;