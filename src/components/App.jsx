import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export const App = () => {
  return (
    <div>
      <h1>Телефонна книга</h1>
      <ContactForm />
      <h2>Контакти</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
