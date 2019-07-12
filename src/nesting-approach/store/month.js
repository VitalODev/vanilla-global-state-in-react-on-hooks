import React, { createContext, useReducer } from 'react';

const initialMonth = { month: '' };

const monthReducer = (state = initialMonth, action) => {

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
    <monthContext.Provider value={{ monthState, monthDispatch }}>
      { props.children }
    </monthContext.Provider>
  );
};

export { MonthProvider, monthContext };
