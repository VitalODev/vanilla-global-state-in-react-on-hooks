const initialMonth = { month: '' };

const monthReducer = (state, action) => {

  switch (action.type) {

    case 'SET_MONTH':
      return { month: action.payload };

    default:
      return state;
  }
};

export { monthReducer, initialMonth };
