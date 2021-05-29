import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import AppProvider from './hooks';

import Routes from './routes';
import {colors} from './config/styles';

const src: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={colors.principal} />
      <SafeAreaView style={{backgroundColor: colors.background, flex: 1}}>
        <AppProvider>
          <Routes />
        </AppProvider>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default src;
