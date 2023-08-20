import axios from 'axios';

//Базовий URL для всіх запитів з Axios.
axios.defaults.baseURL =
  'https://64de3533825d19d9bfb24a71.mockapi.io/contacts/contacts';

//Функція, що фетчить список контактів бекенду (mockapi.io)
export const getContacts = async () => {
  const { data } = await axios({
    // params: {
    //   limit: 10,
    //   page: 1,
    // },
  });
  return data;
};

//Функція, що додає новий контакт
export const postContact = async contact => {
  const { data } = await axios.post(contact);
  return data;
};

//Функція, що видаляє контакт
export const removeContact = async contactId => {
  const { data } = await axios.delete(`${contactId}`);
  return data;
};
