import React from 'react';

import { DayProvider } from './day';
import { MonthProvider } from './month';
import { YearProvider } from './year';

const providers = [ DayProvider, MonthProvider, YearProvider ];

const StateProvider = providers.reduce(
  (Previous, Next) => {
    return (props) => {
      return <Previous><Next>{ props.children }</Next></Previous>;
    };
  }
);

export default StateProvider;
