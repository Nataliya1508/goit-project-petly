import * as api from '../../services/api/notice';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { errorToast, successToast } from 'shared/components';

export const getNoticesByCategory = createAsyncThunk(
  'notices/getNoticesByCategory',
  async (categoryName, { rejectWithValue }) => {
    try {
      const result = await api.getNoticesByCategory(categoryName);
      return result;
    } catch ({ response }) {
      errorToast('Something went wrong, try to reload the page');
      const { status, data } = response;
      const error = {
        status,
        message: data.message,
      };
      return rejectWithValue(error);
    }
  }
);

export const getNoticeById = createAsyncThunk(
  'notices/getNoticeById',
  async (id, { rejectWithValue }) => {
    try {
      const result = await api.getNoticeById(id);
      return result;
    } catch ({ response }) {
      errorToast('Something went wrong, try to reload the page');
      const { status, data } = response;
      const error = {
        status,
        message: data.message,
      };
      return rejectWithValue(error);
    }
  }
);

export const addNotice = createAsyncThunk(
  'notices/addNotice',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.addNotice(data);
      successToast('Notice was successfully created !');
      return result;
    } catch ({ response }) {
      errorToast('Something went wrong, try to reload the page');
      const { status, data } = response;
      const error = {
        status,
        message: data.message,
      };
      return rejectWithValue(error);
    }
  }
);

export const getMyNotice = createAsyncThunk(
  'notices/getMyNotice',
  async (_, { rejectWithValue }) => {
    try {
      const result = await api.getMyNotice();
      return result;
    } catch ({ response }) {
      errorToast('Something went wrong, try to reload the page');
      const { status, data } = response;
      const error = {
        status,
        message: data.message,
      };
      return rejectWithValue(error);
    }
  }
);

export const getFavorites = createAsyncThunk(
  'notices/getFavorites ',
  async (user_id, { rejectWithValue }) => {
    try {
      const result = await api.getFavorites();
      return result;
    } catch ({ response }) {
      errorToast('Something went wrong, try to reload the page');
      const { status, data } = response;
      const error = {
        status,
        message: data.message,
      };
      return rejectWithValue(error);
    }
  }
);

export const addToFavorites = createAsyncThunk(
  'notices/addToFavorites',
  async (id, { rejectWithValue }) => {
    try {
      const result = await api.addToFavorites(id);
      successToast('Pet was successfully added to favorite !');
      return result;
    } catch ({ response }) {
      errorToast('Something went wrong, try to reload the page');
      const { status, data } = response;
      const error = {
        status,
        message: data.message,
      };
      return rejectWithValue(error);
    }
  }
);

export const deleteMyNotice = createAsyncThunk(
  'notices/deleteMyNotice',
  async (id, { rejectWithValue }) => {
    try {
      const result = await api.deleteMyNotice(id);
      successToast('Pet was successfully deleted !');
      return { result, id };
    } catch ({ response }) {
      errorToast('Something went wrong, try to reload the page');
      const { status, data } = response;
      const error = {
        status,
        message: data.message,
      };
      return rejectWithValue(error);
    }
  }
);

export const removeFromFavorites = createAsyncThunk(
  'notices/removeFromFavorites',
  async (id, { rejectWithValue }) => {
    try {
      const result = await api.removeFromFavorites(id);
      successToast('Pet was successfully removed to favorite !');
      return result;
    } catch ({ response }) {
      errorToast('Something went wrong, try to reload the page');
      const { status, data } = response;
      const error = {
        status,
        message: data.message,
      };
      return rejectWithValue(error);
    }
  }
);
