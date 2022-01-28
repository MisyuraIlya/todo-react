// Global
import { createContext, useState, useContext, useEffect } from 'react';
import moment from 'moment-timezone';
// Local
import apiTodo from '../lib/apiTodo';
import apiSubTodo from '../lib/apiSubTodo'
import { TODO_STATUS, DATE_TIME_FORMAT } from '../lib/enums';
// Defines
const TodoContex = createContext();

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
  const [paginationTotal, setPaginationTotal] = useState(null);
  const [paginationLimit, setPaginationLimit] = useState(null);
  const [paginationTotalPages, setPaginationTotalPages] = useState(0)
  const [error, setError] = useState({ isError: false, message: '' });
  // Helpers

  const loadTodo = async () => {
    setLoading(true);
    try {
      const { data, limit, total } = await apiTodo.read({ page, status: TODO_STATUS.ACTIVE });
      setTodos(data);
      setPaginationTotal(total);
      setPaginationLimit(limit);
      const totalPages = Math.ceil(total / limit);
      setPaginationTotalPages(totalPages)
    } catch (error) {
      console.error('[state/todo/loadTodo] Failed to load todos', { error });
      setError({ isError: true, message: error.message });
    } finally {
      setLoading(false);
    }
  }
   
  const loadSubTodo = async () => {
    setSubLoading(true);
    try {
      const { dataSub } = await apiTodo.read({  page, status: TODO_STATUS.ACTIVE });
      const end = dataSub.map((x) => x)
      setSubTodo(dataSub);
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

  const removeTodo = async (_id) => {
    try {
      await apiTodo.remove(_id);
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
        setError({ isError: true, message: error.message });
      }
    } else {
      try {
        await apiSubTodo.update(id, { status: TODO_STATUS.ACTIVE, created: moment().format(DATE_TIME_FORMAT), ended: null })
      } catch (error) {
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
    paginationTotal,
    paginationLimit,
    paginationTotalPages,
    error,
    methods,
    page,
    subTodo,
    subLoading
  }} {...props} />
}

export { useTodo, TodoProvider };