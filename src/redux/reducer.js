import { combineReducers } from 'redux';
import { filterReducer } from './filterSlice';
import { contactReducer } from './contactsSlice';

const contactsReducer = combineReducers({
  items: contactReducer,
  filter: filterReducer,
});

export const rootReducer = combineReducers({
  contacts: contactsReducer,
});
