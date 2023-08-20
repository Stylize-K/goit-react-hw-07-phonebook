import { createAsyncThunk } from '@reduxjs/toolkit';
import { getContacts, postContact, removeContact } from 'services/apiService';

//Створюємо асинхроний thunk для отримання списку контактів з бекенду
export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async function (_, { rejectWithValue }) {
    try {
      const data = await getContacts();
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
      const data = await postContact(contact);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

//Створюємо асинхроний thunk для видалення контакту
export const deleteContact = createAsyncThunk(
  'contacts/addContact',
  async function (contactId, { rejectWithValue }) {
    try {
      const data = await removeContact(contactId);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
