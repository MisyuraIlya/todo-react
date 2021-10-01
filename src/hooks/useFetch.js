import api from '../lib/api';

export const useFetchedPosts = (page, limit) => {
  const fetched = api.fetchPosts({ page, limit });
  return fetched
}