import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { useSelector, useDispatch } from 'react-redux';
import { selectContactsCount } from 'redux/selectors';
import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { ColorRing } from 'react-loader-spinner';

import css from './App.module.css';

export const App = () => {
  const count = useSelector(selectContactsCount);
  const { isLoading, error } = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.subtitle}>Contacts</h2>
      <p className={css.total}>
        Total contacts in phonebook:
        <span className={css.total_count}> {count}</span>
      </p>
      <Filter />
      {isLoading === true && (
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={['#e15b64', '#f47e60', '#f8b26a', '#4bb36a', '#80bb3d']}
        />
      )}
      {error && <h2>An error occurred: {error}</h2>}
      <ContactList />
      <Toaster position="top-right" />
    </div>
  );
};
