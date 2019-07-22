import React, { createContext, useReducer } from 'react';

const initialYear = { year: '' };

const yearReducer = (state, action) => {

  switch (action.type) {

    case 'SET_YEAR':
      return { year: action.payload };

    default:
      return state;
  }
};

const yearContext = createContext();

const YearProvider = (props) => {

  const [ yearState, yearDispatch ] = useReducer(yearReducer, initialYear);

  return (
    <yearContext.Provider value={{ yearState, yearDispatch }}>
      { props.children }
    </yearContext.Provider>
  );
};

export { YearProvider, yearContext };
