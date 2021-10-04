// Global
import { createContext, useState, useContext, useEffect } from 'react';
// Local
import api from '../lib/api';

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

  //LoadTodo
  const loadTodo = async () => {
    setLoading(true);
    try {
      const { data, limit, total } = await api.fetchTodos({...pagination, page});

      setTodos(data);
      setPagination({  limit, total });
    } catch (error) {
      console.error('[state/todo/loadTodo] Failed to load todos', { error });
      setError({ isError: true, message: error.message });
    } finally {
      setLoading(false);
    }
  }

  //CreateTodo
  const createTodo = async (title, description) => {
    try {
      await api.addTodos(title, description);
    } catch (error) {
      console.error('[state/todo/createPost] Failed to load todos', { error });
      setError({ isError: true, message: error.message });
    }
  }


  //Done LOGIC

  const doneTodo = async (id, name, description) => {
    try {
      await api.doneTodo(id, name, description);
    } catch (error) {
      console.error('[state/todo/doneTodo] Failed to load Todo', { error });
      setError({ isError: true, message: error.message });
    }
  }

  //Remove LOGIC
  const removeTodo = async (id) => {
    try {
      await api.removeTodo(id);
    } catch (error) {
      console.error('[state/todo/removeTodo] Failed to Remove Todo', { error });
      setError({ isError: true, message: error.message });
    }
  }

  const paginate = async (page) => {
    setPagination({ page: page, total: null, limit: LIMIT })
  }

  // Pagination

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
    paginate,
    onPageChange 
  };
  return <TodoContex.Provider value={{
    todos,
    loading,
    pagination,
    error,
    methods,
    pagination
  }} {...props} />
}

export { useTodo, TodoProvider };