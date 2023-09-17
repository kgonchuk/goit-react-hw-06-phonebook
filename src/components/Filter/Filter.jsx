import React from 'react';
// import PropTypes from 'prop-types';
import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { filterState } from '../redux/filter/selector';
import { setFilter } from '../redux/filter/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(filterState);

  const onChangeFilter = e => {
    dispatch(setFilter(e.target.value));
  };

  <div className={css.filter__box}>
    <label>
      Find contacts by name
      <input
        type="text"
        value={filter}
        name={filter}
        placeholder="Enter phone number to find"
        onChange={onChangeFilter}
        className={css.input}
      />
      <input />
    </label>
  </div>;
};
export default Filter;
