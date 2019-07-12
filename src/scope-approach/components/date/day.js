import React, { useContext, useEffect } from 'react';

import { globalStateContext } from '../../store';

const Day = () => {

  const { dayState: { day }, dayDispatch } = useContext(globalStateContext);

  useEffect(
    () => dayDispatch({ type: 'SET_DAY', payload: 9 }),
    [ dayDispatch ]
  );

  return <span style={{ marginRight: '5px' }}>{ day }</span>;
};

export default Day;
