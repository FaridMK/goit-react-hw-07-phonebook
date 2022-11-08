import React from 'react';
import s from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { filterContact } from 'redux/filterSlice';

export default function Filter() {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const eventFilter = e => {
    dispatch(filterContact(e.currentTarget.value));
  };

  return (
    <label className={s.label}>
      Find contacts by name
      <input
        className={s.input}
        type="text"
        value={filter}
        onChange={eventFilter}
      />
    </label>
  );
}
