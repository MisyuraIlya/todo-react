import moment from 'moment'
import { v4 as uuidv4 } from 'uuid';
let posts = [
  {
    id: uuidv4(),
    name: 'Create app',
    date: '28.09.2021',
    description: 'Fancy program!',
    status: 'IN PROGRESS',
  },
  {
    id: uuidv4(),
    name: 'Cooking',
    Date: '28.09.2021',
    description: 'Fancy program!',
    status: 'DONE',
  },
  {
    id: uuidv4(),
    name: 'Training',
    Date: '28.09.2021',
    description: 'Fancy program!',
    status: 'IN PROGRESS',
  },
  {
    id: uuidv4(),
    name: 'Play',
    Date: '28.09.2021',
    description: 'Fancy program!',
    status: 'DONE',
  },
  {
    id: uuidv4(),
    name: 'Coding',
    Date: '28.09.2021',
    description: 'Fancy program!',
    status: 'IN PROGRESS',
  },
  {
    id: uuidv4(),
    name: 'Read book',
    Date: '28.09.2021',
    description: 'Fancy program!',
    status: 'DONE',
  },
  {
    id: uuidv4(),
    name: 'Sleep',
    Date: '28.09.2021',
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

async function removePost(id) {
  posts = posts.filter(({ id: postsID }) => postsID !== id);
  return delay({ data: true }, 1000);
}
async function addPosts(title, description) {
  posts.push({ id: uuidv4() + 1, name: title, date: moment().format(), description })
}

async function donePost(id, name, description) {
  posts = posts.filter(({ id: postsID }) => postsID !== id);
  historyPosts.push({ name: name, date: moment().format(), description })
  return delay({ data: true }, 0);
}

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
  removePost,
  fetchHistory,
  donePost,
};

export default api;