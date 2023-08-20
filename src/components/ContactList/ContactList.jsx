import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';

import css from './ContactList.module.css';

export const ContactList = () => {
  const filteredContacts = useSelector(selectVisibleContacts);

  return (
    <ul className={css.list}>
      {filteredContacts.map(contact => (
        <ContactListItem key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};
