//Global
import { createContext, useState, useContext, useEffect } from 'react';

//Local
import api from '../lib/api';

// Defines
const HistoryContext = createContext();
const LIMIT = 3;

//React hook

const useHistory = () => {
  const context = useContext(HistoryContext)
  if (!context) {
    throw new Error('Can not run without "HistoryProvider"');
  }

  return context;
}

const HistoryProvider = (props) => {
  //state
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]);
  const [page, setPage] = useState(0);
  const [pagination, setPagination] = useState({ total: null, limit: LIMIT });
  const [error, setError] = useState({ isError: false, message: '' });

  //Helpers
  const loadHistory = async () => {
    setLoading(true);
    try {
      const { limit, total, data } = await api.fetchHistory({...pagination, page});

      setHistory(data);
      setPagination({ limit, total });
    } catch (error) {
      console.error('[state/history/loadHistory] Failed to load posts', { error });
      setError({ isError: true, message: error.message });
    } finally {
      setLoading(false);
    }
  }

  const onPageChange = async (page) => {
    setPage(page);
  }

  useEffect(() => loadHistory(), []);
  useEffect(() => loadHistory(), [page]);


  const methods = {
    onPageChange,
    loadHistory
  };
  const value = {
    loading,
    history,
    pagination,
    error,
    page,
    methods
  };

  return (<HistoryContext.Provider value={value} {...props} />);
};

export { useHistory, HistoryProvider };