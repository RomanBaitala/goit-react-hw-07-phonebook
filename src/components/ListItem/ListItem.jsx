import PropTypes from 'prop-types';
import { deleteContact } from 'redux/operations';
import { useDispatch } from 'react-redux';
import { Button } from '../ContactList/ContactList.styled';

export const ListItem = ({ contact: { name, phone, id } }) => {
  const dispatch = useDispatch();
  const onDeleteContact = () => dispatch(deleteContact(id));

  return (
    <div>
      {name} {phone} {id}
      <Button type="button" onClick={onDeleteContact}>
        Видалити
      </Button>
    </div>
  );
};

ListItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
};
