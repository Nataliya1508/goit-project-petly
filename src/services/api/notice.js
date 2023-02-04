import instance from './auth';

export const getNoticesByCategory = async categoryName => {
  const { data } = await instance.post(`/api/notices/category/${categoryName}`);
  console.log(data);
  return data;
};

export const getNoticeById = async id => {
  const { data } = await instance.post(`/api/notices/${id}`);
  console.log(data);
  return data;
};

export const addNotice = async data => {
  const { data: result } = await instance.post('/api/notices', data);
  console.log(result);
  return result;
};

export const getMyNotice = async () => {
  const { data } = await instance.get(`/api/notices/`);
  console.log(data);
  return data;
};

export const getFavorites = async () => {
  const { data } = await instance.get(`/api/notices/favorites`);
  console.log(data);
  return data;
};
export const addToFavorites = async id => {
  const { data } = await instance.patch(`/api/notices/favorites/${id}`);
  console.log(data);
  return data;
};

export const deleteMyNotice = async id => {
  const { data } = await instance.delete(`/api/notices/${id}`);
  console.log(data);
  return data;
};

export const removeFromFavorites = async id => {
  const { data } = await instance.put(`/api/notices/favorites/${id}`);
  console.log(data);
  return data;
};
