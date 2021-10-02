//Global
import { createContext, useState, useContext, useEffect } from 'react';

//Local
import api from '../lib/api';

// Defines
const HistoryContext = createContext();
const LIMIT = 10;

//React hook

const useHistory = () => {
  const context = useContext(HistoryContext)
  if (!context) {
    throw new Error('Can not run without "TodoProvider"');
  }

  return context;
}

const HistoryProvider = (props) => {
  //state
  const [overlay, setOverlay] = useState(false)
  const [history, setHistory] = useState([])
  const [pagination, setPagination] = useState({ page: 0, total: null, limit: LIMIT });
  const [error, setError] = useState({ isError: false, message: '' });


  //Helpers
  async function loadHistory() {
    setOverlay(true);
    try {
      const { page, limit, total, data } = await api.fetchHistory({ page: pagination.page, limit: pagination.limit });
      setHistory(data)
      setPagination({ page, limit, total });
    } catch (error) {
      console.error('[state/history/loadHistory] Failed to load posts', { error });
      setError({ isError: true, message: error.message });
    } finally {
      setOverlay(false);
    }
  }

  useEffect(() => loadHistory(), [])


  return (<HistoryContext.Provider value={{ overlay, history, pagination, error }} {...props} />);
};

export { useHistory, HistoryProvider };