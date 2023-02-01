import { useDispatch, useSelector } from 'react-redux';
import { Label, Input, Form } from './ContactForm.styled';
import { addContact } from '../../redux/operations';
import { selectContacts } from 'redux/selectors';
import Notiflix from 'notiflix';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    contacts.contacts.filter(
      contact =>
        contact.name.toLowerCase() === form.elements.name.value.toLowerCase()
    ).length > 0
      ? Notiflix.Notify.failure(
          `${form.elements.name.value} is already in phonebook`
        )
      : dispatch(
          addContact({
            name: form.elements.name.value,
            phone: form.elements.number.value,
          })
        );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Ім'я
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label>
        Телефон
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <button type="submit">Додати контакт</button>
    </Form>
  );
};
