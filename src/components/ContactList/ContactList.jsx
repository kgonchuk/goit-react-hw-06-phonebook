import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { filterState } from '../redux/filterSlice';
import { contactState } from '../redux/contactSlice';
import { deleteContact } from '../redux/contactSlice';

const ContactList = () => {
  const dispatch = useDispatch();
  const filter = useSelector(filterState);
  const contacts = useSelector(contactState);

  const normalizeFilter = filter.toLowerCase();
  const filteredContatcs = contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizeFilter)
  );

  return (
    <ul className={css.contact__list}>
      {filteredContatcs.map(({ id, name, number }) => (
        <li key={id} className={css.item}>
          {name}: {number}
          <button
            className={css.button__delete}
            type="button"
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
export default ContactList;
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
