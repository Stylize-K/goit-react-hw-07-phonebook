import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

//Базовий URL для всіх запитів з Axios.
axios.defaults.baseURL = 'https://64de3533825d19d9bfb24a71.mockapi.io/contacts';

//Створюємо асинхроний thunk для отримання списку контактів з бекенду
export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async function (_, { rejectWithValue }) {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

//Створюємо асинхроний thunk для додавання нового контакту
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async function (contact, { rejectWithValue }) {
    try {
      const { data } = await axios.post('/contacts', contact);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

//Створюємо асинхроний thunk для видалення контакту
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async function (contactId, { rejectWithValue }) {
    try {
      const { data } = await axios.delete(`/contacts/${contactId}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
