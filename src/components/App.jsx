


import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../redux/operations';
import Form from 'components/Form/Form';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { StyledTitle, Box } from './App.styled';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box>
      <StyledTitle>Phonebook</StyledTitle>
      <Form />
      <StyledTitle>Contacts</StyledTitle>
      <Filter />
      <ContactList />
    </Box>
  );
}