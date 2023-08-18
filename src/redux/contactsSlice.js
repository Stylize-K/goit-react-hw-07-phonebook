import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getContacts } from 'services/apiService';

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

//Початкове значення стейту у contactSlice
const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

//Створюємо contactsSlice
export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.items = [...state.items, action.payload];
      //   state.contacts.push(action.payload) - можна також напряму пушити масив, бо спрацює ліба Immer та виконує оновлення імутабельно
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(el => el.id !== action.payload);
    },
  },
  //Асинхроні редюсери (extraReducers)
  extraReducers: {
    [fetchContacts.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [fetchContacts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.items = action.payload;
    },
    [fetchContacts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions; // Експортуємо actions у зовнішній код
export const contactsReducer = contactsSlice.reducer; // Експортуємо filterReducer у зовнішній код
