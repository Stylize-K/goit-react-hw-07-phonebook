import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { useSelector } from 'react-redux';
import { getContactsCount } from 'redux/selectors';
import { Toaster } from 'react-hot-toast';
import css from './App.module.css';

export const App = () => {
  const count = useSelector(getContactsCount);
  const { isLoading, error } = useSelector(state => state.contacts);

  return (
    <div
      style={{
        padding: '20px 0 20px 0',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        color: '#010101',
      }}
    >
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.subtitle}>Contacts</h2>
      <p className={css.total}>
        Total contacts in phonebook:
        <span className={css.total_count}> {count}</span>
      </p>
      <Filter />
      {isLoading === true && <h2>Loading...</h2>}
      {error && <h2>An error occurred: {error}</h2>}
      <ContactList />
      <Toaster position="top-right" />
    </div>
  );
};
