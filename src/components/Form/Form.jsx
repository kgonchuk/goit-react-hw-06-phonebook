import { nanoid } from 'nanoid';

import css from './Form.module.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { contactState } from '../redux/contact/selector';
import { addContact } from '../redux/contact/contactSlice';

const Form = () => {
  const contacts = useSelector(contactState);
  const dispatch = useDispatch();

  const [contactName, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const handleSubmit = e => {
    e.preventDefault();
    if (contacts.some(({ name }) => name === contactName)) {
      alert(`${contactName} is already in your contacts`);

      return;
    }
    dispatch(
      addContact({
        name: contactName,
        number,
        id: nanoid(),
      })
    );
    setName('');
    setNumber('');
  };
  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label} htmlFor={nameInputId}>
        Name
        <input
          className={css.input}
          type="text"
          name="name"
          value={contactName}
          onChange={handleChange}
          id={nameInputId}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={css.label} htmlFor={numberInputId}>
        Number
        <input
          className={css.input}
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          id={numberInputId}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={css.submit_button} type="submit">
        Add contact
      </button>
    </form>
  );
};
export default Form;
