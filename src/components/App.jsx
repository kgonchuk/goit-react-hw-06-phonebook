// import { Component } from 'react';
import Form from './Form/Form';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
// import { nanoid } from 'nanoid';
// import { useEffect, useState } from 'react';

export const App = () => {
  return (
    <div>
      <h2>Phonebook</h2>
      <Form />
      <h2>Contacts:</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

// export const App = () => {
//   const phoneContacts = [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ];
//   const [contacts, setContacts] = useState(() => {
//     return JSON.parse(window.localStorage.getItem('contacts')) ?? phoneContacts;
//   });
//   const [filter, setFilter] = useState('');

//   useEffect(() => {
//     window.localStorage.setItem('contacts', JSON.stringify(contacts));
//   }, [contacts]);

//   const addContact = contact => {
//     const existingContact = contacts.some(
//       ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
//     );

//     if (existingContact) {
//       alert(`Contact ${contact.name} is already exist!`);
//       return;
//     }

//     setContacts(prevContacts => [
//       ...prevContacts,
//       { id: nanoid(), ...contact },
//     ]);
//   };
//   const changeFilter = e => {
//     setFilter(e.currentTarget.value);
//   };

//   const visibleContact = () => {
//     const filterLowerCase = filter;
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(filterLowerCase)
//     );
//   };

//   const deleteContact = id => {
//     setContacts(prevContacts =>
//       prevContacts.filter(contact => contact.id !== id)
//     );
//   };

//   return (
//     <div>
//       <h2>Phonebook</h2>
//       <Form onSubmitProp={addContact} />
//       <h2>Contacts:</h2>
//       <Filter value={filter} onChangeFilter={changeFilter} />
//       <ContactList contacts={visibleContact()} onDelete={deleteContact} />
//     </div>
//   );
// };
