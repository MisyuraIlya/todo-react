let posts = [
  {
    id: 0,
    name: 'Create app',
    date: '28.09.2021',
    description: 'Fancy program!',
  },
  {
    id: 1,
    name: 'Cooking',
    Date: '28.09.2021',
    description: 'Fancy program!',
  },
  {
    id: 2,
    name: 'Training',
    Date: '28.09.2021',
    description: 'Fancy program!',
  },
  {
    id: 3,
    name: 'Play',
    Date: '28.09.2021',
    description: 'Fancy program!',
  },
  {
    id: 4,
    name: 'Coding',
    Date: '28.09.2021',
    description: 'Fancy program!',
  },
  {
    id: 5,
    name: 'Read book',
    Date: '28.09.2021',
    description: 'Fancy program!',
  },
  {
    id: 6,
    name: 'Sleep',
    Date: '28.09.2021',
    description: 'Fancy program!',
  },
]
  
let historyPosts = [
  {
    id: 0,
    name: 'sleep',
    date: '28.09.2021',
    description: 'Fancy program!',
  },
  {
    id: 1,
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
    
  return delay({page, limit, total: posts.length, data: posts.slice(start, end)}, 1000);
}
  
async function removePost(id) {
  posts = posts.filter(({id: postsID}) => postsID !== id );
  return delay({data: true}, 1000);
}
async function addPosts(title,description) {
  posts.push({name:title,date:'28.09.2021',description:description})
}
  
  
async function donePost(id,name,description) {
  posts = posts.filter(({id: postsID}) => postsID !== id );
  historyPosts.push({name:name, date: '28.09.2021',description:description})
  return delay({data: true}, 1000);
}
  
// -----------------------------------------------
// -------History page logic------------------------
  
async function fetchHistory({ page, limit }) {
  const start = page * limit;
  const end = start + limit;
      
  return delay({page, limit, total: historyPosts.length, data: historyPosts.slice(start, end)}, 1000);
}
  
  
// -----------------------------------------------
  
  
const api = {
  fetchPosts,
  addPosts,
  removePost,
  fetchHistory,
  donePost
};
    
export default api;