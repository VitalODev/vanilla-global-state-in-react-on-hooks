import React, { createContext, useReducer } from 'react';

const initialMonth = { month: '' };

const monthReducer = (state, action) => {

  switch (action.type) {

    case 'SET_MONTH':
      return { month: action.payload };

    default:
      return state;
  }
};

const monthContext = createContext();

const MonthProvider = (props) => {

  const [ monthState, monthDispatch ] = useReducer(monthReducer, initialMonth);

  return (
    <monthContext.Provider value={{ monthState, monthDispatch }} {...props} />
  );
};

export { MonthProvider, monthContext };
