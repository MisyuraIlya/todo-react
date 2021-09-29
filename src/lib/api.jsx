import moment from 'moment'
import { v4 as uuidv4 } from 'uuid';
let posts = [
  {
    id: uuidv4(),
    name: 'Create app',
    date: '28.09.2021',
    description: 'Fancy program!',
  },
  {
    id: uuidv4(),
    name: 'Cooking',
    Date: '28.09.2021',
    description: 'Fancy program!',
  },
  {
    id: uuidv4(),
    name: 'Training',
    Date: '28.09.2021',
    description: 'Fancy program!',
  },
  {
    id: uuidv4(),
    name: 'Play',
    Date: '28.09.2021',
    description: 'Fancy program!',
  },
  {
    id: uuidv4(),
    name: 'Coding',
    Date: '28.09.2021',
    description: 'Fancy program!',
  },
  {
    id: uuidv4(),
    name: 'Read book',
    Date: '28.09.2021',
    description: 'Fancy program!',
  },
  {
    id: uuidv4(),
    name: 'Sleep',
    Date: '28.09.2021',
    description: 'Fancy program!',
  },
]
  
let historyPosts = [
  {
    id: uuidv4(),
    name: 'sleep',
    date: '28.09.2021',
    description: 'Fancy program!',
  },
  {
    id: uuidv4(),
    name: 'train',
    date: '28.09.2021',
    description: 'Fancy program!',
  }
]
  
  
// Helpers
function delay(data, time) {
  return new Promise((resolve) => setTimeout(() => resolve(data), time));
}
  
// -----------Home page logics-------------------
async function fetchPosts({ page, limit }) {
  const start = page * limit;
  const end = start + limit;
    
  return delay({page, limit, total: posts.length, data: posts.slice(start, end)}, 0);
}
  
async function removePost(id) {
  posts = posts.filter(({id: postsID}) => postsID !== id );
  return delay({data: true}, 1000);
}
async function addPosts(title,description) {
  posts.push({id: uuidv4() + 1 , name:title, date:moment().format('MMMM Do YYYY, h:mm:ss a'),description:description})
}
  
  
async function donePost(id,name,description) {
  posts = posts.filter(({id: postsID}) => postsID !== id );
  historyPosts.push({name:name, date: moment().format('MMMM Do YYYY, h:mm:ss a'),description:description})
  return delay({data: true}, 0);
}
  
// -----------------------------------------------
// -------History page logic------------------------
  
async function fetchHistory({ page, limit }) {
  const start = page * limit;
  const end = start + limit;
      
  return delay({page, limit, total: historyPosts.length, data: historyPosts.slice(start, end)}, 0);
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