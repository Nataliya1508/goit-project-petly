import instance from './auth';

export const getNoticesByCategory = async (categoryName, page, limit=8) => {
  const { data } = await instance.get(`/api/notices/category/${categoryName}?&page=${page}&limit=${limit}`);
  return data;
};

export const getNoticesByCategoryWithQuery = async (categoryName, searchQuery, page=1, limit=8) => {
  
  const { data } = await instance.get(`/api/notices/category/${categoryName}?query=${searchQuery}&page=${page}&limit=${limit}`);
  return data;
};

export const getNoticeById = async id => {
  const { data } = await instance.get(`/api/notices/${id}`);
  return data;
};

export const addNotice = async data => {
  const { data: result } = await instance.post('/api/notices', data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return result;
};

export const getMyNotice = async () => {
  const { data } = await instance.get(`/api/notices/`);
  return data;
};

export const getFavorites = async () => {
  const { data } = await instance.get('/api/notices/favorites/all');
  return data;
};
export const addToFavorites = async id => {
  const { data } = await instance.patch(`/api/notices/favorites/${id}`);
  return data;
};

export const deleteMyNotice = async id => {
  const { data } = await instance.delete(`/api/notices/${id}`);
  return data;
};

export const removeFromFavorites = async id => {
  const { data } = await instance.put(`/api/notices/favorites/${id}`);
  return data;
};
