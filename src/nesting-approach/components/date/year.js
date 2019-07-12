import React, { useContext, useEffect } from 'react';

import { yearContext } from '../../store/year';

const Year = () => {

  const { yearState: { year }, yearDispatch } = useContext(yearContext);

  useEffect(
    () => yearDispatch({ type: 'SET_YEAR', payload: 2019 }),
    [ yearDispatch ]
  );

  return <span>{ year }</span>;
};

export default Year;
