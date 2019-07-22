import React, { createContext, useReducer } from 'react';

const initialDay = { day: '' };

const dayReducer = (state, action) => {

  switch (action.type) {

    case 'SET_DAY':
      return { day: action.payload };

    default:
      return state;
  }
};

const dayContext = createContext();

const DayProvider = (props) => {

  const [ dayState, dayDispatch ] = useReducer(dayReducer, initialDay);

  return (
    <dayContext.Provider value={{ dayState, dayDispatch }}>
      { props.children }
    </dayContext.Provider>
  );
};

export { DayProvider, dayContext };
