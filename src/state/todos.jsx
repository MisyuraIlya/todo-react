// Global
import { createContext, useState, useContext, useEffect } from 'react';
// Local
import api from '../lib/api';
import { TODO_STATUS } from '../lib/enums';
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
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [pagination, setPagination] = useState({ total: null, limit: LIMIT });
  const [error, setError] = useState({ isError: false, message: '' });

  // Helpers

  const loadTodo = async () => {
    setLoading(true);
    try {
      const { limit, total, data } = await api.read({ ...pagination, page, status: TODO_STATUS.ACTIVE });
      setTodos(data);
      setPagination({ limit, total });
    } catch (error) {
      console.error('[state/todo/loadTodo] Failed to load todos', { error });
      setError({ isError: true, message: error.message });
    } finally {
      setLoading(false);
    }
  }

  const createTodo = async (title, description) => {
    try {
      await api.create(title, description);
    } catch (error) {
      console.error('[state/todo/createPost] Failed to load todos', { error });
      setError({ isError: true, message: error.message });
    }
  }

  const doneTodo = async (id) => {
    try {
      await api.update(id, { status: TODO_STATUS.DONE });
    } catch (error) {
      console.error('[state/todo/doneTodo] Failed to load Todo', { error });
      setError({ isError: true, message: error.message });
    }
  }

  const removeTodo = async (id) => {
    try {
      await api.remove(id);
    } catch (error) {
      console.error('[state/todo/removeTodo] Failed to Remove Todo', { error });
      setError({ isError: true, message: error.message });
    }
  }

  const onPageChange = async (page) => {
    setPage(page);
  }

  // Logic
  useEffect(() => loadTodo(), [])
  useEffect(() => loadTodo(), [page]);

  // Export
  const methods = {
    createTodo,
    loadTodo,
    doneTodo,
    removeTodo,
    onPageChange
  };
  return <TodoContex.Provider value={{
    todos,
    loading,
    pagination,
    error,
    methods,
    page,
  }} {...props} />
}

export { useTodo, TodoProvider };