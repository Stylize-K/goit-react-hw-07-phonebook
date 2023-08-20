import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

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
  // reducers: {
  //   addContact: (state, action) => {
  //     state.items = [...state.items, action.payload];
  //     //   state.contacts.push(action.payload) - можна також напряму пушити масив, бо спрацює ліба Immer та виконує оновлення імутабельно
  //   },
  //   deleteContact: (state, action) => {
  //     state.items = state.items.filter(el => el.id !== action.payload);
  //   },
  // },
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
    [addContact.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [addContact.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items = [...state.items, action.payload];
      //   state.contacts.push(action.payload) - можна також напряму пушити масив, бо спрацює ліба Immer та виконує оновлення імутабельно
    },
    [addContact.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [deleteContact.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [deleteContact.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items = state.items.filter(el => el.id !== action.payload);
    },
    [deleteContact.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

// export const { addContact, deleteContact } = contactsSlice.actions; // Експортуємо actions у зовнішній код
export const contactsReducer = contactsSlice.reducer; // Експортуємо filterReducer у зовнішній код
