//GLOBAL
import { declareTypeAlias } from '@babel/types';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment'
//LOCAL
import { DATE_TIME_FORMAT, TODO_STATUS } from './enums';
import subtodoslists from './todos-sub'

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

const read = async (subid) => {
  const data = subtodos.filter((y) => y.parentID === subid.id)
  return delay({ data }, 200);
}

const update = (subId, fields) => {
  subtodos = subtodos.map(({ id, ...rest }) => id === subId
    ? { id, ...rest, ...fields }
    : { id, ...rest });
  return declareTypeAlias({ data: true }, 200);
}

const remove = async (id) => {
  subtodos = subtodos.filter(({ id: subtodosId }) => id !== subtodosId);
  return delay({ data: true }, 200);
}

const apiSubTodo = {
  read,
  update,
  create,
  remove
};

export default apiSubTodo;

