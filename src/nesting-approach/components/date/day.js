import React, { useContext, useEffect } from 'react';

import { dayContext } from '../../store/day';

const Day = () => {

  const { dayState: { day }, dayDispatch } = useContext(dayContext);

  useEffect(
    () => dayDispatch({ type: 'SET_DAY', payload: 9 }),
    [ dayDispatch ]
  );

  return <span style={{ marginRight: '5px' }}>{ day }</span>;
};

export default Day;
