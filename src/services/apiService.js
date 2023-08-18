import axios from 'axios';

//Базовий URL для всіх запитів з Axios.
axios.defaults.baseURL =
  'https://64de3533825d19d9bfb24a71.mockapi.io/contacts/contacts';

//Функція, що фетчить список контактів бекенду (mockapi.io)
export const getContacts = async () => {
  const { data } = await axios({
    params: {
      limit: 10,
      page: 1,
    },
  });
  return data;
};

// //Функція, що фетчить список фільмів за ключевим словом (для сторінки Movies)
// export const fetchMovies = async query => {
//   axios.defaults.baseURL = 'https://api.themoviedb.org/3/search/movie';
//   const { data } = await axios({
//     // params: {
//     //   query,
//     // },
//   });
//   return data;
// };
