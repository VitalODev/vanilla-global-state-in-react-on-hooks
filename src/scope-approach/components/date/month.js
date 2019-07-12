import React, { useEffect, useContext } from 'react';

import { globalStateContext } from '../../store';

const Month = () => {

  const { monthState: { month }, monthDispatch } = useContext(globalStateContext);

  useEffect(
    () => monthDispatch({ type: 'SET_MONTH', payload: 'July' }),
    [ monthDispatch ]
  );

  return <span style={{ marginRight: '5px' }}>{ month }</span>;
};

export default Month;
