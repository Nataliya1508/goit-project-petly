import instance from './auth';

export const getNoticesByCategory = async categoryName => {
  const { data } = await instance.post(`/notices/category/${categoryName}`);
  console.log(data);
  return data;
};

export const getNoticeById = async id => {
  const { data } = await instance.post(`/notices/${id}`);
  console.log(data);
  return data;
};

export const addNotice = async data => {
  const { data: result } = await instance.post('/notices', data);
  console.log(result);
  return result;
};

export const getMyNotice = async () => {
  const { data } = await instance.get(`/notices/myNotice`);
  console.log(data);
  return data;
};

export const getFavorites = async () => {
  const { data } = await instance.get(`/notices/favorites`);
  console.log(data);
  return data;
};
export const addToFavorites = async id => {
  const { data } = await instance.patch(`/notices/favorites/${id}`);
  console.log(data);
  return data;
};

export const deleteMyNotice = async id => {
  const { data } = await instance.delete(`/notices/${id}`);
  console.log(data);
  return data;
};

export const removeFromFavorites = async id => {
  const { data } = await instance.patch(`/notices/favorites/${id}`);
  console.log(data);
  return data;
};
