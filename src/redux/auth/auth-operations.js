import * as api from '../../services/api/auth';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { errorToast, successToast } from 'shared/components';

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await api.register(credentials);

      return data;
    } catch ({ response }) {
      const error = {
        status: response.status,
        message: response.data.message,
      };
      return rejectWithValue(error);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await api.login(credentials);
      return data;
    } catch ({ response }) {
      errorToast('Something went wrong, try to reload the page');
      const error = {
        status: response.status,
        message: response.data.message,
      };
      return rejectWithValue(error);
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const result = await api.logout();
      return result;
    } catch ({ response }) {
      errorToast('Something went wrong, try to reload the page');
      const error = {
        status: response.status,
        message: response.data.message,
      };
      return rejectWithValue(error);
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  'auth/current',
  async (_, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      const persistedToken = auth.token;

      if (!persistedToken) {
        rejectWithValue('Unable to fetch user');
      }

      const { data } = await api.getCurrentUser(persistedToken);
      return data;
    } catch ({ response }) {
      const error = {
        status: response.status,
        message: response.data.message,
      };
      return rejectWithValue(error);
    }
  }
);

export const updateUser = createAsyncThunk(
  'auth/update',
  async (credentials, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      const persistedToken = auth.token;

      if (!persistedToken) {
        rejectWithValue('Unable update user');
      }

      const data = await api.updateUserData(credentials);
      return data;
    } catch ({ response }) {
      errorToast('Something went wrong, try to reload the page');
      const error = {
        status: response.status,
        message: response.data.message,
      };
      return rejectWithValue(error);
    }
  }
);

export const updateUserAvatar = createAsyncThunk(
  'auth/avatar',
  async (avatar, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      const persistedToken = auth.token;

      if (!persistedToken) {
        rejectWithValue('Unable update avatar');
      }

      const data = await api.updateUserAvatar(avatar);
      return data;
    } catch ({ response }) {
      errorToast('Something went wrong, try to reload the page');
      const error = {
        status: response.status,
        message: response.data.message,
      };
      return rejectWithValue(error);
    }
  }
);

export const addNewPet = createAsyncThunk(
  'auth/addPet',
  async (newPet, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      const persistedToken = auth.token;

      if (!persistedToken) {
        rejectWithValue('Unable add new pet');
      }

      const data = await api.addPet(newPet);
      successToast('Pet was successfully created');
      return data;
    } catch ({ response }) {
      errorToast('Something went wrong, try to reload the page');
      const error = {
        status: response.status,
        message: response.data.message,
      };
      return rejectWithValue(error);
    }
  }
);

export const deletePet = createAsyncThunk(
  'auth/deletePet',
  async (id, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      const persistedToken = auth.token;

      if (!persistedToken) {
        rejectWithValue('Unable delete pet');
      }
      successToast('Pet was successfully deleted');
      await api.deletePet(id);
      return id;
    } catch ({ response }) {
      errorToast('Something went wrong, try to reload the page');
      const error = {
        status: response.status,
        message: response.data.message,
      };
      return rejectWithValue(error);
    }
  }
);
