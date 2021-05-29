import React from 'react';

import { CitiesProvider } from './Cities';

const AppProvider: React.FC = ({ children }) => (
  <CitiesProvider>{children}</CitiesProvider>
);

export default AppProvider;
