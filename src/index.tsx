import React from 'react';
import { AppearanceProvider } from 'react-native-appearance';
import { Appear } from './components/appearance';

const App = () => {
  return (
    <AppearanceProvider>
      <Appear />
    </AppearanceProvider>
  )
};

export default App;