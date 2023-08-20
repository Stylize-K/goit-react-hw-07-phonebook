import { createSelector } from '@reduxjs/toolkit';

export const selectFilter = state => state.filter.filter;
export const selectContacts = state => state.contacts.items;
export const selectContactsCount = state => state.contacts.items.length;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
