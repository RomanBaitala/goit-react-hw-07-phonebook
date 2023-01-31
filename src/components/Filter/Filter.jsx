import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
import { Input } from '../ContactForm/ContactForm.styled';
export const Filter = () => {
  const dispatch = useDispatch();

  const onChange = event => {
    const query = event.target.value;
    dispatch(setFilter(query));
  };

  return (
    <label>
      Знайти
      <Input type="text" onChange={onChange} />
    </label>
  );
};
