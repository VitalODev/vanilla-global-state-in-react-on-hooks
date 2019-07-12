import React, { useEffect, useContext } from 'react';

import { globalStateContext } from '../../store';

const Year = () => {

  const { yearState: { year }, yearDispatch } = useContext(globalStateContext);

  useEffect(
    () => yearDispatch({ type: 'SET_YEAR', payload: 2019 }),
    [ yearDispatch ]
  );

  return <span>{ year }</span>;
};

export default Year;
