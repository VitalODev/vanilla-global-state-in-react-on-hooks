const initialYear = { year: '' };

const yearReducer = (state = initialYear, action) => {

  switch (action.type) {

    case 'SET_YEAR':
      return { year: action.payload };

    default:
      return state;
  }
};

export { yearReducer, initialYear };
