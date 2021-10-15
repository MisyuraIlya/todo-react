import subtodoslists from './todos-sub'

let subtodos = [...subtodoslists]

// Helpers
const delay = (data, time) => {
  return new Promise((resolve) => setTimeout(() => resolve(data), time));
}

const read = async (x) => {
  const data = subtodos.filter((y) => y.parentID === x.id)
  console.log('1',data)
  return delay({ data }, 200);
}

const apiSubTodo = {
  read,
};

export default apiSubTodo;

/*
filter((id) => {
console.log(id);
return id
})
*/