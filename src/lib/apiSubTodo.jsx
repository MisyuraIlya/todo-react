import { declareTypeAlias } from '@babel/types';
import subtodoslists from './todos-sub'
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment'
import { DATE_TIME_FORMAT, TODO_STATUS } from './enums';
let subtodos = [...subtodoslists]

// Helpers
const delay = (data, time) => {
  return new Promise((resolve) => setTimeout(() => resolve(data), time));
}

const create = async (subDescription) => {
  const subTodo = {
    id: uuidv4(),
    // parentId: id,
    created: moment().format(DATE_TIME_FORMAT),
    ended: null,
    subDescription,
    status: TODO_STATUS.ACTIVE
  }
  subtodos = [...subtodos, subTodo]
  console.log(subtodos)
}

const read = async (x) => {
  const data = subtodos.filter((y) => y.parentID === x.id)
  return delay({ data }, 200);
}

const update = (subId, fields) => {
  subtodos = subtodos.map(({ id, ...rest }) => id === subId
    ? { id, ...rest, ...fields }
    : { id, ...rest });
  return declareTypeAlias({ data: true }, 200);
}

const apiSubTodo = {
  read,
  update,
  create
};

export default apiSubTodo;

/*
filter((id) => {
console.log(id);
return id
})
*/