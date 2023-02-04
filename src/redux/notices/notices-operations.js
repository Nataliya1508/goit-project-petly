import * as api from '../../services/api/notice';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getNoticesByCategory = createAsyncThunk(
  'notices/getNoticesByCategory',
  async (categoryName, { rejectWithValue }) => {
    try {
      const result = await api.getNoticesByCategory(categoryName);
      return result;
    } catch ({ response }) {
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
      return result;
    } catch ({ response }) {
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
  async (_, { rejectWithValue }) => {
    try {
      const result = await api.getFavorites();
      return result;
    } catch ({ response }) {
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
      return result;
    } catch ({ response }) {
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
      return result;
    } catch ({ response }) {
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
      return result;
    } catch ({ response }) {
      const { status, data } = response;
      const error = {
        status,
        message: data.message,
      };
      return rejectWithValue(error);
    }
  }
);
