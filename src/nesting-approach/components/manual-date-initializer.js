import React, { useState, useContext } from 'react';

import { dayContext } from '../store/day';
import { monthContext } from '../store/month';
import { yearContext } from '../store/year';

const ManualDateInitializer = () => {

  const { dayDispatch } = useContext(dayContext);
  const { monthDispatch } = useContext(monthContext);
  const { yearDispatch } = useContext(yearContext);

  const [ day, setDay ] = useState('');
  const [ month, setMonth ] = useState('');
  const [ year, setYear ] = useState('');

  const changeDate = (event) => {

    event.preventDefault();

    if (day) dayDispatch({ type: 'SET_DAY', payload: day });
    if (month) monthDispatch({ type: 'SET_MONTH', payload: month });
    if (year) yearDispatch({ type: 'SET_YEAR', payload: year });
  };

  return (
    <form
      style={{ marginTop: '20px', display: 'flex', flexDirection: 'column' }}
      onSubmit={changeDate}
    >
      <label style={{ marginBottom: '10px' }}>
        Day:
        <input
          type='text'
          onChange={(event) => setDay(event.target.value)}
        />
      </label>

      <label style={{ marginBottom: '10px' }}>
        Month:
        <input
          type='text'
          onChange={(event) => setMonth(event.target.value)}
        />
      </label>

      <label style={{ marginBottom: '10px' }}>
        Year:
        <input
          type='text'
          onChange={(event) => setYear(event.target.value)}
        />
      </label>

      <button type='submit' style={{ width: '120px' }}>Change date</button>
    </form>
  );
};

export default ManualDateInitializer;
