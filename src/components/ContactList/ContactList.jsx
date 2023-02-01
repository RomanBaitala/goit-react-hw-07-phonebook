import { ListItem } from '../ListItem/ListItem';
import { useDispatch, useSelector } from 'react-redux';
import { List, Item } from './ContactList.styled';
import { visibleContacts } from 'redux/selectors';
import { fetchContacts } from '../../redux/operations';
import { useEffect } from 'react';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(visibleContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <List>
      {contacts.map(contact => (
        <Item key={contact.id}> {<ListItem contact={contact} />}</Item>
      ))}
    </List>
  );
};
