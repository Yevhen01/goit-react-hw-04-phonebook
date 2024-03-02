import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { Container, Title, SubTitle, EmptyInfoText } from './App.styled';

import ContactForm from './components/ContactForm/ContactForm';
import { Filter } from './components/Filter/Filter';
import { ContactList } from './components/ContactList/ContactList';

const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return alert(`${name} is already in contacts`);
    }

    if (contacts.find(contact => contact.number === number)) {
      return alert(`${number} is already in contacts`);
    }

    if (name.trim() === '' || number.trim() === '') {
      alert(`Enter the contact's name and number phone!`);
    }
    setContacts(prevState =>
      [newContact, ...prevState].sort((first, second) =>
        first.name.localeCompare(second.name)
      )
    );

    return true;
  };

  const handleFilter = evt => {
    setFilter(evt.currentTarget.value);
  };

  const removeContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  const visibleContacts = contacts.filter(element =>
    element.name.toUpperCase().includes(filter.toUpperCase())
  );

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm onSubmit={addContact} />
      <SubTitle>Contacts</SubTitle>
      {contacts.length > 1 && <Filter handleFilter={handleFilter} />}
      {contacts.length > 0 ? (
        <ContactList contacts={visibleContacts} removeContact={removeContact} />
      ) : (
        <EmptyInfoText>Phonebook is empty! Please add a contact.</EmptyInfoText>
      )}
    </Container>
  );
};

export default App;
