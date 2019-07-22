import React, { useReducer, createContext } from 'react';

import {
  dayReducer, initialDay,
  monthReducer, initialMonth,
  yearReducer, initialYear } from './reducers';

const globalStateContext = createContext();
const Provider = globalStateContext.Provider;

const StateProvider = (props) => {

  const [ dayState, dayDispatch ] = useReducer(dayReducer, initialDay);
  const [ monthState, monthDispatch ] = useReducer(monthReducer, initialMonth);
  const [ yearState, yearDispatch ] = useReducer(yearReducer, initialYear);

  const providersScope = {
    dayState, dayDispatch,
    monthState, monthDispatch,
    yearState, yearDispatch
  };

  return <Provider value={providersScope} {...props} />;
};

export { globalStateContext };
export default StateProvider;
