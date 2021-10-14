import subtodoslists from './todos-sub'

let subtodos = [...subtodoslists]

// Helpers
const delay = (data, time) => {
  return new Promise((resolve) => setTimeout(() => resolve(data), time));
}

const read = async ({ id }) => {

  const dataSub = subtodos.filter(({ parentID }) => id === parentID);
  // console.log(dataSub)
  return delay({ dataSub }, 200);
}

const apiSubTodo = {
  read,
};

export default apiSubTodo;