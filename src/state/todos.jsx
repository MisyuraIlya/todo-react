// Global
import { createContext, useState, useContext, useEffect } from 'react';
import moment from 'moment-timezone';
// Local
import apiTodo from '../lib/apiTodo';
import apiSubTodo from '../lib/apiSubTodo'
import { TODO_STATUS, DATE_TIME_FORMAT } from '../lib/enums';
// Defines
const TodoContex = createContext();
const LIMIT = 3;

// React hook
const useTodo = () => {
  const context = useContext(TodoContex);
  if (!context) {
    throw new Error('Can not run without "TodoProvider"');
  }
  return context;
}

const TodoProvider = (props) => {
  // State
  const [todos, setTodos] = useState([]);
  const [subTodo, setSubTodo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [subLoading, setSubLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [pagination, setPagination] = useState({ total: null, limit: LIMIT });
  const [error, setError] = useState({ isError: false, message: '' });

  // Helpers

  const loadTodo = async () => {
    console.log('1')
    setLoading(true);
    try {
      const { limit, total, data } = await apiTodo.read({ ...pagination, page, status: TODO_STATUS.ACTIVE });
      // const tmp = data.map(({ id }) => apiSubTodo.read({ id }))
      // const datasub = await Promise.all(tmp)
      // const add = datasub.map(({ data }) => data).reduce((a, b) => { return a.concat(b) }, [])
      setTodos(data);
      // setSubTodo(add);
      setPagination({ limit, total });
    } catch (error) {
      console.error('[state/todo/loadTodo] Failed to load todos', { error });
      setError({ isError: true, message: error.message });
    } finally {
      setLoading(false);
    }
  }

  const loadSubTodo = async () => {
    console.log('2')
    setSubLoading(true);
    try {
      const { data } = await apiTodo.read({ ...pagination, page, status: TODO_STATUS.ACTIVE });
      const tmp = data.map(({ id }) => apiSubTodo.read({ id }))
      const datasub = await Promise.all(tmp)
      const add = datasub.map(({ data }) => data).reduce((a, b) => { return a.concat(b) }, [])
      // setTodos(data);
      setSubTodo(add);
      // setPagination({ limit, total });
    } catch (error) {
      console.error('[state/todo/loadTodo] Failed to load todos', { error });
      setError({ isError: true, message: error.message });
    } finally {
      setSubLoading(false);
    }

  }

  const createTodo = async (title, description) => {
    try {
      await apiTodo.create(title, description);
    } catch (error) {
      console.error('[state/todo/createPost] Failed to load todos', { error });
      setError({ isError: true, message: error.message });
    }
  }

  const doneTodo = async (id) => {
    try {
      await apiTodo.update(id, { status: TODO_STATUS.DONE, ended: moment().format(DATE_TIME_FORMAT) });
    } catch (error) {
      console.error('[state/todo/doneTodo] Failed to load Todo', { error });
      setError({ isError: true, message: error.message });
    }
  }

  const removeTodo = async (id) => {
    try {
      await apiTodo.remove(id);
    } catch (error) {
      console.error('[state/todo/removeTodo] Failed to Remove Todo', { error });
      setError({ isError: true, message: error.message });
    }
  }

  const onPageChange = async (page) => {
    setPage(page);
  }

  const doneSubUpdate = async (id, status) => {
    if (status === true) {
      try {
        await apiSubTodo.update(id, { status: TODO_STATUS.DONE, ended: moment().format(DATE_TIME_FORMAT) })
      } catch (error) {
        console.error('[state/todo/doneSubUpdate] Failed to load Todo', { error });
        setError({ isError: true, message: error.message });
      }
    } else {
      try {
        await apiSubTodo.update(id, { status: TODO_STATUS.ACTIVE, created: moment().format(DATE_TIME_FORMAT), ended: null })
      } catch (error) {
        console.error('[state/todo/doneSubUpdate] Failed to load Todo', { error });
        setError({ isError: true, message: error.message });
      }
    }
  }

  const createSubTodo = async (id,subDescription) => {
    try {
      await apiSubTodo.create(id,subDescription);
    } catch (error) {
      console.error('[state/todo/createSubTodo] Failed to load createSubTodo11', { error });
      setError({ isError: true, message: error.message });
    }
  }

  const removeSubTodo = async (id) => {
    try {
      await apiSubTodo.remove(id);
    } catch (error) {
      console.error('[state/todo/removeSubTodo] Failed to removeSubTodo', { error });
      setError({ isError: true, message: error.message });
    }
  }

  // Logic
  useEffect(() => loadSubTodo(), [page]);
  useEffect(() => loadTodo(), [page]);

  // Export
  const methods = {
    createTodo,
    loadTodo,
    doneTodo,
    removeTodo,
    onPageChange,
    doneSubUpdate,
    createSubTodo,
    removeSubTodo,
    loadSubTodo,
  };
  return <TodoContex.Provider value={{
    todos,
    loading,
    pagination,
    error,
    methods,
    page,
    subTodo,
    subLoading
  }} {...props} />
}

export { useTodo, TodoProvider };