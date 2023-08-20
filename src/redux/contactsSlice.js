import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

//Початкове значення стейту у contactSlice
const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

//Створюємо contactsSlice
export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  //Асинхроні редюсери (extraReducers)
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.items = action.payload;
    },
    [fetchContacts.rejected]: handleRejected,
    [addContact.pending]: handlePending,
    [addContact.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items = [...state.items, action.payload];
      // state.items.push(action.payload); // можна також напряму пушити масив, бо спрацює ліба Immer та виконує оновлення імутабельно
    },
    [addContact.rejected]: handleRejected,
    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      // state.items = state.items.filter(el => el.id !== action.payload);
      const index = state.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
    [deleteContact.rejected]: handleRejected,
  },
});

export const contactsReducer = contactsSlice.reducer; // Експортуємо filterReducer у зовнішній код
