// Global
import { createContext, useState, useContext, useEffect } from 'react';
// Local
import api from '../lib/api';

// Defines
const TodoContex = createContext();
const LIMIT = 10;

// React hook
const useTodo = () => {
  const context = useContext(TodoContex);
  if (!context) {
    throw new Error('Can not run without "TodoProvider"');
  }

  return context;
}


`SELECT * FORM posts WHERE status='DONE' LIMIT 10;`

const TodoProvider = (props) => {
  // State
  const [todos, setTodos] = useState([]);
  // const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({ page: 0, total: null, limit: LIMIT });
  const [error, setError] = useState({ isError: false, message: '' });
  const [overlay, setOverlay] = useState(false)



  // Helpers

  //LoadTodo
  async function loadTodo() {
    setOverlay(true);
    try {
      const { data, page, limit, total } = await api
        .fetchPosts({ page: pagination.page, limit: pagination.limit });

      setTodos(data);
      setPagination({ page, limit, total });
    } catch (error) {
      console.error('[state/todo/loadTodo] Failed to load posts', { error });
      setError({ isError: true, message: error.message });
    } finally {
      setOverlay(false);
    }
  }

  //CreateTodo
  async function createTodo(title, description) {
    try {
      await api.addPosts(title, description);
    } catch (error) {
      console.error('[state/todo/createPost] Failed to load posts', { error });
      setError({ isError: true, message: error.message });
    }
  }





  // Logic
  useEffect(() => loadTodo(), [])

  // Export
  const methods = { createTodo, loadTodo };
  return <TodoContex.Provider value={{ todos, overlay, pagination, error, methods }} {...props} />
}

export { useTodo, TodoProvider };