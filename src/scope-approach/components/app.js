import React from 'react';

import StateProvider from '../store';

import Date from './date';
import ManualDateInitializer from './manual-date-initializer';

const App = () => (
  <StateProvider>
    <Date />
    <ManualDateInitializer />
  </StateProvider>
);

export default App;
