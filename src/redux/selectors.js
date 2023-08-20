import { createSelector } from '@reduxjs/toolkit';

export const selectFilter = state => state.filter.filter;
export const selectContacts = state => state.contacts.items;
export const selectContactsCount = state => state.contacts.items.length;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

//Створимо селектор для отримання відфільтрованих контактів. Так наш код в компоненті contactsList буде чистіший, а селектор створений за допомогою createSelector буде мемоізований, тобто який перераховує contacts, коли змінюється значення state.contacts або state.filter, але не тоді, коли зміни відбуваються в інших (незалежних) частинах дерева.

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
