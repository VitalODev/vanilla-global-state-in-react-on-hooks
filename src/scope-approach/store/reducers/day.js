const initialDay = { day: '' };

const dayReducer = (state = initialDay, action) => {

  switch(action.type) {

    case 'SET_DAY':
      return { day: action.payload };

    default:
      return state;
  }
};

export { dayReducer, initialDay };
