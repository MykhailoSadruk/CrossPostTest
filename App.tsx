import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabs from './src/Navigation/BottomTabs';

const App = () => {
  return (
    <NavigationContainer>
      <BottomTabs />
    </NavigationContainer>
  );
};

export default App;
