import { ListItem } from '../ListItem/ListItem';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import { List, Item, Button } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const visibleContacts = Object.values(contacts.items).filter(contact =>
    contact?.name?.toLowerCase()?.includes(filter)
  );
  const dispatch = useDispatch();

  const onDeleteContact = contact => dispatch(deleteContact(contact));

  return (
    <List>
      {visibleContacts.map(contact => (
        <Item key={contact.id}>
          {' '}
          {<ListItem contact={contact} />}
          <Button type="button" onClick={() => onDeleteContact(contact.id)}>
            Видалити
          </Button>
        </Item>
      ))}
    </List>
  );
};
