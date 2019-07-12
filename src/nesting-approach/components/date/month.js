import React, { useContext, useEffect } from 'react';

import { monthContext } from '../../store/month';

const Month = () => {

  const { monthState: { month }, monthDispatch } = useContext(monthContext);

  useEffect(
    () => monthDispatch({ type: 'SET_MONTH', payload: 'July' }),
    [ monthDispatch ]
  );

  return <span style={{ marginRight: '5px' }}>{ month }</span>;
};

export default Month;
