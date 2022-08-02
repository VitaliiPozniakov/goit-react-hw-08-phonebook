import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },

  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const registerUser = createAsyncThunk('auth/registr', async user => {
  try {
    const { data } = await axios.post('/users/signup', user);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log(error);
    if (error.response.status === 400) {
      toast.error('User creation error! Please try again!');
    } else if (error.response.status === 500) {
      toast.error('Oops! Server error! Please try later!');
    } else {
      toast.error('Something went wrong!');
    }
  }
});

const loginUser = createAsyncThunk('auth/login', async user => {
  try {
    const { data } = await axios.post('users/login', user);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log(error);
    toast.error('Invalid email or password! Try again!');
  }
});

const logoutUser = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('users/logout');
    token.unset();
  } catch (error) {
    console.log(error);
    if (error.response.status === 500) {
      toast.error('Oops! Server error! Please try later!');
    } else {
      toast.error('Something went wrong! Please reload the page!');
    }
  }
});

const getCurrentUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;

  if (persistedToken === null) {
    return thunkAPI.rejectWithValue();
  }

  token.set(persistedToken);

  try {
    const { data } = await axios.get('users/current');
    return data;
  } catch (error) {
    token.unset();
    toast.warn('Authorization timed out! Please authenticate again!');
    console.log(error);
  }
});

const operations = {
  registerUser,
  loginUser,
  logoutUser,
  getCurrentUser,
};

export default operations;
